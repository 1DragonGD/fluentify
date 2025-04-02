document.addEventListener('DOMContentLoaded', function() {
    // Essential variables
    let currentQuestionIndex = 0;
    let currentQuestions = [];
    let currentAudio = null;
    let score = 0;
    let totalQuestions = 0;

    // DOM Elements
    const elements = {
        checkButton: document.getElementById('checkButton'),
        feedbackMessage: document.getElementById('feedbackMessage'),
        playButton: document.getElementById('playButton'),
        pauseButton: document.getElementById('pauseButton'),
        audioProgressFill: document.getElementById('audioProgressFill'),
        audioTime: document.getElementById('audioTime'),
        questionContainer: document.getElementById('questionContainer'),
        questionProgress: document.getElementById('questionProgress')
    };

    // Get selected exercise data
    const selectedLevel = localStorage.getItem('selectedLevel') || 'easy';
    const selectedExerciseId = localStorage.getItem('selectedExerciseId') || 'easy-1';

    const exerciseDatabase = {
        easy: {
            greetings: {
                audioFiles: ['audios/easy/greetings/greetings-1.mp3'],
                questions: [
                    {
                        title: "What is the name of the man introducing himself?",
                        options: ["Jhon", "Emma", "Laura", "James"],
                        correctAnswer: 0
                    },
                    {
                        title: "Where is Sarah from?",
                        options: ["Canada", "United State", "Toronto", "New York"],
                        correctAnswer: 0
                    },
                    {
                        title: "Where does John live?",
                        options: ["Australia", "London", "Canada", "United States"],
                        correctAnswer: 3
                    }
                ]
            },
            numbers: {
                audioFiles: ['audios/easy/numbers/numbers-1.mp3'],
                questions: [
                    {
                        title: "What time is it when A asks for the time?",
                        options: ["Two o'clock", "Three o'clock", "Four thirty", "Five o'clock"],
                        correctAnswer: 1
                    },
                    {
                        title: "Where does B recommend buying a watch?",
                        options: ["On Fourth Avenue", "On Main Street", "On Fifth Avenue, number 23", "At the mall"],
                        correctAnswer: 2
                    }
                ]
            }
        },
        intermediate: {
            conversations: {
                audioFiles: ['audios/intermediate/conversations/conversations-1.mp3'],
                questions: [
                    {
                        title: "What event does Sarah want to attend over the weekend?",
                        options: ["A music concert", "A sports game", "An art exhibition", "A theater play"],
                        correctAnswer: 2
                    },
                    {
                        title: "Why do they decide to meet at 3:00 PM?",
                        options: ["Because Sarah has another appointment later", "Because the exhibition closes at 6:00 PM and they want enough time to see everything", "Because the restaurant only takes reservations before 6:00 PM", "Because they have dinner plans at 5:00 PM"],
                        correctAnswer: 1
                    }
                ]
            },
            problems: {
                audioFiles: ['audios/intermediate/problems/problems-1.mp3'],
                questions: [
                    {
                        title: "Why is A having a difficult time at work?",
                        options: ["Their manager is being unfair", "They are not interested in their job", "They are given more projects than they can handle", "They don't like working with their team"],
                        correctAnswer: 2
                    },
                    {
                        title: "What solution does B suggest to A?",
                        options: ["Quitting the job", "Ignoring the workload", "Preparing specific examples and suggesting solutions", "Asking for a salary raise"],
                        correctAnswer: 2
                    }
                ]
            }
        },
        expert: {
            complex: {
                audioFiles: ['audios/expert/complex/complex-1.mp3'],
                questions: [
                    {
                        title: "What made the narrator decide to become a teacher?",
                        options: ["They lost their job in corporate finance", 
                            "A friend convinced them to change careers", 
                            "A rewarding experience tutoring a student named Miguel", 
                            "They always wanted to be a teacher"],
                        correctAnswer: 2
                    },
                    {
                        title: "How did the narrator help Miguel understand algebra?",
                        options: ["By giving him extra homework", 
                            "By asking another tutor to help him", 
                            "By relating equations to his interest in basketball statistics", 
                            "By telling him to practice more on his own"],
                        correctAnswer: 2
                    },
                    {
                        title: "How did the narrator’s colleagues react to their career change?",
                        options: ["They fully supported the decision", 
                            "They wanted to become teachers too", 
                            "They were indifferent", 
                            "They thought the narrator was having a midlife crisis"],
                        correctAnswer: 3
                    },
                    {
                        title: "HWhat does the narrator find most rewarding about teaching?",
                        options: ["Helping students overcome academic obstacles ", 
                            "The opportunity to travel frequently", 
                            "The high salary", 
                            "The opportunity to travel frequently"],
                        correctAnswer: 0
                    }
                ]
            },
            narratives: {
                audioFiles: ['audios/expert/narratives/narratives-1.mp3'],
                questions: [
                    {
                        title: "What surprised the narrator the most about Kyoto?",
                        options: ["The city was exactly as they had imagined", 
                            "It was too modern and not traditional enough", 
                            "They didn’t enjoy their time in Kyoto", 
                            "The experience of being there was beyond what guidebooks could prepare them for"],
                        correctAnswer: 3
                    },
                    {
                        title: "What lesson did the narrator learn from their experience at the temple?",
                        options: ["How to speak Japanese fluently", 
                            "That Kyoto is too crowded for meditation", 
                            "The importance of 'ma' – the meaningful space between things", 
                            "That meditation is too difficult to practice"],
                        correctAnswer: 2
                    },
                    {
                        title: "What did the elderly monk help the narrator with?",
                        options: ["Practicing meditation techniques", 
                            "Translating ancient scrolls", 
                            "Finding a hidden tourist spot", 
                            "Learning traditional Japanese calligraphy"],
                        correctAnswer: 0
                    },
                    {
                        title: "How did the narrator describe the contrast between the temple and the city?",
                        options: ["The city was just as peaceful as the temple", 
                            "The temple was serene, while the city outside was bustling", 
                            "There was no real difference between the two", 
                            "The temple was too isolated from the city"],
                        correctAnswer: 1
                    }
                ]
            }
        }
    };

    const exerciseCategoryMap = {
        'easy-1': 'greetings',
        'easy-2': 'numbers',
        'intermediate-1': 'conversations',
        'intermediate-2': 'problems',
        'expert-1': 'complex',
        'expert-2': 'narratives'
    };

    // Initialize audio
    function initializeAudio(audioPath) {
        if (currentAudio) {
            currentAudio.pause();
        }
        currentAudio = new Audio(audioPath);
        
        currentAudio.addEventListener('timeupdate', () => {
            if (currentAudio.duration) {
                const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
                elements.audioProgressFill.style.width = `${progress}%`;
                elements.audioTime.textContent = formatTime(currentAudio.currentTime);
            }
        });
        
        currentAudio.addEventListener('ended', () => {
            elements.pauseButton.style.display = 'none';
            elements.playButton.style.display = 'inline-block';
        });
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }

    function showQuestion() {
        if (currentQuestionIndex >= currentQuestions.length) {
            showFinalResults();
            return;
        }

        const question = currentQuestions[currentQuestionIndex];
        elements.questionProgress.textContent = `${currentQuestionIndex + 1}/${currentQuestions.length}`;
        
        elements.questionContainer.innerHTML = `
            <div class="question-title fade-in">
                <span class="difficulty-badge ${selectedLevel}">${selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)}</span>
                ${question.title}
            </div>
            <div class="options-grid">
                ${question.options.map((option, i) => `
                    <div class="option-card fade-in" data-index="${i}">
                        <div class="option-icon">${String.fromCharCode(65 + i)}</div>
                        <div class="option-text">${option}</div>
                    </div>
                `).join('')}
            </div>
        `;

        // Add click listeners to options
        document.querySelectorAll('.option-card').forEach(card => {
            card.addEventListener('click', function() {
                if (this.classList.contains('disabled')) return; // Ignore if disabled

                // Remove selected class from all cards and add it to clicked card
                document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');

                // Disable all options immediately after selection
                document.querySelectorAll('.option-card').forEach(c => {
                    c.classList.add('disabled');
                    c.style.opacity = '0.7';
                    c.style.cursor = 'not-allowed';
                });

                // Check answer immediately without the check button
                const selectedIndex = parseInt(this.dataset.index);
                const correctIndex = currentQuestions[currentQuestionIndex].correctAnswer;
                
                if (selectedIndex === correctIndex) {
                    score++;
                    this.classList.add('correct');
                } else {
                    this.classList.add('incorrect');
                    // Optionally show the correct answer
                    document.querySelector(`.option-card[data-index="${correctIndex}"]`).classList.add('correct');
                }

                // Move to next question after a delay
                setTimeout(() => {
                    currentQuestionIndex++;
                    showQuestion();
                }, 2000);
            });
        });
    }

    function showFinalResults() {
        const percentage = Math.round((score / totalQuestions) * 100);
        const feedback = getFeedback(percentage);
        
        elements.questionContainer.innerHTML = `
            <div class="results-container fade-in">
                <h2 class="results-title">Test Completed!</h2>
                <div class="score-display">
                    <div class="score-circle ${feedback.class}">
                        <span>${percentage}%</span>
                    </div>
                    <p class="score-text">You got ${score} out of ${totalQuestions} questions correct</p>
                </div>
                <div class="feedback-section">
                    <h3>${feedback.title}</h3>
                    <p>${feedback.message}</p>
                    <ul class="improvement-tips">
                        ${feedback.tips.map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>
                <button onclick="window.location.href='level-exercises.html'" class="check-button">
                    Try Another Exercise <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        
        // Hide audio controls and check button
        document.querySelector('.audio-controls').style.display = 'none';
        elements.checkButton.style.display = 'none';
    }

    function getFeedback(percentage) {
        if (percentage >= 80) {
            return {
                class: 'excellent',
                title: 'Excellent Work! 🌟',
                message: 'You have a strong grasp of listening comprehension!',
                tips: [
                    'Try more challenging exercises',
                    'Practice with native speaker conversations',
                    'Watch movies without subtitles'
                ]
            };
        } else if (percentage >= 60) {
            return {
                class: 'good',
                title: 'Good Progress! 👍',
                message: 'You\'re doing well, but there\'s room for improvement.',
                tips: [
                    'Listen to English podcasts regularly',
                    'Practice with different accents',
                    'Focus on context clues while listening'
                ]
            };
        } else {
            return {
                class: 'needs-practice',
                title: 'Keep Practicing! 💪',
                message: 'Don\'t worry! Listening skills improve with practice.',
                tips: [
                    'Start with slower audio materials',
                    'Use subtitles while watching English content',
                    'Practice with short audio clips repeatedly'
                ]
            };
        }
    }

    // Event Listeners
    elements.playButton.addEventListener('click', () => {
        if (currentAudio) {
            currentAudio.play();
            elements.playButton.style.display = 'none';
            elements.pauseButton.style.display = 'inline-block';
        }
    });

    elements.pauseButton.addEventListener('click', () => {
        if (currentAudio) {
            currentAudio.pause();
            elements.pauseButton.style.display = 'none';
            elements.playButton.style.display = 'inline-block';
        }
    });

    // Initialize the test
    function initTest() {
        const category = exerciseCategoryMap[selectedExerciseId];
        currentQuestions = exerciseDatabase[selectedLevel][category].questions;
        totalQuestions = currentQuestions.length;
        initializeAudio(exerciseDatabase[selectedLevel][category].audioFiles[0]);
        showQuestion();
    }

    initTest();
});