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
                        title: "What is the man's name?",
                        options: ["John", "Michael", "Peter", "David"],
                        correctAnswer: 0
                    },
                    {
                        title: "What is the woman's name?",
                        options: ["Emma", "Sarah", "Laura", "Mary"],
                        correctAnswer: 1
                    },
                    {
                        title: "Where is Sarah from?",
                        options: ["Canada", "United States", "New York", "England"],
                        correctAnswer: 0
                    },
                    {
                        title: "Where does John live?",
                        options: ["Canada", "England", "Chicago", "New York"],
                        correctAnswer: 3
                    },
                    {
                        title: "Has Sarah been to New York?",
                        options: ["Yes", "No", "It's not mentioned", "She lives there"],
                        correctAnswer: 1
                    }
                ]
            },
            numbers: {
                audioFiles: ['audios/easy/numbers/numbers-1.mp3'],
                questions: [
                    {
                        title: "What time is it according to the conversation?",
                        options: ["2:00", "3:00", "4:00", "4:30"],
                        correctAnswer: 1
                    },
                    {
                        title: "How much did the digital watch cost?",
                        options: ["$35", "$40", "$45", "$50"],
                        correctAnswer: 3
                    },
                    {
                        title: "When is the person's appointment?",
                        options: ["3:00", "3:30", "4:00", "4:30"],
                        correctAnswer: 3
                    },
                    {
                        title: "What is the street number of the watch store?",
                        options: ["13", "23", "33", "43"],
                        correctAnswer: 1
                    },
                    {
                        title: "On which street is the watch store located?",
                        options: ["3rd Avenue", "4th Avenue", "5th Avenue", "6th Avenue"],
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
                        title: "What does Sarah plan to do over the weekend?",
                        options: ["Go shopping", "Visit a museum", "Go to an art exhibition", "Have dinner"],
                        correctAnswer: 2
                    },
                    {
                        title: "Where is the exhibition located?",
                        options: ["Downtown Gallery", "Modern Art Museum", "City Museum", "Art Center"],
                        correctAnswer: 1
                    },
                    {
                        title: "Why do they decide to meet at 3:00 PM?",
                        options: [
                            "Because the museum opens at 3:00 PM",
                            "Because the exhibition closes at 6:00 PM and they want enough time",
                            "Because they have other plans earlier",
                            "Because it's less crowded at that time"
                        ],
                        correctAnswer: 1
                    },
                    {
                        title: "What additional plan do they make?",
                        options: [
                            "Go shopping afterwards",
                            "Have dinner at an Italian restaurant",
                            "Visit another museum",
                            "Meet friends later"
                        ],
                        correctAnswer: 1
                    },
                    {
                        title: "What time are they planning to have dinner?",
                        options: [
                            "5:30", 
                            "6:00",
                            "6:30",
                            "7:00"
                        ],
                        correctAnswer: 2
                    }
                ]
            },
            problems: {
                audioFiles: ['audios/intermediate/problems/problems-1.mp3'],
                questions: [
                    {
                        title: "What is the main problem discussed in the conversation?",
                        options: [
                            "Poor workplace conditions",
                            "Low salary",
                            "Too many projects to handle",
                            "Difficult coworkers"
                        ],
                        correctAnswer: 2
                    },
                    {
                        title: "What happened when the person first tried to discuss this with their manager?",
                        options: [
                            "The manager got angry",
                            "The manager was too busy to listen properly",
                            "The manager denied there was a problem",
                            "The manager promised to help"
                        ],
                        correctAnswer: 1
                    },
                    {
                        title: "What solution does the friend suggest first?",
                        options: [
                            "Quit the job",
                            "Work overtime",
                            "Request a formal meeting",
                            "Complain to HR"
                        ],
                        correctAnswer: 2
                    },
                    {
                        title: "What specific solution is mentioned regarding workload distribution?",
                        options: [
                            "Hire more staff",
                            "Work weekends",
                            "Ask a new team member to help with research",
                            "Reduce project scope"
                        ],
                        correctAnswer: 2
                    },
                    {
                        title: "What does the friend emphasize at the end of the conversation?",
                        options: [
                            "Getting a promotion",
                            "Work-life balance",
                            "Meeting deadlines",
                            "Team cooperation"
                        ],
                        correctAnswer: 1
                    }
                ]
            }
        },
        expert: {
            complex: {
                audioFiles: ['audios/expert/complex/complex-1.mp3'],
                questions: [
                    {
                        title: "What was the narrator's original career?",
                        options: [
                            "Teaching",
                            "Corporate finance",
                            "Mathematics",
                            "Basketball coaching"
                        ],
                        correctAnswer: 1
                    },
                    {
                        title: "How did the narrator start teaching?",
                        options: [
                            "Through a school program",
                            "As a private tutor",
                            "Through a volunteer program",
                            "At a community college"
                        ],
                        correctAnswer: 2
                    },
                    {
                        title: "How did the narrator help Miguel understand algebra?",
                        options: [
                            "Using traditional methods",
                            "With extra homework",
                            "Through basketball statistics",
                            "With online tutorials"
                        ],
                        correctAnswer: 2
                    },
                    {
                        title: "How long ago did the narrator change careers?",
                        options: [
                            "Six months",
                            "Five years",
                            "Eight years",
                            "Ten years"
                        ],
                        correctAnswer: 2
                    },
                    {
                        title: "What was the colleagues' reaction to the career change?",
                        options: [
                            "They were supportive",
                            "They were inspired",
                            "They were indifferent",
                            "They thought it was a midlife crisis"
                        ],
                        correctAnswer: 3
                    }
                ]
            },
            narratives: {
                audioFiles: ['audios/expert/narratives/narratives-1.mp3'],
                questions: [
                    {
                        title: "What surprised the narrator the most about Kyoto?",
                        options: [
                            "The research they had done",
                            "The traditional wooden buildings",
                            "Seeing geishas in the streets",
                            "The experience was beyond what guidebooks described"
                        ],
                        correctAnswer: 3
                    },
                    {
                        title: "When did the narrator visit the temple?",
                        options: [
                            "First day",
                            "Second day",
                            "Third day",
                            "Fourth day"
                        ],
                        correctAnswer: 2
                    },
                    {
                        title: "What did the elderly monk help the narrator with?",
                        options: [
                            "Meditation techniques and proper posture",
                            "Understanding Japanese history",
                            "Learning calligraphy",
                            "Translating Japanese texts"
                        ],
                        correctAnswer: 0
                    },
                    {
                        title: "What was most notable about the temple's location?",
                        options: [
                            "It was in the city center",
                            "The contrast between its serenity and the busy city outside",
                            "It was far from other temples",
                            "It was a popular tourist spot"
                        ],
                        correctAnswer: 1
                    },
                    {
                        title: "What important Japanese concept did the narrator learn about?",
                        options: [
                            "Ma - the space between things",
                            "Zen meditation",
                            "Traditional architecture",
                            "Temple ceremonies"
                        ],
                        correctAnswer: 0
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