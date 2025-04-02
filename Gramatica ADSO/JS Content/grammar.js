document.addEventListener("DOMContentLoaded", () => {
    const niveles = document.querySelectorAll(".nivel");
    const header = document.querySelector("header");
    const nuevoHeader = document.querySelector(".header-content-grammar");
    const nivelesContainer = document.querySelector(".niveles");
    const nivelesDetalles = document.getElementById("nivel-detalles");
    const detallesTitulo = document.getElementById("detalles-titulo");
    const detallesDescripcion = document.getElementById("detalles-descripcion");
    const btnVolver = document.getElementById("btn-volver");

    // Elementos para la vista detallada del tema
    const temaDetalleContainer = document.getElementById("tema-detalle-container");
    const temaDetalleTitulo = document.getElementById("tema-detalle-titulo");
    const temaDetalleDescripcion = document.getElementById("tema-detalle-descripcion");
    const temaDetalleTeoria = document.getElementById("tema-detalle-teoria");
    const temaDetalleImportancia = document.getElementById("tema-detalle-importancia");
    const temaDetalleEstructura = document.getElementById("tema-detalle-estructura");
    const temaDetalleEjemplos = document.getElementById("tema-detalle-ejemplos");
    const btnTemaVolver = document.getElementById("btn-tema-volver");
    const btnPractica = document.getElementById("btn-practica");

    // Elemento contenedor para los temas del nivel
    const containerDetallesTemas = document.getElementById("detalles-temas");

    window.addEventListener("scroll", () => {
        let boton = document.getElementById("btn-tema-volver");
        let boton2 = document.getElementById("btn-taller-volver");
        boton.style.transition = "top -1s ease-in-out";
        boton.style.top = `${window.scrollY}px`;  // Se mueve con el scroll
        boton2.style.transition = "top -1s ease-in-out";
        boton2.style.top = `${window.scrollY}px`;  // Se mueve con el scroll
      });

    // Datos de temas por nivel
    const temasNiveles = {
        "A1": {
            descripcion: "Fundamentos básicos del inglés para principiantes absolutos. Aprenderás a comunicarte en situaciones cotidianas simples.",
            temas: [
                {
                    titulo: "Verbo 'to be'",
                    descripcion: "Formas afirmativa, negativa e interrogativa del verbo ser/estar."
                },
                {
                    titulo: "Pronombres personales",
                    descripcion: "I, you, he, she, it, we, they y sus usos."
                },
                {
                    titulo: "Artículos",
                    descripcion: "A, an, the y cuándo utilizarlos correctamente."
                },
                {
                    titulo: "Sustantivos",
                    descripcion: "Palabras que nombran personas, lugares, cosas o ideas. Son fundamentales para construir oraciones en inglés."
                },
                {
                    titulo: "Adjetivos posesivos",
                    descripcion: "Palabras que indican a quién pertenece algo y siempre acompañan a un sustantivo."
                },
                {
                    titulo: "Presente simple",
                    descripcion: "Tiempo verbal utilizado para hablar de rutinas, hechos generales, verdades permanentes y hábitos."
                }
            ]
        },
        "A2": {
            descripcion: "Nivel básico que te permitirá comunicarte en situaciones predecibles y describir aspectos de tu entorno.",
            temas: [
                {
                    titulo: "Presente continuo",
                    descripcion: "Formación y usos para acciones en progreso."
                },
                {
                    titulo: "Pasado simple",
                    descripcion: "Verbos regulares e irregulares, preguntas y negaciones."
                },
                {
                    titulo: "Comparativos y superlativos",
                    descripcion: "Comparación de adjetivos cortos y largos."
                },
                {
                    titulo: "Adverbios de frecuencia",
                    descripcion: "Always, usually, often, sometimes, never."
                },
                {
                    titulo: "Preposiciones de lugar",
                    descripcion: "In, on, at, under, behind, between, etc."
                },
                {
                    titulo: "Futuro con 'going to'",
                    descripcion: "Planes y predicciones."
                }
            ]
        },
        "B1": {
            descripcion: "Nivel intermedio donde desarrollarás fluidez para expresar ideas más complejas y abstractas.",
            temas: [
                {
                    titulo: "Presente perfecto",
                    descripcion: "Experiencias, cambios y situaciones incompletas."
                },
                {
                    titulo: "Pasado continuo",
                    descripcion: "Acciones en progreso en el pasado."
                },
                {
                    titulo: "Condicionales tipo 1 y 2",
                    descripcion: "Situaciones reales y hipotéticas."
                },
                {
                    titulo: "Verbos modales",
                    descripcion: "Can, could, should, must, might, etc."
                },
                {
                    titulo: "Voz pasiva",
                    descripcion: "Presente y pasado simple en voz pasiva."
                },
                {
                    titulo: "Phrasal verbs comunes",
                    descripcion: "Look up, give up, get along, etc."
                }
            ]
        }
    };

    // Datos detallados de los temas
    const detallesTemas = {
        "Verbo 'to be'": {
            descripcion: "El verbo más fundamental del inglés que se usa para expresar estados, identidades y características.",
            teoria: `
                <p>El verbo <strong>"to be"</strong> es el verbo más importante y usado en inglés. Se traduce como "ser" o "estar" en español, dependiendo del contexto.</p>
                
                <p>Se utiliza principalmente para:</p>
                <ul>
                    <li>Expresar identidad o profesión: <em>"I am a student"</em> (Soy estudiante)</li>
                    <li>Describir características o estados: <em>"She is happy"</em> (Ella está feliz)</li>
                    <li>Indicar ubicación: <em>"They are at home"</em> (Ellos están en casa)</li>
                    <li>Expresar edad: <em>"He is ten years old"</em> (Él tiene diez años)</li>
                    <li>Hablar del clima: <em>"It is sunny today"</em> (Está soleado hoy)</li>
                    <li>Formar tiempos continuos: <em>"I am studying"</em> (Estoy estudiando)</li>
                    <li>Formar la voz pasiva: <em>"The house was built in 1990"</em> (La casa fue construida en 1990)</li>
                </ul>
                
                <p>En inglés, a diferencia del español, <strong>siempre</strong> es obligatorio usar un pronombre o sustantivo antes del verbo. No podemos omitir el sujeto.</p>
                
                <p>El verbo "to be" cambia su forma según:</p>
                <ul>
                    <li>La persona gramatical (primera, segunda o tercera persona)</li>
                    <li>El número (singular o plural)</li>
                    <li>El tiempo verbal (presente, pasado, etc.)</li>
                </ul>
            `,
            importancia: `
                <p>Dominar el verbo "to be" es esencial porque:</p>
                <ul>
                    <li>Es el verbo más frecuente en inglés, aparece en casi todas las conversaciones</li>
                    <li>Se usa para expresar información personal básica (nombre, edad, nacionalidad, profesión)</li>
                    <li>Es la base para formar estructuras gramaticales más complejas como tiempos continuos y voz pasiva</li>
                    <li>Permite crear oraciones negativas e interrogativas de manera sencilla</li>
                    <li>Es irregular, por lo que tiene formas específicas que debemos memorizar</li>
                    <li>Es uno de los primeros verbos que se aprende al estudiar inglés</li>
                </ul>
                
                <p>Sin dominar este verbo, sería muy difícil comunicarse efectivamente en inglés incluso en situaciones cotidianas básicas.</p>
            `,
            estructura: `
                <h4>Presente Simple</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Sujeto</th>
                            <th>Forma afirmativa</th>
                            <th>Forma negativa</th>
                            <th>Forma interrogativa</th>
                            <th>Forma negativa interrogativa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>I</td>
                            <td>I <strong>am</strong><br>I<strong>'m</strong></td>
                            <td>I <strong>am not</strong><br>I<strong>'m not</strong></td>
                            <td><strong>Am</strong> I?</td>
                            <td><strong>Am I not</strong>?<br><strong>Aren't</strong> I?</td>
                        </tr>
                        <tr>
                            <td>You</td>
                            <td>You <strong>are</strong><br>You<strong>'re</strong></td>
                            <td>You <strong>are not</strong><br>You <strong>aren't</strong><br>You<strong>'re not</strong></td>
                            <td><strong>Are</strong> you?</td>
                            <td><strong>Are you not</strong>?<br><strong>Aren't</strong> you?</td>
                        </tr>
                        <tr>
                            <td>He</td>
                            <td>He <strong>is</strong><br>He<strong>'s</strong></td>
                            <td>He <strong>is not</strong><br>He <strong>isn't</strong><br>He<strong>'s not</strong></td>
                            <td><strong>Is</strong> he?</td>
                            <td><strong>Is he not</strong>?<br><strong>Isn't</strong> he?</td>
                        </tr>
                        <tr>
                            <td>She</td>
                            <td>She <strong>is</strong><br>She<strong>'s</strong></td>
                            <td>She <strong>is not</strong><br>She <strong>isn't</strong><br>She<strong>'s not</strong></td>
                            <td><strong>Is</strong> she?</td>
                            <td><strong>Is she not</strong>?<br><strong>Isn't</strong> she?</td>
                        </tr>
                        <tr>
                            <td>It</td>
                            <td>It <strong>is</strong><br>It<strong>'s</strong></td>
                            <td>It <strong>is not</strong><br>It <strong>isn't</strong><br>It<strong>'s not</strong></td>
                            <td><strong>Is</strong> it?</td>
                            <td><strong>Is it not</strong>?<br><strong>Isn't</strong> it?</td>
                        </tr>
                        <tr>
                            <td>We</td>
                            <td>We <strong>are</strong><br>We<strong>'re</strong></td>
                            <td>We <strong>are not</strong><br>We <strong>aren't</strong><br>We<strong>'re not</strong></td>
                            <td><strong>Are</strong> we?</td>
                            <td><strong>Are we not</strong>?<br><strong>Aren't</strong> we?</td>
                        </tr>
                        <tr>
                            <td>They</td>
                            <td>They <strong>are</strong><br>They<strong>'re</strong></td>
                            <td>They <strong>are not</strong><br>They <strong>aren't</strong><br>They<strong>'re not</strong></td>
                            <td><strong>Are</strong> they?</td>
                            <td><strong>Are they not</strong>?<br><strong>Aren't</strong> they?</td>
                        </tr>
                    </tbody>
                </table>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">"I <strong>am</strong> a student."</p>
                        <p class="espanol">Yo <strong>soy</strong> estudiante.</p>
                        <p class="estructura"><small>Sujeto + verbo to be + complemento</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"She <strong>is not</strong> at home right now."</p>
                        <p class="espanol">Ella <strong>no está</strong> en casa ahora mismo.</p>
                        <p class="estructura"><small>Sujeto + verbo to be + not + complemento</small></p>
                </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"<strong>Are</strong> they from Spain?"</p>
                        <p class="espanol">¿<strong>Son</strong> ellos de España?</p>
                        <p class="estructura"><small>Verbo to be + sujeto + complemento + ?</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"The children <strong>were</strong> very happy yesterday."</p>
                        <p class="espanol">Los niños <strong>estaban</strong> muy contentos ayer.</p>
                        <p class="estructura"><small>Sujeto + verbo to be (pasado) + complemento</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"We <strong>are studying</strong> for the exam."</p>
                        <p class="espanol">Nosotros <strong>estamos estudiando</strong> para el examen.</p>
                        <p class="estructura"><small>Sujeto + verbo to be + verbo+ing (presente continuo)</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Practica creando tus propias oraciones usando las estructuras mostradas en los ejemplos.</p>
            `,
        },
        "Pronombres personales": {
            descripcion: "Los pronombres personales son palabras que reemplazan a los nombres o sustantivos y representan a las personas que participan en la comunicación.",
            teoria: `
                <p>Los <strong>pronombres personales</strong> son palabras que utilizamos para referirnos a personas, animales u objetos sin necesidad de repetir su nombre. Son esenciales en la comunicación diaria y simplifican la forma en que hablamos y escribimos.</p>
                
                <p>En inglés, los pronombres personales cambian según:</p>
                <ul>
                    <li>La <strong>persona gramatical</strong> (primera, segunda o tercera persona)</li>
                    <li>El <strong>número</strong> (singular o plural)</li>
                    <li>La <strong>función</strong> en la oración (sujeto u objeto)</li>
                    <li>El <strong>género</strong> (masculino, femenino o neutro) en la tercera persona del singular</li>
                </ul>
                
                <p>Existen diferentes tipos de pronombres personales:</p>
                <ul>
                    <li><strong>Pronombres sujeto:</strong> Realizan la acción del verbo (I, you, he, she, it, we, they)</li>
                    <li><strong>Pronombres objeto:</strong> Reciben la acción del verbo (me, you, him, her, it, us, them)</li>
                    <li><strong>Pronombres posesivos:</strong> Indican posesión (mine, yours, his, hers, its, ours, theirs)</li>
                </ul>
                
                <p>Es importante destacar que en inglés, a diferencia del español, <strong>siempre</strong> es necesario utilizar el pronombre sujeto. No podemos omitirlo como en español donde decimos "Estoy cansado" (omitiendo "yo"). En inglés siempre debemos decir "I am tired".</p>
                
                <p>Además, el inglés distingue entre el pronombre informal y formal "you", utilizando la misma palabra para ambos casos, mientras que en español tenemos "tú/usted".</p>
            `,
            importancia: `
                <p>Dominar los pronombres personales es fundamental porque:</p>
                <ul>
                    <li>Son algunas de las palabras más frecuentes en cualquier conversación</li>
                    <li>Evitan la repetición innecesaria de nombres, haciendo la comunicación más fluida</li>
                    <li>Son la base para formar oraciones correctas en inglés</li>
                    <li>Permiten distinguir entre personas, objetos y animales</li>
                    <li>Determinan la conjugación de los verbos (especialmente en presente simple)</li>
                    <li>Ayudan a establecer relaciones entre distintas partes del discurso</li>
                </ul>
                
                <p>Sin un buen manejo de los pronombres personales, sería imposible construir oraciones coherentes o mantener una conversación básica en inglés.</p>
            `,
            estructura: `
                <h4>Pronombres Personales en Inglés</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Persona</th>
                            <th>Pronombre Sujeto</th>
                            <th>Pronombre Objeto</th>
                            <th>Adjetivo Posesivo</th>
                            <th>Pronombre Posesivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1ª persona singular</td>
                            <td><strong>I</strong><br>(yo)</td>
                            <td><strong>me</strong><br>(me, a mí)</td>
                            <td><strong>my</strong><br>(mi, mis)</td>
                            <td><strong>mine</strong><br>(el mío, la mía, los míos, las mías)</td>
                        </tr>
                        <tr>
                            <td>2ª persona singular/plural</td>
                            <td><strong>you</strong><br>(tú, usted, vosotros, ustedes)</td>
                            <td><strong>you</strong><br>(te, a ti, os, a vosotros, le, les, a usted, a ustedes)</td>
                            <td><strong>your</strong><br>(tu, tus, vuestro, vuestros, su, sus)</td>
                            <td><strong>yours</strong><br>(el tuyo, la tuya, los tuyos, las tuyas, etc.)</td>
                        </tr>
                        <tr>
                            <td>3ª persona singular masculino</td>
                            <td><strong>he</strong><br>(él)</td>
                            <td><strong>him</strong><br>(le, a él)</td>
                            <td><strong>his</strong><br>(su, sus)</td>
                            <td><strong>his</strong><br>(el suyo, la suya, los suyos, las suyas)</td>
                        </tr>
                        <tr>
                            <td>3ª persona singular femenino</td>
                            <td><strong>she</strong><br>(ella)</td>
                            <td><strong>her</strong><br>(la, a ella)</td>
                            <td><strong>her</strong><br>(su, sus)</td>
                            <td><strong>hers</strong><br>(el suyo, la suya, los suyos, las suyas)</td>
                        </tr>
                        <tr>
                            <td>3ª persona singular neutro</td>
                            <td><strong>it</strong><br>(ello, esto)</td>
                            <td><strong>it</strong><br>(lo, la, a ello)</td>
                            <td><strong>its</strong><br>(su, sus)</td>
                            <td><strong>its</strong><br>(el suyo, la suya, etc.)</td>
                        </tr>
                        <tr>
                            <td>1ª persona plural</td>
                            <td><strong>we</strong><br>(nosotros, nosotras)</td>
                            <td><strong>us</strong><br>(nos, a nosotros, a nosotras)</td>
                            <td><strong>our</strong><br>(nuestro, nuestra, nuestros, nuestras)</td>
                            <td><strong>ours</strong><br>(el nuestro, la nuestra, etc.)</td>
                        </tr>
                        <tr>
                            <td>3ª persona plural</td>
                            <td><strong>they</strong><br>(ellos, ellas)</td>
                            <td><strong>them</strong><br>(los, las, a ellos, a ellas)</td>
                            <td><strong>their</strong><br>(su, sus)</td>
                            <td><strong>theirs</strong><br>(el suyo, la suya, etc.)</td>
                        </tr>
                    </tbody>
                </table>
                
                <h4>Reglas Importantes</h4>
                <ul>
                    <li>El pronombre <strong>I</strong> siempre se escribe con mayúscula, sin importar dónde aparezca en la oración.</li>
                    <li>Para objetos, animales o conceptos sin género específico, se utiliza <strong>it</strong>.</li>
                    <li>El pronombre <strong>you</strong> se utiliza tanto para singular como plural, para tratamiento formal e informal.</li>
                    <li>El pronombre <strong>they/them</strong> también puede usarse como pronombre neutro para personas no binarias.</li>
                </ul>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles"><strong>I</strong> work in a hospital. <strong>My</strong> job is interesting.</p>
                        <p class="espanol"><strong>Yo</strong> trabajo en un hospital. <strong>Mi</strong> trabajo es interesante.</p>
                        <p class="estructura"><small>Pronombre sujeto + verbo | Adjetivo posesivo + sustantivo</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">Can you help <strong>me</strong>? This box is too heavy for <strong>me</strong>.</p>
                        <p class="espanol">¿Puedes ayudar<strong>me</strong>? Esta caja es demasiado pesada para <strong>mí</strong>.</p>
                        <p class="estructura"><small>Verbo auxiliar + pronombre sujeto + verbo + pronombre objeto</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles"><strong>He</strong> loves football. <strong>His</strong> favorite team is Manchester United.</p>
                        <p class="espanol"><strong>Él</strong> ama el fútbol. <strong>Su</strong> equipo favorito es el Manchester United.</p>
                        <p class="estructura"><small>Pronombre sujeto + verbo | Adjetivo posesivo + sustantivo</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">The book is on the table. <strong>It</strong> is very interesting.</p>
                        <p class="espanol">El libro está sobre la mesa. <strong>Es</strong> muy interesante.</p>
                        <p class="estructura"><small>Pronombre sujeto (neutro) + verbo to be + complemento</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles"><strong>They</strong> asked <strong>us</strong> to join <strong>them</strong> for dinner.</p>
                        <p class="espanol"><strong>Ellos</strong> nos pidieron que <strong>los</strong> acompañáramos a cenar.</p>
                        <p class="estructura"><small>Pronombre sujeto + verbo + pronombre objeto + infinitivo + pronombre objeto</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Practica identificando los diferentes tipos de pronombres en textos sencillos y conversaciones. Presta especial atención a cómo cambian según su función en la oración.</p>
            `,
        },
        "Artículos": {
            descripcion: "Los artículos son palabras que acompañan a los sustantivos y ayudan a identificar si hablamos de algo específico o general.",
            teoria: `
                <p>Los <strong>artículos</strong> son palabras que preceden a los sustantivos para indicar si nos referimos a algo específico o a algo general. En inglés hay solo tres artículos:</p>
                
                <ul>
                    <li><strong>A</strong> - artículo indefinido singular (un, una)</li>
                    <li><strong>An</strong> - artículo indefinido singular (un, una)</li>
                    <li><strong>The</strong> - artículo definido singular y plural (el, la, los, las)</li>
                </ul>
                
                <p>Los artículos indefinidos (<strong>a/an</strong>) se utilizan cuando:</p>
                <ul>
                    <li>Mencionamos algo por primera vez: <em>"I saw <strong>a</strong> dog in the park"</em></li>
                    <li>Hablamos de algo general o cualquiera de su clase: <em>"<strong>A</strong> lion is a dangerous animal"</em></li>
                    <li>Nos referimos a un miembro no específico de un grupo: <em>"I need <strong>a</strong> pen"</em> (cualquier bolígrafo)</li>
                    <li>Hablamos de profesiones: <em>"She is <strong>an</strong> engineer"</em></li>
                </ul>
                
                <p>La diferencia entre <strong>a</strong> y <strong>an</strong> depende del sonido (no de la letra) que comienza la palabra siguiente:</p>
                <ul>
                    <li>Usamos <strong>a</strong> cuando la siguiente palabra comienza con sonido consonante: <em>"<strong>a</strong> book, <strong>a</strong> university"</em></li>
                    <li>Usamos <strong>an</strong> cuando la siguiente palabra comienza con sonido vocal: <em>"<strong>an</strong> apple, <strong>an</strong> hour"</em></li>
                </ul>
                
                <p>El artículo definido (<strong>the</strong>) se utiliza cuando:</p>
                <ul>
                    <li>Hablamos de algo específico que ya ha sido mencionado: <em>"I bought a car. <strong>The</strong> car is red."</em></li>
                    <li>El sustantivo es único: <em>"<strong>The</strong> sun, <strong>the</strong> moon"</em></li>
                    <li>Nos referimos a algo que ambos interlocutores saben a qué se refiere: <em>"Close <strong>the</strong> door, please"</em></li>
                    <li>Con superlativos: <em>"<strong>The</strong> best day of my life"</em></li>
                    <li>Con instrumentos musicales: <em>"She plays <strong>the</strong> piano"</em></li>
                    <li>Con océanos, mares, ríos, cadenas montañosas: <em>"<strong>The</strong> Atlantic Ocean, <strong>the</strong> Alps"</em></li>
                </ul>
                
                <p>En inglés hay casos donde <strong>no se usa ningún artículo</strong> (artículo cero):</p>
                <ul>
                    <li>Con sustantivos plurales o incontables cuando hablamos en general: <em>"Dogs are loyal pets. Honesty is important."</em></li>
                    <li>Con nombres propios de personas: <em>"Maria is from Spain."</em></li>
                    <li>Con nombres de países, ciudades (generalmente): <em>"France is beautiful. They visited London."</em></li>
                    <li>Con comidas en general: <em>"Breakfast is the most important meal."</em></li>
                    <li>Con idiomas, deportes y materias académicas: <em>"She studies English and history."</em></li>
                </ul>
            `,
            importancia: `
                <p>Dominar el uso de los artículos es fundamental porque:</p>
                <ul>
                    <li>Son algunas de las palabras más frecuentes en el idioma inglés</li>
                    <li>El uso incorrecto de artículos puede cambiar completamente el significado de una frase</li>
                    <li>Es uno de los aspectos más difíciles para los hispanohablantes, ya que las reglas difieren del español</li>
                    <li>Ayudan a determinar si estamos hablando de algo específico o general</li>
                    <li>Son esenciales para lograr una comunicación clara y precisa</li>
                    <li>Contribuyen significativamente a la fluidez y naturalidad al hablar inglés</li>
                </ul>
                
                <p>A pesar de ser palabras pequeñas, los artículos tienen un gran impacto en cómo se interpreta un mensaje, por lo que usarlos correctamente es clave para una comunicación efectiva.</p>
            `,
            estructura: `
                <h4>Resumen de Uso de los Artículos</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Artículo</th>
                            <th>Tipo</th>
                            <th>Uso con</th>
                            <th>Cuándo se usa</th>
                            <th>Ejemplos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>A</strong></td>
                            <td>Indefinido</td>
                            <td>Sustantivos singulares contables<br>que comienzan con sonido consonante</td>
                            <td>
                                <ul>
                                    <li>Primera mención</li>
                                    <li>Uno cualquiera de su clase</li>
                                    <li>Expresiones de cantidad</li>
                                </ul>
                            </td>
                            <td>
                                <em>a dog<br>
                                a university<br>
                                a one-way ticket<br>
                                a house</em>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>An</strong></td>
                            <td>Indefinido</td>
                            <td>Sustantivos singulares contables<br>que comienzan con sonido vocal</td>
                            <td>
                                <ul>
                                    <li>Primera mención</li>
                                    <li>Uno cualquiera de su clase</li>
                                    <li>Expresiones de cantidad</li>
                                </ul>
                            </td>
                            <td>
                                <em>an elephant<br>
                                an hour<br>
                                an apple<br>
                                an honest man</em>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>The</strong></td>
                            <td>Definido</td>
                            <td>
                                Sustantivos singulares y plurales<br>
                                Sustantivos contables e incontables
                            </td>
                            <td>
                                <ul>
                                    <li>Segunda mención</li>
                                    <li>Algo específico</li>
                                    <li>Algo único</li>
                                    <li>Instrumentos musicales</li>
                                    <li>Superlativos</li>
                                </ul>
                            </td>
                            <td>
                                <em>the book<br>
                                the United States<br>
                                the sun<br>
                                the piano<br>
                                the best day</em>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Ø</strong><br>(sin artículo)</td>
                            <td>Artículo cero</td>
                            <td>
                                Sustantivos plurales e incontables<br>
                                Nombres propios<br>
                                Nombres de deportes, idiomas
                            </td>
                            <td>
                                <ul>
                                    <li>Generalizaciones</li>
                                    <li>Nombres propios</li>
                                    <li>Comidas generales</li>
                                    <li>Materias académicas</li>
                                </ul>
                            </td>
                            <td>
                                <em>Dogs are loyal.<br>
                                John is tall.<br>
                                Breakfast is ready.<br>
                                I study mathematics.</em>
                            </td>
                        </tr>
                    </tbody>
                </table>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">I need <strong>a</strong> new computer for my studies.</p>
                        <p class="espanol">Necesito <strong>una</strong> nueva computadora para mis estudios.</p>
                        <p class="estructura"><small>Artículo indefinido con sustantivo singular contable (primera mención)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">She's <strong>an</strong> excellent teacher with years of experience.</p>
                        <p class="espanol">Ella es <strong>una</strong> excelente profesora con años de experiencia.</p>
                        <p class="estructura"><small>Artículo indefinido antes de sonido vocal</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">Could you pass me <strong>the</strong> salt, please? It's next to <strong>the</strong> pepper.</p>
                        <p class="espanol">¿Podrías pasarme <strong>la</strong> sal, por favor? Está junto a <strong>la</strong> pimienta.</p>
                        <p class="estructura"><small>Artículo definido con sustantivo específico (ambos sabemos a qué sal nos referimos)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles"><strong>The</strong> Nile is <strong>the</strong> longest river in Africa.</p>
                        <p class="espanol"><strong>El</strong> Nilo es <strong>el</strong> río más largo de África.</p>
                        <p class="estructura"><small>Artículo definido con nombre propio geográfico y superlativo</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">She usually drinks <strong>Ø</strong> coffee without <strong>Ø</strong> sugar for <strong>Ø</strong> breakfast.</p>
                        <p class="espanol">Ella normalmente bebe <strong>el</strong> café sin <strong>Ø</strong> azúcar en <strong>el</strong> desayuno.</p>
                        <p class="estructura"><small>Sin artículo con sustantivos incontables y comidas generales</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Una buena forma de practicar los artículos es leer textos en inglés y subrayar todos los artículos, intentando entender por qué se ha usado cada uno.</p>
            `,
        },
        "Sustantivos": {
            descripcion: "Palabras que nombran personas, lugares, cosas o ideas. Son fundamentales para construir oraciones en inglés.",
            teoria: `
                <p>Los <strong>sustantivos</strong> son palabras que utilizamos para nombrar personas, lugares, objetos, animales, sentimientos, ideas o conceptos. Son esenciales para la comunicación ya que representan las entidades sobre las que hablamos.</p>
                
                <p>En inglés, los sustantivos se clasifican en diferentes categorías:</p>
                
                <ul>
                    <li><strong>Sustantivos comunes:</strong> Nombran personas, lugares o cosas genéricas (teacher, city, book)</li>
                    <li><strong>Sustantivos propios:</strong> Identifican personas, lugares o cosas específicas y comienzan con mayúscula (John, London, Amazon)</li>
                    <li><strong>Sustantivos contables:</strong> Se pueden contar y tienen forma plural (one book, two books)</li>
                    <li><strong>Sustantivos incontables:</strong> No se pueden contar individualmente y no tienen forma plural (water, music, information)</li>
                    <li><strong>Sustantivos colectivos:</strong> Nombran grupos de personas o cosas (family, team, flock)</li>
                    <li><strong>Sustantivos compuestos:</strong> Formados por dos o más palabras (toothbrush, headache, mother-in-law)</li>
                </ul>
                
                <p>En inglés, los sustantivos pueden desempeñar diferentes funciones en una oración:</p>
                <ul>
                    <li>Sujeto: <em>"The <strong>cat</strong> sleeps."</em></li>
                    <li>Objeto directo: <em>"I read a <strong>book</strong>."</em></li>
                    <li>Objeto indirecto: <em>"She gave the <strong>boy</strong> a present."</em></li>
                    <li>Complemento: <em>"He is a <strong>doctor</strong>."</em></li>
                    <li>Posesión: <em>"The <strong>girl's</strong> toy."</em></li>
                </ul>
                
                <p>Una característica importante de los sustantivos en inglés es la formación del plural. Aunque existen reglas generales, también hay numerosas excepciones que deben aprenderse.</p>
            `,
            importancia: `
                <p>Dominar los sustantivos y sus reglas es fundamental porque:</p>
                <ul>
                    <li>Son uno de los elementos básicos para construir cualquier oración</li>
                    <li>Permiten nombrar todo lo que nos rodea, lo que pensamos y sentimos</li>
                    <li>La correcta formación del plural es esencial para la precisión del mensaje</li>
                    <li>La distinción entre sustantivos contables e incontables afecta a la gramática que los acompaña (artículos, cuantificadores, etc.)</li>
                    <li>El uso del genitivo sajón ('s) es una estructura fundamental en inglés para expresar posesión</li>
                    <li>La mayoría de vocabulario que aprendemos al estudiar inglés son sustantivos</li>
                </ul>
                
                <p>Sin un buen dominio de los sustantivos y sus reglas, es imposible comunicarse correctamente en inglés o entender textos básicos.</p>
            `,
            estructura: `
                <h4>Formación del Plural de Sustantivos</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Regla</th>
                            <th>Terminación</th>
                            <th>Ejemplos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>General</td>
                            <td>Añadir <strong>-s</strong></td>
                            <td>dog → dogs<br>book → books<br>girl → girls</td>
                        </tr>
                        <tr>
                            <td>Terminados en -s, -ss, -sh, -ch, -x, -z</td>
                            <td>Añadir <strong>-es</strong></td>
                            <td>bus → buses<br>class → classes<br>dish → dishes<br>watch → watches<br>box → boxes</td>
                        </tr>
                        <tr>
                            <td>Terminados en consonante + y</td>
                            <td>Cambiar <strong>y</strong> por <strong>i</strong> y añadir <strong>-es</strong></td>
                            <td>baby → babies<br>city → cities<br>family → families</td>
                        </tr>
                        <tr>
                            <td>Terminados en vocal + y</td>
                            <td>Añadir <strong>-s</strong></td>
                            <td>boy → boys<br>day → days<br>toy → toys</td>
                        </tr>
                        <tr>
                            <td>Terminados en -f, -fe</td>
                            <td>Cambiar <strong>f/fe</strong> por <strong>v</strong> y añadir <strong>-es</strong></td>
                            <td>wife → wives<br>knife → knives<br>life → lives<br>half → halves</td>
                        </tr>
                        <tr>
                            <td>Terminados en -o</td>
                            <td>Añadir <strong>-s</strong> o <strong>-es</strong> (varía)</td>
                            <td>photo → photos<br>piano → pianos<br>tomato → tomatoes<br>hero → heroes</td>
                        </tr>
                        <tr>
                            <td>Irregulares</td>
                            <td>Cambio completo</td>
                            <td>man → men<br>woman → women<br>child → children<br>foot → feet<br>tooth → teeth<br>mouse → mice</td>
                        </tr>
                        <tr>
                            <td>Igual en singular y plural</td>
                            <td>Sin cambio</td>
                            <td>sheep → sheep<br>fish → fish<br>series → series<br>species → species</td>
                        </tr>
                    </tbody>
                </table>
                
                <h4>Genitivo Sajón - Posesión</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Caso</th>
                            <th>Regla</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Singular</td>
                            <td>Añadir <strong>'s</strong></td>
                            <td>The girl<strong>'s</strong> book<br>(El libro de la niña)</td>
                        </tr>
                        <tr>
                            <td>Plural terminado en -s</td>
                            <td>Añadir solo <strong>'</strong></td>
                            <td>The students<strong>'</strong> books<br>(Los libros de los estudiantes)</td>
                        </tr>
                        <tr>
                            <td>Plural irregular (sin -s)</td>
                            <td>Añadir <strong>'s</strong></td>
                            <td>The children<strong>'s</strong> toys<br>(Los juguetes de los niños)</td>
                        </tr>
                        <tr>
                            <td>Nombres propios terminados en -s</td>
                            <td>Añadir <strong>'s</strong> o solo <strong>'</strong></td>
                            <td>Charles<strong>'s</strong> house / Charles<strong>'</strong> house<br>(La casa de Charles)</td>
                        </tr>
                        <tr>
                            <td>Posesión conjunta</td>
                            <td>Añadir <strong>'s</strong> solo al último nombre</td>
                            <td>Tom and Lisa<strong>'s</strong> apartment<br>(El apartamento de Tom y Lisa)</td>
                        </tr>
                        <tr>
                            <td>Posesión individual</td>
                            <td>Añadir <strong>'s</strong> a cada nombre</td>
                            <td>Tom<strong>'s</strong> and Lisa<strong>'s</strong> cars<br>(Los coches de Tom y de Lisa)</td>
                        </tr>
                    </tbody>
                </table>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">There are five <strong>books</strong> on the shelf.</p>
                        <p class="espanol">Hay cinco <strong>libros</strong> en el estante.</p>
                        <p class="estructura"><small>Sustantivo contable en plural con regla general (-s)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">My <strong>sister's</strong> wedding is next month.</p>
                        <p class="espanol">La boda de mi <strong>hermana</strong> es el próximo mes.</p>
                        <p class="estructura"><small>Genitivo sajón con sustantivo singular ('s)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">I need some <strong>information</strong> about the course.</p>
                        <p class="espanol">Necesito algo de <strong>información</strong> sobre el curso.</p>
                        <p class="estructura"><small>Sustantivo incontable (sin artículo indefinido, sin plural)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">There are two <strong>men</strong> and three <strong>women</strong> in the office.</p>
                        <p class="espanol">Hay dos <strong>hombres</strong> y tres <strong>mujeres</strong> en la oficina.</p>
                        <p class="estructura"><small>Sustantivos con plural irregular (man→men, woman→women)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">The <strong>children's</strong> toys are all over the floor.</p>
                        <p class="espanol">Los juguetes de los <strong>niños</strong> están por todo el suelo.</p>
                        <p class="estructura"><small>Genitivo sajón con sustantivo plural irregular ('s)</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Para dominar los sustantivos, presta especial atención a los plurales irregulares y practica la distinción entre sustantivos contables e incontables.</p>
            `,
        },
        "Adjetivos posesivos": {
            descripcion: "Palabras que indican a quién pertenece algo y siempre acompañan a un sustantivo.",
            teoria: `
                <p>Los <strong>adjetivos posesivos</strong> son palabras que indican posesión o pertenencia y siempre acompañan a un sustantivo. Responden a la pregunta "¿De quién es?" y concuerdan con el poseedor, no con lo poseído (a diferencia del español).</p>
                
                <p>Los adjetivos posesivos en inglés son:</p>
                <ul>
                    <li><strong>My</strong> - mi, mis (cuando el poseedor es yo)</li>
                    <li><strong>Your</strong> - tu, tus, su, sus (cuando el poseedor es tú, usted, vosotros o ustedes)</li>
                    <li><strong>His</strong> - su, sus (cuando el poseedor es él)</li>
                    <li><strong>Her</strong> - su, sus (cuando el poseedor es ella)</li>
                    <li><strong>Its</strong> - su, sus (cuando el poseedor es un objeto o animal)</li>
                    <li><strong>Our</strong> - nuestro, nuestra, nuestros, nuestras</li>
                    <li><strong>Their</strong> - su, sus (cuando los poseedores son ellos o ellas)</li>
                </ul>
                
                <p>Características importantes de los adjetivos posesivos en inglés:</p>
                <ul>
                    <li>A diferencia del español, <strong>no cambian</strong> según el género o número del objeto poseído. Cambian según la persona que posee.</li>
                    <li>Ejemplo: <em>"<strong>Her</strong> books"</em> (Sus libros [de ella]) - el adjetivo no cambia aunque "books" sea plural.</li>
                    <li>Siempre se colocan <strong>antes</strong> del sustantivo al que modifican.</li>
                    <li>No llevan artículo antes de ellos (no se dice "the my book").</li>
                    <li>No debemos confundirlos con los <strong>pronombres posesivos</strong> (mine, yours, his, hers, its, ours, theirs), que sustituyen completamente al sustantivo y no lo acompañan.</li>
                </ul>
                
                <p>También es importante distinguir entre <strong>its</strong> (adjetivo posesivo) e <strong>it's</strong> (contracción de "it is" o "it has"):</p>
                <ul>
                    <li><em>The dog is chasing <strong>its</strong> tail.</em> (El perro está persiguiendo su cola)</li>
                    <li><em><strong>It's</strong> going to rain today.</em> (Va a llover hoy)</li>
                </ul>
            `,
            importancia: `
                <p>Dominar los adjetivos posesivos es fundamental por varias razones:</p>
                <ul>
                    <li>Son esenciales para expresar relaciones de posesión o pertenencia</li>
                    <li>Se encuentran entre las palabras más frecuentes en inglés</li>
                    <li>Su uso incorrecto puede generar confusión sobre quién es el poseedor</li>
                    <li>La diferencia entre "his" y "her" es crucial para evitar malentendidos de género</li>
                    <li>La distinción entre "its" e "it's" es uno de los errores más comunes en inglés</li>
                    <li>Es uno de los primeros temas que se aprenden en inglés y sirve de base para estructuras más complejas</li>
                </ul>
                
                <p>Para los hispanohablantes, los adjetivos posesivos en inglés pueden resultar confusos porque no cambian según el género o número del objeto poseído como en español. Dominar esta diferencia es esencial para comunicarse correctamente.</p>
            `,
            estructura: `
                <h4>Adjetivos Posesivos en Inglés</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Persona</th>
                            <th>Adjetivo Posesivo</th>
                            <th>Pronunciación</th>
                            <th>Ejemplo en inglés</th>
                            <th>Traducción al español</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1ª persona singular</td>
                            <td><strong>my</strong></td>
                            <td>/maɪ/</td>
                            <td>This is <strong>my</strong> book.</td>
                            <td>Este es <strong>mi</strong> libro.</td>
                        </tr>
                        <tr>
                            <td>2ª persona singular/plural</td>
                            <td><strong>your</strong></td>
                            <td>/jɔː(r)/, /jʊə(r)/</td>
                            <td>Is this <strong>your</strong> umbrella? No, mine is <strong>yours</strong>.</td>
                            <td>¿Es este <strong>tu/su</strong> paraguas? No, el mío es <strong>tuyo</strong>.</td>
                        </tr>
                        <tr>
                            <td>3ª persona singular masculino</td>
                            <td><strong>his</strong></td>
                            <td>/hɪz/</td>
                            <td>That's <strong>his</strong> car. The red one is also <strong>his</strong>.</td>
                            <td>Esa es <strong>su</strong> coche. El rojo también es <strong>suyo</strong>.</td>
                        </tr>
                        <tr>
                            <td>3ª persona singular femenino</td>
                            <td><strong>her</strong></td>
                            <td>/hɜː(r)/</td>
                            <td><strong>Her</strong> phone is new.</td>
                            <td><strong>Su</strong> teléfono es nuevo (de ella).</td>
                        </tr>
                        <tr>
                            <td>3ª persona singular neutro</td>
                            <td><strong>its</strong></td>
                            <td>/ɪts/</td>
                            <td>The dog wagged <strong>its</strong> tail.</td>
                            <td>El perro meneó <strong>su</strong> cola.</td>
                        </tr>
                        <tr>
                            <td>1ª persona plural</td>
                            <td><strong>our</strong></td>
                            <td>/ˈaʊə(r)/</td>
                            <td>We love <strong>our</strong> garden.</td>
                            <td>Amamos <strong>nuestro</strong> jardín.</td>
                        </tr>
                        <tr>
                            <td>3ª persona plural</td>
                            <td><strong>their</strong></td>
                            <td>/ðeə(r)/</td>
                            <td><strong>Their</strong> children are at school.</td>
                            <td><strong>Sus</strong> hijos están en la escuela (de ellos).</td>
                        </tr>
                    </tbody>
                </table>
                
                <h4>Comparación con Pronombres Posesivos</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Persona</th>
                            <th>Adjetivo Posesivo<br>(seguido de sustantivo)</th>
                            <th>Pronombre Posesivo<br>(sin sustantivo)</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1ª pers. sing.</td>
                            <td><strong>my</strong></td>
                            <td><strong>mine</strong></td>
                            <td>This is <strong>my</strong> book. That book is <strong>mine</strong>.</td>
                        </tr>
                        <tr>
                            <td>2ª pers. sing./pl.</td>
                            <td><strong>your</strong></td>
                            <td><strong>yours</strong></td>
                            <td>Is this <strong>your</strong> umbrella? No, mine is <strong>yours</strong>.</td>
                        </tr>
                        <tr>
                            <td>3ª pers. sing. masc.</td>
                            <td><strong>his</strong></td>
                            <td><strong>his</strong></td>
                            <td>That's <strong>his</strong> car. The red one is also <strong>his</strong>.</td>
                        </tr>
                        <tr>
                            <td>3ª pers. sing. fem.</td>
                            <td><strong>her</strong></td>
                            <td><strong>hers</strong></td>
                            <td>I like <strong>her</strong> style. This style is <strong>hers</strong>.</td>
                        </tr>
                        <tr>
                            <td>3ª pers. sing. neutro</td>
                            <td><strong>its</strong></td>
                            <td><strong>its</strong>*</td>
                            <td>The cat licked <strong>its</strong> paws. (*Raramente usado)</td>
                        </tr>
                        <tr>
                            <td>1ª pers. plural</td>
                            <td><strong>our</strong></td>
                            <td><strong>ours</strong></td>
                            <td>This is <strong>our</strong> house. That house is <strong>ours</strong>.</td>
                        </tr>
                        <tr>
                            <td>3ª pers. plural</td>
                            <td><strong>their</strong></td>
                            <td><strong>theirs</strong></td>
                            <td>Those are <strong>their</strong> bikes. The blue ones are <strong>theirs</strong>.</td>
                        </tr>
                    </tbody>
                </table>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">I can't find <strong>my</strong> keys. Have you seen them?</p>
                        <p class="espanol">No puedo encontrar <strong>mis</strong> llaves. ¿Las has visto?</p>
                        <p class="estructura"><small>Adjetivo posesivo (1ª persona singular) + sustantivo plural</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">Mark forgot <strong>his</strong> wallet at home, so <strong>his</strong> sister paid for lunch.</p>
                        <p class="espanol">Mark olvidó <strong>su</strong> cartera en casa, así que <strong>su</strong> hermana pagó el almuerzo.</p>
                        <p class="estructura"><small>Adjetivo posesivo (3ª persona singular masculino) + sustantivos</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles"><strong>He</strong> loves football. <strong>His</strong> favorite team is Manchester United.</p>
                        <p class="espanol"><strong>Él</strong> ama el fútbol. <strong>Su</strong> equipo favorito es el Manchester United.</p>
                        <p class="estructura"><small>Pronombre sujeto + verbo | Adjetivo posesivo + sustantivo</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">The book is on the table. <strong>It</strong> is very interesting.</p>
                        <p class="espanol">El libro está sobre la mesa. <strong>Es</strong> muy interesante.</p>
                        <p class="estructura"><small>Pronombre sujeto (neutro) + verbo to be + complemento</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles"><strong>They</strong> asked <strong>us</strong> to join <strong>them</strong> for dinner.</p>
                        <p class="espanol"><strong>Ellos</strong> nos pidieron que <strong>los</strong> acompañáramos a cenar.</p>
                        <p class="estructura"><small>Pronombre sujeto + verbo + pronombre objeto + infinitivo + pronombre objeto</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Practica identificando los diferentes tipos de pronombres en textos sencillos y conversaciones. Presta especial atención a cómo cambian según su función en la oración.</p>
            `,
        },
        "Presente simple": {
            descripcion: "Tiempo verbal utilizado para hablar de rutinas, hechos generales, verdades permanentes y hábitos.",
            teoria: `
                <p>El <strong>presente simple</strong> es uno de los tiempos verbales más fundamentales y utilizados en inglés. Se emplea para expresar:</p>
                
                <ul>
                    <li><strong>Rutinas y hábitos:</strong> <em>"I <strong>go</strong> to the gym three times a week."</em></li>
                    <li><strong>Hechos generales y verdades permanentes:</strong> <em>"Water <strong>boils</strong> at 100 degrees Celsius."</em></li>
                    <li><strong>Preferencias y opiniones:</strong> <em>"She <strong>likes</strong> chocolate ice cream."</em></li>
                    <li><strong>Horarios programados:</strong> <em>"The train <strong>leaves</strong> at 5 PM tomorrow."</em></li>
                    <li><strong>Instrucciones y direcciones:</strong> <em>"First, you <strong>turn</strong> right at the traffic light."</em></li>
                </ul>
                
                <p>La formación del presente simple es generalmente sencilla, pero tiene algunas reglas importantes:</p>
                
                <ul>
                    <li>Para la mayoría de los verbos, la forma base (infinitivo sin "to") se usa con I, you, we, they.</li>
                    <li>Para la tercera persona singular (he, she, it), se añade -s o -es al final del verbo.</li>
                    <li>Las oraciones negativas se forman con el auxiliar "do not" (don't) o "does not" (doesn't).</li>
                    <li>Las preguntas se forman invirtiendo el sujeto con "do" o "does".</li>
                </ul>
                
                <p>Reglas especiales para añadir -s en tercera persona singular:</p>
                <ul>
                    <li>Generalmente se añade -s: play → plays, eat → eats</li>
                    <li>Si el verbo termina en -s, -ss, -sh, -ch, -x, -z, se añade -es: watch → watches, fix → fixes</li>
                    <li>Si el verbo termina en consonante + y, se cambia la y por i y se añade -es: study → studies</li>
                    <li>Si el verbo termina en vocal + y, solo se añade -s: play → plays</li>
                </ul>
                
                <p>Los verbos auxiliares en presente simple son "do" y "does" (tercera persona singular). Se utilizan para formar preguntas y negaciones, no para afirmaciones:</p>
                <ul>
                    <li>Afirmativo: "I work" (no "I do work" en habla normal)</li>
                    <li>Negativo: "I do not (don't) work", "She does not (doesn't) work"</li>
                    <li>Interrogativo: "Do you work?", "Does she work?"</li>
                </ul>
            `,
            importancia: `
                <p>El presente simple es fundamental por varias razones:</p>
                <ul>
                    <li>Es el tiempo verbal más utilizado en inglés para la comunicación cotidiana</li>
                    <li>Permite expresar rutinas y hábitos, que son temas comunes en las conversaciones básicas</li>
                    <li>Es esencial para describir hechos científicos, verdades generales y preferencias personales</li>
                    <li>Representa la base para entender otros tiempos verbales y estructuras más complejas</li>
                    <li>Es uno de los primeros tiempos que se aprenden y se usa en todos los niveles del idioma</li>
                    <li>Muestra claramente la característica del inglés de utilizar auxiliares para preguntas y negaciones</li>
                </ul>
                
                <p>Para hispanohablantes, el presente simple puede parecer sencillo, pero tiene aspectos específicos como la -s de tercera persona singular y el uso obligatorio de auxiliares en negaciones y preguntas que son diferentes al español y requieren práctica.</p>
            `,
            estructura: `
                <h4>Forma Afirmativa</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Sujeto</th>
                            <th>Verbo</th>
                            <th>Ejemplo</th>
                            <th>Traducción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>I</td>
                            <td>Forma base</td>
                            <td>I <strong>work</strong> in an office.</td>
                            <td>Yo <strong>trabajo</strong> en una oficina.</td>
                        </tr>
                        <tr>
                            <td>You</td>
                            <td>Forma base</td>
                            <td>You <strong>live</strong> in London.</td>
                            <td>Tú <strong>vives</strong> en Londres.</td>
                        </tr>
                        <tr>
                            <td>He</td>
                            <td>Forma base + s/es</td>
                            <td>He <strong>works</strong> in a hospital.</td>
                            <td>Él <strong>trabaja</strong> en un hospital.</td>
                        </tr>
                        <tr>
                            <td>She</td>
                            <td>Forma base + s/es</td>
                            <td>She <strong>teaches</strong> English.</td>
                            <td>Ella <strong>enseña</strong> inglés.</td>
                        </tr>
                        <tr>
                            <td>It</td>
                            <td>Forma base + s/es</td>
                            <td>It <strong>costs</strong> ten dollars.</td>
                            <td><strong>Cuesta</strong> diez dólares.</td>
                        </tr>
                        <tr>
                            <td>We</td>
                            <td>Forma base</td>
                            <td>We <strong>play</strong> tennis on Sundays.</td>
                            <td>Nosotros <strong>jugamos</strong> tenis los domingos.</td>
                        </tr>
                        <tr>
                            <td>They</td>
                            <td>Forma base</td>
                            <td>They <strong>study</strong> at the university.</td>
                            <td>Ellos <strong>estudian</strong> en la universidad.</td>
                        </tr>
                    </tbody>
                </table>
                
                <h4>Forma Negativa</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Sujeto</th>
                            <th>Auxiliar + not</th>
                            <th>Verbo</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>I/You/We/They</td>
                            <td>do not (don't)</td>
                            <td>Forma base</td>
                            <td>I <strong>don't like</strong> coffee.<br>They <strong>do not work</strong> on weekends.</td>
                        </tr>
                        <tr>
                            <td>He/She/It</td>
                            <td>does not (doesn't)</td>
                            <td>Forma base</td>
                            <td>She <strong>doesn't speak</strong> French.<br>He <strong>does not eat</strong> meat.</td>
                        </tr>
                    </tbody>
                </table>
                
                <h4>Forma Interrogativa</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Auxiliar</th>
                            <th>Sujeto</th>
                            <th>Verbo</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Do</td>
                            <td>I/you/we/they</td>
                            <td>Forma base</td>
                            <td><strong>Do you play</strong> an instrument?<br><strong>Do they live</strong> near here?</td>
                        </tr>
                        <tr>
                            <td>Does</td>
                            <td>he/she/it</td>
                            <td>Forma base</td>
                            <td><strong>Does she work</strong> in Madrid?<br><strong>Does it rain</strong> a lot in your country?</td>
                        </tr>
                    </tbody>
                </table>
                
                <h4>Adverbios de frecuencia</h4>
                <p>A menudo, el presente simple se usa con adverbios de frecuencia, que generalmente se colocan:</p>
                <ul>
                    <li>Antes del verbo principal (excepto con "to be")</li>
                    <li>Después del verbo "to be"</li>
                </ul>
                
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Adverbio</th>
                            <th>Frecuencia</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Always</td>
                            <td>100%</td>
                            <td>I <strong>always</strong> brush my teeth before bed.</td>
                        </tr>
                        <tr>
                            <td>Usually</td>
                            <td>90%</td>
                            <td>She <strong>usually</strong> takes the bus to work.</td>
                        </tr>
                        <tr>
                            <td>Often</td>
                            <td>70%</td>
                            <td>We <strong>often</strong> go to the cinema.</td>
                        </tr>
                        <tr>
                            <td>Sometimes</td>
                            <td>50%</td>
                            <td>They <strong>sometimes</strong> cook dinner together.</td>
                        </tr>
                        <tr>
                            <td>Rarely/Seldom</td>
                            <td>10%</td>
                            <td>He <strong>rarely</strong> watches TV.</td>
                        </tr>
                        <tr>
                            <td>Never</td>
                            <td>0%</td>
                            <td>I <strong>never</strong> eat fast food.</td>
                        </tr>
                    </tbody>
                </table>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">Maria <strong>works</strong> in a bank from Monday to Friday.</p>
                        <p class="espanol">Maria <strong>trabaja</strong> en un banco de lunes a viernes.</p>
                        <p class="estructura"><small>Sujeto + verbo (3ª persona singular con -s) + complemento</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">I <strong>don't drink</strong> coffee in the evening. It <strong>keeps</strong> me awake.</p>
                        <p class="espanol">No <strong>tomo</strong> café por la tarde. Me <strong>mantiene</strong> despierto.</p>
                        <p class="estructura"><small>Sujeto + auxiliar (don't) + verbo | Sujeto + verbo (3ª persona singular)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles"><strong>Do</strong> you <strong>play</strong> any sports? Yes, I <strong>play</strong> tennis on weekends.</p>
                        <p class="espanol">¿<strong>Practicas</strong> algún deporte? Sí, <strong>juego</strong> tenis los fines de semana.</p>
                        <p class="estructura"><small>Auxiliar (do) + sujeto + verbo | Sujeto + verbo</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">My brother <strong>always watches</strong> the news before going to bed.</p>
                        <p class="espanol">Mi hermano <strong>siempre ve</strong> las noticias antes de acostarse.</p>
                        <p class="estructura"><small>Sujeto + adverbio de frecuencia + verbo (3ª persona singular)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles"><strong>Does</strong> your sister <strong>study</strong> English? No, she <strong>doesn't</strong>. She <strong>studies</strong> French.</p>
                        <p class="espanol">¿<strong>Estudia</strong> tu hermana inglés? No. <strong>Estudia</strong> francés.</p>
                        <p class="estructura"><small>Auxiliar (does) + sujeto + verbo | Negación (doesn't) | Sujeto + verbo (3ª persona singular)</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Practica el presente simple especialmente con la tercera persona del singular (he, she, it) ya que requiere añadir -s o -es al verbo. También recuerda usar "do/does" para preguntas y negaciones, nunca en afirmaciones simples.</p>
            `,
        },
        "Presente continuo": {
            descripcion: "Tiempo verbal usado para expresar acciones en desarrollo, situaciones temporales y planes futuros cercanos.",
            teoria: `
                <div class="teoria-content">
                    <div class="definicion-seccion">
                        <h4>¿Qué es?</h4>
                        <p>El <strong>presente continuo</strong> (también llamado presente progresivo) es un tiempo verbal que se utiliza para expresar acciones que están ocurriendo en el momento actual o alrededor del presente.</p>
                        
                        <p>Se utiliza principalmente para:</p>
                        <ul>
                            <li>Describir acciones que están ocurriendo en el momento del habla: <em>"I am studying English now."</em> (Estoy estudiando inglés ahora.)</li>
                            <li>Hablar de situaciones temporales: <em>"She is staying with her friend this week."</em> (Ella se está quedando con su amiga esta semana.)</li>
                            <li>Expresar cambios o tendencias actuales: <em>"Prices are rising."</em> (Los precios están subiendo.)</li>
                            <li>Mencionar planes futuros cercanos ya decididos: <em>"We are meeting tomorrow."</em> (Nos reunimos mañana.)</li>
                            <li>Describir situaciones irritantes o repetitivas con 'always': <em>"He is always complaining."</em> (Él siempre está quejándose.)</li>
                        </ul>
                        
                        <p>En inglés, a diferencia de algunos otros idiomas, es obligatorio usar la estructura completa con el auxiliar (am/is/are) seguido del verbo con -ing, y no se puede omitir ninguna parte.</p>
                    </div>
                    
                    <div class="formacion-seccion">
                        <h4>¿Cómo se forma?</h4>
                        <p>El presente continuo se forma con dos elementos:</p>
                        <ol>
                            <li>El verbo "to be" conjugado en presente (am/is/are)</li>
                            <li>El verbo principal con la terminación -ing</li>
                        </ol>
                        
                        <p><strong>Reglas para añadir -ing:</strong></p>
                        <ul>
                            <li>En general, se añade -ing al verbo base: <em>work → work<strong>ing</strong></em></li>
                            <li>Si el verbo termina en -e, se elimina la -e y se añade -ing: <em>write → writ<strong>ing</strong></em></li>
                            <li>Si el verbo es monosílabo y termina en consonante precedida de vocal, se duplica la consonante final: <em>run → run<strong>ning</strong></em></li>
                            <li>Si el verbo termina en -ie, se cambia a -y + ing: <em>lie → ly<strong>ing</strong></em></li>
                        </ul>
                        
                        <div class="tabla-formacion">
                            <table>
                                <tr>
                                    <th>Sujeto</th>
                                    <th>Forma afirmativa</th>
                                    <th>Forma negativa</th>
                                    <th>Forma interrogativa</th>
                                </tr>
                                <tr>
                                    <td>I</td>
                                    <td>I <strong>am working</strong><br>I<strong>'m working</strong></td>
                                    <td>I <strong>am not working</strong><br>I<strong>'m not working</strong></td>
                                    <td><strong>Am</strong> I <strong>working</strong>?</td>
                                </tr>
                                <tr>
                                    <td>You</td>
                                    <td>You <strong>are working</strong><br>You<strong>'re working</strong></td>
                                    <td>You <strong>are not working</strong><br>You <strong>aren't working</strong><br>You<strong>'re not working</strong></td>
                                    <td><strong>Are</strong> you <strong>working</strong>?</td>
                                </tr>
                                <tr>
                                    <td>He/She/It</td>
                                    <td>He <strong>is working</strong><br>He<strong>'s working</strong></td>
                                    <td>He <strong>is not working</strong><br>He <strong>isn't working</strong><br>He<strong>'s not working</strong></td>
                                    <td><strong>Is</strong> he <strong>working</strong>?</td>
                                </tr>
                                <tr>
                                    <td>We</td>
                                    <td>We <strong>are working</strong><br>We<strong>'re working</strong></td>
                                    <td>We <strong>are not working</strong><br>We <strong>aren't working</strong><br>We<strong>'re not working</strong></td>
                                    <td><strong>Are</strong> we <strong>working</strong>?</td>
                                </tr>
                                <tr>
                                    <td>They</td>
                                    <td>They <strong>are working</strong><br>They<strong>'re working</strong></td>
                                    <td>They <strong>are not working</strong><br>They <strong>aren't working</strong><br>They<strong>'re not working</strong></td>
                                    <td><strong>Are</strong> they <strong>working</strong>?</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    
                    <div class="diferencia-seccion">
                        <h4>Diferencia con el presente simple</h4>
                        <div class="comparacion">
                            <div class="presente-continuo">
                                <h5>Presente continuo</h5>
                                <p>Acciones que están ocurriendo <strong>ahora</strong> o temporalmente.</p>
                                <p><em>"She is reading a book now."</em><br>(Ella está leyendo un libro ahora.)</p>
                            </div>
                            <div class="presente-simple">
                                <h5>Presente simple</h5>
                                <p>Acciones <strong>habituales</strong> o verdades generales.</p>
                                <p><em>"She reads books every day."</em><br>(Ella lee libros todos los días.)</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            importancia: `
                <p>Dominar el presente continuo es esencial porque:</p>
                <ul>
                    <li>Permite describir el mundo en movimiento a nuestro alrededor en tiempo real</li>
                    <li>Es fundamental para narrar lo que está sucediendo en este momento</li>
                    <li>Ayuda a diferenciar entre acciones habituales y acciones en curso</li>
                    <li>Se utiliza en conversaciones cotidianas para describir situaciones actuales</li>
                    <li>Permite expresar planes futuros cercanos sin usar estructuras de futuro más complejas</li>
                    <li>Es uno de los primeros tiempos verbales que se aprende después del presente simple</li>
                </ul>
                
                <p>Sin dominar este tiempo verbal, sería difícil describir situaciones dinámicas o en desarrollo, limitando significativamente la capacidad de comunicación en tiempo presente.</p>
            `,
            estructura: `
                <h4>Estructura del presente continuo</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Tipo de oración</th>
                            <th>Estructura</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Afirmativa</td>
                            <td>Sujeto + am/is/are + verbo-ing + complemento</td>
                            <td>They <strong>are playing</strong> football.</td>
                        </tr>
                        <tr>
                            <td>Negativa</td>
                            <td>Sujeto + am/is/are + not + verbo-ing + complemento</td>
                            <td>She <strong>is not studying</strong> now.</td>
                        </tr>
                        <tr>
                            <td>Interrogativa</td>
                            <td>Am/Is/Are + sujeto + verbo-ing + complemento + ?</td>
                            <td><strong>Are</strong> you <strong>listening</strong> to me?</td>
                        </tr>
                        <tr>
                            <td>Negativa interrogativa</td>
                            <td>Am/Is/Are + not + sujeto + verbo-ing + ? <br>o<br> Aren't/Isn't + sujeto + verbo-ing + ?</td>
                            <td><strong>Isn't</strong> he <strong>working</strong> today?</td>
                        </tr>
                        <tr>
                            <td>Respuesta corta afirmativa</td>
                            <td>Yes, sujeto + am/is/are.</td>
                            <td>Yes, I am. / Yes, they are.</td>
                        </tr>
                        <tr>
                            <td>Respuesta corta negativa</td>
                            <td>No, sujeto + am/is/are + not. <br>o<br> No, sujeto + aren't/isn't/am not.</td>
                            <td>No, he isn't. / No, we aren't.</td>
                        </tr>
                    </tbody>
                </table>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">"I <strong>am reading</strong> a book at the moment."</p>
                        <p class="espanol">Yo <strong>estoy leyendo</strong> un libro en este momento.</p>
                        <p class="estructura"><small>Sujeto + am + verbo-ing + complemento</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"They <strong>are not watching</strong> TV right now."</p>
                        <p class="espanol">Ellos <strong>no están viendo</strong> la televisión ahora mismo.</p>
                        <p class="estructura"><small>Sujeto + are + not + verbo-ing + complemento</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"<strong>Is</strong> she <strong>studying</strong> for her exam?"</p>
                        <p class="espanol">¿<strong>Está</strong> ella <strong>estudiando</strong> para su examen?</p>
                        <p class="estructura"><small>Is + sujeto + verbo-ing + complemento + ?</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"The price of houses <strong>is increasing</strong> every year."</p>
                        <p class="espanol">El precio de las casas <strong>está aumentando</strong> cada año.</p>
                        <p class="estructura"><small>Sujeto + is + verbo-ing + complemento</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"We <strong>are having</strong> dinner with friends tomorrow."</p>
                        <p class="espanol">Nosotros <strong>vamos a cenar</strong> con amigos mañana.</p>
                        <p class="estructura"><small>Sujeto + are + verbo-ing + complemento (futuro cercano)</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Para practicar el presente continuo, describe lo que está sucediendo a tu alrededor en este momento usando la estructura "Sujeto + am/is/are + verbo-ing".</p>
            `,
        },
        "Pasado simple": {
            descripcion: "Tiempo verbal utilizado para expresar acciones completadas en un momento específico del pasado.",
            teoria: `
                <div class="teoria-content">
                    <div class="definicion-seccion">
                        <h4>¿Qué es?</h4>
                        <p>El <strong>pasado simple</strong> es un tiempo verbal que se usa para hablar de acciones o situaciones que comenzaron y terminaron en un momento determinado del pasado.</p>
                        
                        <p>Se utiliza principalmente para:</p>
                        <ul>
                            <li>Narrar acciones completadas en el pasado: <em>"I visited Paris last year."</em> (Visité París el año pasado.)</li>
                            <li>Describir hechos históricos: <em>"Columbus discovered America in 1492."</em> (Colón descubrió América en 1492.)</li>
                            <li>Contar una secuencia de eventos pasados: <em>"She woke up, had breakfast, and left."</em> (Ella se despertó, desayunó y se fue.)</li>
                            <li>Hablar de hábitos o estados en el pasado: <em>"I worked there for ten years."</em> (Trabajé allí durante diez años.)</li>
                            <li>Narrar historias o anécdotas: <em>"Last night I dreamed about flying."</em> (Anoche soñé que volaba.)</li>
                        </ul>
                        
                        <p>En inglés, a diferencia del español, es importante usar marcadores temporales que indiquen que la acción ocurrió en el pasado (yesterday, last week, in 2020, ago, etc.).</p>
                    </div>
                    
                    <div class="formacion-seccion">
                        <h4>¿Cómo se forma?</h4>
                        
                        <div class="verbos-regulares">
                            <h5>Verbos regulares</h5>
                            <p>Los verbos regulares en pasado simple se forman añadiendo el sufijo <strong>-ed</strong> al final del verbo base:</p>
                            
                            <ul>
                                <li>La mayoría de verbos: añadir <strong>-ed</strong>
                                    <ul>
                                        <li>work → work<strong>ed</strong></li>
                                        <li>play → play<strong>ed</strong></li>
                                    </ul>
                                </li>
                                <li>Verbos que terminan en -e: añadir <strong>-d</strong>
                                    <ul>
                                        <li>live → live<strong>d</strong></li>
                                        <li>dance → dance<strong>d</strong></li>
                                    </ul>
                                </li>
                                <li>Verbos que terminan en consonante + y: cambiar la y por <strong>i</strong> y añadir <strong>-ed</strong>
                                    <ul>
                                        <li>study → stud<strong>ied</strong></li>
                                        <li>try → tr<strong>ied</strong></li>
                                    </ul>
                                </li>
                                <li>Verbos monosílabos que terminan en consonante-vocal-consonante: duplicar la última consonante y añadir <strong>-ed</strong>
                                    <ul>
                                        <li>stop → stop<strong>ped</strong></li>
                                        <li>plan → plan<strong>ned</strong></li>
                                    </ul>
                                </li>
                            </ul>
                            
                            <p><strong>Pronunciación del -ed:</strong></p>
                            <ul>
                                <li>/t/ después de sonidos sordos (p, k, sh, ch, f, s, x): <em>walked</em>, <em>washed</em></li>
                                <li>/d/ después de sonidos sonoros (b, g, v, z, m, n, l, r) y vocales: <em>played</em>, <em>cleaned</em></li>
                                <li>/id/ después de los sonidos /t/ y /d/: <em>wanted</em>, <em>needed</em></li>
                            </ul>
                        </div>
                        
                        <div class="verbos-irregulares">
                            <h5>Verbos irregulares</h5>
                            <p>Los verbos irregulares no siguen ningún patrón específico y deben memorizarse. Algunos de los más comunes son:</p>
                            
                            <div class="tabla-formacion">
                                <table>
                                    <tr>
                                        <th>Infinitivo</th>
                                        <th>Pasado simple</th>
                                        <th>Ejemplo</th>
                                    </tr>
                                    <tr>
                                        <td>be (am/is/are)</td>
                                        <td>was/were</td>
                                        <td>I <strong>was</strong> tired. / You <strong>were</strong> happy.</td>
                                    </tr>
                                    <tr>
                                        <td>go</td>
                                        <td>went</td>
                                        <td>She <strong>went</strong> to Paris.</td>
                                    </tr>
                                    <tr>
                                        <td>do</td>
                                        <td>did</td>
                                        <td>We <strong>did</strong> our homework.</td>
                                    </tr>
                                    <tr>
                                        <td>have</td>
                                        <td>had</td>
                                        <td>They <strong>had</strong> a party.</td>
                                    </tr>
                                    <tr>
                                        <td>make</td>
                                        <td>made</td>
                                        <td>He <strong>made</strong> a cake.</td>
                                    </tr>
                                    <tr>
                                        <td>see</td>
                                        <td>saw</td>
                                        <td>I <strong>saw</strong> a movie.</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div class="negativas-preguntas-seccion">
                        <h4>Negaciones y preguntas</h4>
                        <p>A diferencia de las afirmaciones, las negaciones y preguntas en pasado simple <strong>siempre</strong> usan el auxiliar "did" (pasado de "do") + el verbo en infinitivo (no en pasado):</p>
                        
                        <div class="tabla-formacion">
                            <table>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Estructura</th>
                                    <th>Ejemplo</th>
                                </tr>
                                <tr>
                                    <td>Negativa</td>
                                    <td>Sujeto + did not (didn't) + verbo infinitivo</td>
                                    <td>I <strong>did not (didn't) go</strong> to the party.</td>
                                </tr>
                                <tr>
                                    <td>Interrogativa</td>
                                    <td>Did + sujeto + verbo infinitivo</td>
                                    <td><strong>Did</strong> they <strong>visit</strong> the museum?</td>
                                </tr>
                                <tr>
                                    <td>Negativa interrogativa</td>
                                    <td>Did not (Didn't) + sujeto + verbo infinitivo</td>
                                    <td><strong>Didn't</strong> she <strong>call</strong> you?</td>
                                </tr>
                            </table>
                        </div>
                        
                        <p><strong>Nota importante:</strong> En las negaciones e interrogativas, el verbo principal siempre va en su forma base (infinitivo sin "to"), nunca en pasado.</p>
                    </div>
                </div>
            `,
            importancia: `
                <p>Dominar el pasado simple es fundamental porque:</p>
                <ul>
                    <li>Es el tiempo verbal más utilizado para narrar acontecimientos pasados</li>
                    <li>Permite contar experiencias personales, historias y anécdotas</li>
                    <li>Es esencial para hablar sobre eventos históricos y biografías</li>
                    <li>Constituye la base para comprender y utilizar otros tiempos verbales del pasado más complejos</li>
                    <li>Es uno de los primeros tiempos verbales del pasado que se aprende en inglés</li>
                    <li>Aparece constantemente en conversaciones cotidianas, noticias, libros y películas</li>
                </ul>
                
                <p>Sin un buen manejo del pasado simple, sería prácticamente imposible hablar sobre cualquier experiencia previa o comprender narraciones en inglés, limitando severamente la comunicación.</p>
            `,
            estructura: `
                <h4>Estructura del pasado simple</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Tipo de oración</th>
                            <th>Estructura</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Afirmativa (verbos regulares)</td>
                            <td>Sujeto + verbo + ed + complemento</td>
                            <td>They <strong>walked</strong> to school.</td>
                        </tr>
                        <tr>
                            <td>Afirmativa (verbos irregulares)</td>
                            <td>Sujeto + verbo en pasado + complemento</td>
                            <td>She <strong>went</strong> to the cinema.</td>
                        </tr>
                        <tr>
                            <td>Negativa</td>
                            <td>Sujeto + did not (didn't) + verbo base + complemento</td>
                            <td>I <strong>didn't watch</strong> TV yesterday.</td>
                        </tr>
                        <tr>
                            <td>Interrogativa</td>
                            <td>Did + sujeto + verbo base + complemento + ?</td>
                            <td><strong>Did</strong> they <strong>arrive</strong> late?</td>
                        </tr>
                        <tr>
                            <td>Respuesta corta afirmativa</td>
                            <td>Yes, sujeto + did.</td>
                            <td>Yes, I did. / Yes, they did.</td>
                        </tr>
                        <tr>
                            <td>Respuesta corta negativa</td>
                            <td>No, sujeto + didn't.</td>
                            <td>No, she didn't. / No, we didn't.</td>
                        </tr>
                    </tbody>
                </table>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">"He <strong>went</strong> to the cinema yesterday."</p>
                        <p class="espanol">Él <strong>fue</strong> al cine ayer.</p>
                        <p class="estructura"><small>Sujeto + verbo irregular en pasado + complemento + expresión de tiempo</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"I <strong>studied</strong> French for five years."</p>
                        <p class="espanol">Yo <strong>estudié</strong> francés durante cinco años.</p>
                        <p class="estructura"><small>Sujeto + verbo regular + -ed + complemento</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"She <strong>didn't visit</strong> her grandmother last weekend."</p>
                        <p class="espanol">Ella <strong>no visitó</strong> a su abuela el fin de semana pasado.</p>
                        <p class="estructura"><small>Sujeto + didn't + verbo base + complemento</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"<strong>Did</strong> you <strong>enjoy</strong> the party?"</p>
                        <p class="espanol">¿<strong>Disfrutaste</strong> la fiesta?</p>
                        <p class="estructura"><small>Did + sujeto + verbo base + complemento + ?</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"The Romans <strong>built</strong> this road 2,000 years ago."</p>
                        <p class="espanol">Los romanos <strong>construyeron</strong> esta carretera hace 2.000 años.</p>
                        <p class="estructura"><small>Sujeto + verbo irregular en pasado + complemento + expresión de tiempo</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Para practicar el pasado simple, intenta narrar algo que hiciste ayer o la semana pasada, prestando atención a los verbos irregulares y al uso correcto del auxiliar "did" en negaciones y preguntas.</p>
            `,
        },
        "Comparativos y superlativos": {
            descripcion: "Estructuras gramaticales para comparar cualidades, cantidades o grados entre personas, lugares y objetos.",
            teoria: `
                <div class="teoria-content">
                    <div class="definicion-seccion">
                        <h4>¿Qué son?</h4>
                        <p>Los <strong>comparativos</strong> y <strong>superlativos</strong> son formas gramaticales utilizadas para comparar personas, lugares, objetos o situaciones según sus cualidades o características.</p>
                        
                        <ul>
                            <li>Los <strong>comparativos</strong> se usan para comparar dos elementos entre sí.</li>
                            <li>Los <strong>superlativos</strong> se usan para comparar un elemento con todos los demás de un grupo o categoría.</li>
                        </ul>
                        
                        <p>Estas estructuras se basan en adjetivos (palabras que describen cualidades) y permiten establecer diferentes grados de comparación, indicando si algo es mayor, menor o igual en algún aspecto.</p>
                    </div>
                    
                    <div class="formacion-seccion">
                        <h4>¿Cómo se forman?</h4>
                        <p>La forma de construir comparativos y superlativos depende principalmente de la longitud del adjetivo (número de sílabas) y, en algunos casos, de su terminación.</p>
                        
                        <div class="adjetivos-cortos">
                            <h5>1. Adjetivos cortos (una sílaba)</h5>
                            <div class="tabla-formacion">
                                <table>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Formación</th>
                                        <th>Ejemplo</th>
                                    </tr>
                                    <tr>
                                        <td>Comparativo</td>
                                        <td>adjetivo + <strong>-er</strong> + than</td>
                                        <td>tall → <strong>taller than</strong><br><em>"She is taller than her brother."</em></td>
                                    </tr>
                                    <tr>
                                        <td>Superlativo</td>
                                        <td>the + adjetivo + <strong>-est</strong></td>
                                        <td>tall → <strong>the tallest</strong><br><em>"She is the tallest in her family."</em></td>
                                    </tr>
                                </table>
                            </div>
                            
                            <p><strong>Reglas ortográficas especiales:</strong></p>
                            <ul>
                                <li>Si el adjetivo termina en <strong>-e</strong>, solo se añade <strong>-r</strong> (comparativo) o <strong>-st</strong> (superlativo):<br>
                                    nice → nic<strong>er</strong> → the nic<strong>est</strong>
                                </li>
                                <li>Si el adjetivo termina en consonante + vocal + consonante, se duplica la última consonante:<br>
                                    big → big<strong>ger</strong> → the big<strong>gest</strong><br>
                                    hot → hot<strong>ter</strong> → the hot<strong>test</strong>
                                </li>
                                <li>Si el adjetivo termina en <strong>-y</strong>, la <strong>y</strong> cambia a <strong>i</strong>:<br>
                                    happy → happ<strong>ier</strong> → the happ<strong>iest</strong>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="adjetivos-largos">
                            <h5>2. Adjetivos largos (dos o más sílabas)</h5>
                            <div class="tabla-formacion">
                                <table>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Formación</th>
                                        <th>Ejemplo</th>
                                    </tr>
                                    <tr>
                                        <td>Comparativo</td>
                                        <td><strong>more</strong> + adjetivo + than</td>
                                        <td>beautiful → <strong>more beautiful than</strong><br><em>"This painting is more beautiful than that one."</em></td>
                                    </tr>
                                    <tr>
                                        <td>Superlativo</td>
                                        <td>the + <strong>most</strong> + adjetivo</td>
                                        <td>beautiful → <strong>the most beautiful</strong><br><em>"This is the most beautiful painting in the gallery."</em></td>
                                    </tr>
                                </table>
                            </div>
                            
                            <p><strong>Excepción:</strong> Algunos adjetivos de dos sílabas pueden formar el comparativo/superlativo de ambas maneras:</p>
                            <ul>
                                <li>clever → clev<strong>er</strong> / <strong>more</strong> clever → the clev<strong>est</strong> / the <strong>most</strong> clever</li>
                                <li>quiet → quiet<strong>er</strong> / <strong>more</strong> quiet → the quiet<strong>est</strong> / the <strong>most</strong> quiet</li>
                                <li>simple → simpl<strong>er</strong> / <strong>more</strong> simple → the simpl<strong>est</strong> / the <strong>most</strong> simple</li>
                            </ul>
                        </div>
                        
                        <div class="adjetivos-irregulares">
                            <h5>3. Adjetivos irregulares</h5>
                            <p>Algunos adjetivos no siguen las reglas anteriores y tienen formas especiales:</p>
                            
                            <div class="tabla-formacion">
                                <table>
                                    <tr>
                                        <th>Adjetivo</th>
                                        <th>Comparativo</th>
                                        <th>Superlativo</th>
                                    </tr>
                                    <tr>
                                        <td>good / well</td>
                                        <td><strong>better</strong> than</td>
                                        <td>the <strong>best</strong></td>
                                    </tr>
                                    <tr>
                                        <td>bad / badly</td>
                                        <td><strong>worse</strong> than</td>
                                        <td>the <strong>worst</strong></td>
                                    </tr>
                                    <tr>
                                        <td>far</td>
                                        <td><strong>farther/further</strong> than</td>
                                        <td>the <strong>farthest/furthest</strong></td>
                                    </tr>
                                    <tr>
                                        <td>little</td>
                                        <td><strong>less</strong> than</td>
                                        <td>the <strong>least</strong></td>
                                    </tr>
                                    <tr>
                                        <td>many / much</td>
                                        <td><strong>more</strong> than</td>
                                        <td>the <strong>most</strong></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        
                        <div class="igualdad-seccion">
                            <h5>4. Comparativos de igualdad</h5>
                            <div class="tabla-formacion">
                                <table>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Estructura</th>
                                        <th>Ejemplo</th>
                                    </tr>
                                    <tr>
                                        <td>Igualdad</td>
                                        <td>as + adjetivo + as</td>
                                        <td><em>"She is <strong>as tall as</strong> her mother."</em></td>
                                    </tr>
                                    <tr>
                                        <td>Desigualdad</td>
                                        <td>not as/so + adjetivo + as</td>
                                        <td><em>"This car is <strong>not as expensive as</strong> that one."</em></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            importancia: `
                <p>Dominar los comparativos y superlativos es fundamental porque:</p>
                <ul>
                    <li>Permiten realizar comparaciones precisas entre personas, objetos o situaciones</li>
                    <li>Son estructuras muy frecuentes en conversaciones cotidianas y textos escritos</li>
                    <li>Facilitan la expresión de preferencias, opiniones y juicios de valor</li>
                    <li>Ayudan a organizar y jerarquizar información según cualidades o características</li>
                    <li>Son esenciales para describir cambios, tendencias y diferencias</li>
                    <li>Permiten expresar ventajas y desventajas en debates y argumentaciones</li>
                </ul>
                
                <p>Sin el manejo adecuado de estas estructuras, sería difícil expresar con precisión diferencias, similitudes o extremos, limitando nuestra capacidad para describir y analizar el mundo que nos rodea.</p>
            `,
            estructura: `
                <h4>Estructuras comparativas y superlativas</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Tipo de estructura</th>
                            <th>Patrón gramatical</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Comparativo de superioridad (adjetivos cortos)</td>
                            <td>Sujeto + verbo + adjetivo-er + than + objeto de comparación</td>
                            <td>London is <strong>bigger than</strong> Madrid.</td>
                        </tr>
                        <tr>
                            <td>Comparativo de superioridad (adjetivos largos)</td>
                            <td>Sujeto + verbo + more + adjetivo + than + objeto de comparación</td>
                            <td>Physics is <strong>more difficult than</strong> English.</td>
                        </tr>
                        <tr>
                            <td>Comparativo de inferioridad</td>
                            <td>Sujeto + verbo + less + adjetivo + than + objeto de comparación</td>
                            <td>Trains are <strong>less expensive than</strong> planes.</td>
                        </tr>
                        <tr>
                            <td>Comparativo de igualdad</td>
                            <td>Sujeto + verbo + as + adjetivo + as + objeto de comparación</td>
                            <td>She is <strong>as tall as</strong> her sister.</td>
                        </tr>
                        <tr>
                            <td>Superlativo (adjetivos cortos)</td>
                            <td>Sujeto + verbo + the + adjetivo-est + (in/of + grupo)</td>
                            <td>He is <strong>the youngest</strong> in his family.</td>
                        </tr>
                        <tr>
                            <td>Superlativo (adjetivos largos)</td>
                            <td>Sujeto + verbo + the + most + adjetivo + (in/of + grupo)</td>
                            <td>She is <strong>the most intelligent</strong> student in the class.</td>
                        </tr>
                    </tbody>
                </table>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">"This coffee is <strong>hotter than</strong> that one."</p>
                        <p class="espanol">Este café está <strong>más caliente que</strong> aquel.</p>
                        <p class="estructura"><small>Sujeto + verbo + adjetivo corto + er + than + objeto</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"Learning Chinese is <strong>more difficult than</strong> learning Spanish."</p>
                        <p class="espanol">Aprender chino es <strong>más difícil que</strong> aprender español.</p>
                        <p class="estructura"><small>Sujeto + verbo + more + adjetivo largo + than + objeto</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"Mount Everest is <strong>the highest</strong> mountain in the world."</p>
                        <p class="espanol">El Monte Everest es <strong>la montaña más alta</strong> del mundo.</p>
                        <p class="estructura"><small>Sujeto + verbo + the + adjetivo corto + est + complemento</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"Her performance was <strong>the most impressive</strong> of the evening."</p>
                        <p class="espanol">Su actuación fue <strong>la más impresionante</strong> de la noche.</p>
                        <p class="estructura"><small>Sujeto + verbo + the + most + adjetivo largo + complemento</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"Their house is <strong>as big as</strong> ours, but it's <strong>not as modern</strong>."</p>
                        <p class="espanol">Su casa es <strong>tan grande como</strong> la nuestra, pero <strong>no es tan moderna</strong>.</p>
                        <p class="estructura"><small>Comparativo de igualdad: as + adjetivo + as</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Para practicar, compara objetos de tu entorno usando las diferentes estructuras comparativas y superlativas. Por ejemplo: "Mi teléfono es más nuevo que el tuyo" o "Este es el edificio más alto de la ciudad".</p>
            `,
        },
        "Adverbios de frecuencia": {
            descripcion: "Palabras que indican con qué regularidad o frecuencia ocurre una acción o evento.",
            teoria: `
                <div class="teoria-content">
                    <div class="definicion-seccion">
                        <h4>¿Qué son?</h4>
                        <p>Los <strong>adverbios de frecuencia</strong> son palabras que indican con qué regularidad o frecuencia ocurre una acción o actividad. Estas palabras nos permiten expresar desde la ausencia total de una acción (never/nunca) hasta su realización constante (always/siempre).</p>
                        
                        <p>Los adverbios de frecuencia son fundamentales para hablar de rutinas, hábitos y comportamientos repetitivos, siendo especialmente importantes cuando se usa el presente simple en inglés.</p>
                    </div>
                    
                    <div class="tipos-seccion">
                        <h4>Principales adverbios de frecuencia</h4>
                        <p>Los adverbios de frecuencia suelen organizarse en una escala de menor a mayor frecuencia:</p>
                        
                        <div class="adverbios-escala">
                            <div class="adverbio-item" style="--porcentaje: 100%;">
                                <span class="adverbio">Always</span>
                                <span class="porcentaje">100%</span>
                                <div class="barra-porcentaje"></div>
                                <span class="traduccion">Siempre</span>
                            </div>
                            <div class="adverbio-item" style="--porcentaje: 90%;">
                                <span class="adverbio">Usually</span>
                                <span class="porcentaje">90%</span>
                                <div class="barra-porcentaje"></div>
                                <span class="traduccion">Normalmente</span>
                            </div>
                            <div class="adverbio-item" style="--porcentaje: 80%;">
                                <span class="adverbio">Frequently</span>
                                <span class="porcentaje">80%</span>
                                <div class="barra-porcentaje"></div>
                                <span class="traduccion">Frecuentemente</span>
                            </div>
                            <div class="adverbio-item" style="--porcentaje: 70%;">
                                <span class="adverbio">Often</span>
                                <span class="porcentaje">70%</span>
                                <div class="barra-porcentaje"></div>
                                <span class="traduccion">A menudo</span>
                            </div>
                            <div class="adverbio-item" style="--porcentaje: 50%;">
                                <span class="adverbio">Sometimes</span>
                                <span class="porcentaje">50%</span>
                                <div class="barra-porcentaje"></div>
                                <span class="traduccion">A veces</span>
                            </div>
                            <div class="adverbio-item" style="--porcentaje: 30%;">
                                <span class="adverbio">Occasionally</span>
                                <span class="porcentaje">30%</span>
                                <div class="barra-porcentaje"></div>
                                <span class="traduccion">Ocasionalmente</span>
                            </div>
                            <div class="adverbio-item" style="--porcentaje: 10%;">
                                <span class="adverbio">Rarely/Seldom</span>
                                <span class="porcentaje">10%</span>
                                <div class="barra-porcentaje"></div>
                                <span class="traduccion">Raramente</span>
                            </div>
                            <div class="adverbio-item" style="--porcentaje: 5%;">
                                <span class="adverbio">Hardly ever</span>
                                <span class="porcentaje">5%</span>
                                <div class="barra-porcentaje"></div>
                                <span class="traduccion">Casi nunca</span>
                            </div>
                            <div class="adverbio-item" style="--porcentaje: 0%;">
                                <span class="adverbio">Never</span>
                                <span class="porcentaje">0%</span>
                                <div class="barra-porcentaje"></div>
                                <span class="traduccion">Nunca</span>
                            </div>
                        </div>
                        
                        <div class="expresiones-adicionales">
                            <h5>Otras expresiones de frecuencia</h5>
                            <div class="tabla-formacion">
                                <table>
                                    <tr>
                                        <th>Expresión</th>
                                        <th>Significado</th>
                                        <th>Ejemplo</th>
                                    </tr>
                                    <tr>
                                        <td>once a week</td>
                                        <td>una vez por semana</td>
                                        <td><em>"I go to the gym <strong>once a week</strong>."</em></td>
                                    </tr>
                                    <tr>
                                        <td>twice a month</td>
                                        <td>dos veces al mes</td>
                                        <td><em>"She visits her parents <strong>twice a month</strong>."</em></td>
                                    </tr>
                                    <tr>
                                        <td>three times a day</td>
                                        <td>tres veces al día</td>
                                        <td><em>"He takes his medicine <strong>three times a day</strong>."</em></td>
                                    </tr>
                                    <tr>
                                        <td>every day</td>
                                        <td>todos los días</td>
                                        <td><em>"I brush my teeth <strong>every day</strong>."</em></td>
                                    </tr>
                                    <tr>
                                        <td>most of the time</td>
                                        <td>la mayor parte del tiempo</td>
                                        <td><em>"<strong>Most of the time</strong>, I walk to work."</em></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div class="position-seccion">
                        <h4>Posición en la oración</h4>
                        <p>La posición de los adverbios de frecuencia en la oración varía según el tipo de verbo y la estructura de la frase:</p>
                        
                        <div class="tabla-formacion">
                            <table>
                                <tr>
                                    <th>Caso</th>
                                    <th>Posición</th>
                                    <th>Ejemplo</th>
                                </tr>
                                <tr>
                                    <td>Con verbos principales (excepto "to be")</td>
                                    <td><strong>Antes</strong> del verbo principal</td>
                                    <td><em>"They <strong>always</strong> eat breakfast."</em></td>
                                </tr>
                                <tr>
                                    <td>Con el verbo "to be"</td>
                                    <td><strong>Después</strong> del verbo "to be"</td>
                                    <td><em>"She is <strong>usually</strong> happy."</em></td>
                                </tr>
                                <tr>
                                    <td>Con verbos auxiliares o modales</td>
                                    <td><strong>Después</strong> del auxiliar y <strong>antes</strong> del verbo principal</td>
                                    <td><em>"I have <strong>never</strong> been to Paris."</em><br><em>"She can <strong>sometimes</strong> speak Spanish."</em></td>
                                </tr>
                                <tr>
                                    <td>Expresiones de frecuencia (once a week, etc.)</td>
                                    <td>Generalmente al <strong>final</strong> de la oración</td>
                                    <td><em>"We go to the cinema <strong>twice a month</strong>."</em></td>
                                </tr>
                            </table>
                        </div>
                        
                        <p><strong>Nota:</strong> Algunas expresiones como "sometimes", "usually" y "often" pueden colocarse al principio de la oración para darles mayor énfasis.</p>
                        <p><em>"<strong>Sometimes</strong> I forget to set my alarm."</em></p>
                    </div>
                </div>
            `,
            importancia: `
                <p>Los adverbios de frecuencia son esenciales para expresar rutinas y hábitos, permitiéndonos comunicar claramente la regularidad con la que realizamos actividades. Son fundamentales en conversaciones cotidianas sobre hábitos y costumbres.</p>
                <p>Además, los adverbios de frecuencia son esenciales para hablar de rutinas, hábitos y comportamientos repetitivos, siendo especialmente importantes cuando se usa el presente simple en inglés.</p>
            `,
            estructura: `
                <h4>Estructuras con adverbios de frecuencia</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Tipo de verbo</th>
                            <th>Estructura</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Verbos principales</td>
                            <td>Sujeto + adverbio de frecuencia + verbo principal</td>
                            <td>I <strong>always</strong> drink coffee in the morning.</td>
                        </tr>
                        <tr>
                            <td>Verbo "to be"</td>
                            <td>Sujeto + verbo to be + adverbio de frecuencia</td>
                            <td>She <strong>is never</strong> late for work.</td>
                        </tr>
                        <tr>
                            <td>Con auxiliares y modales</td>
                            <td>Sujeto + auxiliar/modal + adverbio de frecuencia + verbo principal</td>
                            <td>They <strong>don't usually</strong> eat meat.<br>We <strong>can often</strong> see stars at night.</td>
                        </tr>
                        <tr>
                            <td>En negaciones</td>
                            <td>Sujeto + auxiliar + not + adverbio de frecuencia + verbo principal</td>
                            <td>He <strong>doesn't often</strong> visit his family.</td>
                        </tr>
                        <tr>
                            <td>En preguntas</td>
                            <td>Auxiliar + sujeto + adverbio de frecuencia + verbo principal</td>
                            <td><strong>Do</strong> you <strong>ever</strong> go swimming?</td>
                        </tr>
                    </tbody>
                </table>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">"She <strong>never</strong> watches TV."</p>
                        <p class="espanol">Ella <strong>nunca</strong> ve televisión.</p>
                        <p class="estructura"><small>Sujeto + adverbio de frecuencia + verbo principal</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"I am <strong>usually</strong> tired after work."</p>
                        <p class="espanol">Yo <strong>generalmente</strong> estoy cansado después del trabajo.</p>
                        <p class="estructura"><small>Sujeto + verbo to be + adverbio de frecuencia + complemento</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"They <strong>sometimes</strong> go to the cinema on weekends."</p>
                        <p class="espanol">Ellos <strong>a veces</strong> van al cine los fines de semana.</p>
                        <p class="estructura"><small>Sujeto + adverbio de frecuencia + verbo principal + complemento</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"<strong>How often</strong> do you exercise?"</p>
                        <p class="espanol">¿<strong>Con qué frecuencia</strong> haces ejercicio?</p>
                        <p class="estructura"><small>How often + auxiliar + sujeto + verbo principal + ?</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"We have <strong>always</strong> wanted to visit Japan."</p>
                        <p class="espanol">Nosotros <strong>siempre</strong> hemos querido visitar Japón.</p>
                        <p class="estructura"><small>Sujeto + auxiliar + adverbio de frecuencia + participio pasado + complemento</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Para practicar, intenta describir tu rutina diaria usando diferentes adverbios de frecuencia. Por ejemplo: "I always have breakfast at 8", "I sometimes walk to work", "I never stay up late on weekdays".</p>
            `,
        },
        "Preposiciones de lugar": {
            descripcion: "Palabras que indican la posición o ubicación de personas, objetos o lugares en el espacio.",
            teoria: `
                <div class="teoria-content">
                    <div class="definicion-seccion">
                        <h4>¿Qué son?</h4>
                        <p>Las <strong>preposiciones de lugar</strong> son palabras que utilizamos para indicar la posición o ubicación de personas, objetos o lugares en el espacio. Son fundamentales para dar indicaciones, describir ubicaciones y situar elementos en el entorno.</p>
                        
                        <p>Las preposiciones de lugar responden a la pregunta <em>"¿Dónde?"</em> y nos ayudan a establecer relaciones espaciales entre los diferentes elementos que describimos.</p>
                    </div>
                    
                    <div class="preposiciones-seccion">
                        <h4>Preposiciones de lugar más comunes</h4>
                        <div class="preposiciones-grid">
                            <div class="preposicion-item">
                                <h5>In</h5>
                                <p>Dentro de algo cerrado o delimitado</p>
                                <div class="ejemplo-visual">
                                    <span class="objeto">🧸</span>
                                    <span class="contenedor">📦</span>
                                </div>
                                <p><em>"The toy is <strong>in</strong> the box."</em></p>
                                <p><small>(El juguete está <strong>dentro</strong> de la caja.)</small></p>
                            </div>
                            <div class="preposicion-item">
                                <h5>On</h5>
                                <p>Sobre una superficie, en contacto con ella</p>
                                <div class="ejemplo-visual">
                                    <span class="objeto">📱</span>
                                    <span class="superficie">🪑</span>
                                </div>
                                <p><em>"The phone is <strong>on</strong> the table."</em></p>
                                <p><small>(El teléfono está <strong>sobre</strong> la mesa.)</small></p>
                            </div>
                            <div class="preposicion-item">
                                <h5>At</h5>
                                <p>Ubicación específica o punto de referencia</p>
                                <div class="ejemplo-visual">
                                    <span class="persona">👩</span>
                                    <span class="lugar">🏫</span>
                                </div>
                                <p><em>"She is <strong>at</strong> school."</em></p>
                                <p><small>(Ella está <strong>en</strong> la escuela.)</small></p>
                            </div>
                            <div class="preposicion-item">
                                <h5>Under</h5>
                                <p>Debajo de algo, en posición inferior</p>
                                <div class="ejemplo-visual">
                                    <span class="superficie">🛏️</span>
                                    <span class="objeto">🧦</span>
                                </div>
                                <p><em>"The sock is <strong>under</strong> the bed."</em></p>
                                <p><small>(El calcetín está <strong>debajo</strong> de la cama.)</small></p>
                            </div>
                            <div class="preposicion-item">
                                <h5>Behind</h5>
                                <p>Detrás de algo o alguien</p>
                                <div class="ejemplo-visual">
                                    <span class="referencia">🚪</span>
                                    <span class="objeto">🐱</span>
                                </div>
                                <p><em>"The cat is <strong>behind</strong> the door."</em></p>
                                <p><small>(El gato está <strong>detrás</strong> de la puerta.)</small></p>
                            </div>
                            <div class="preposicion-item">
                                <h5>In front of</h5>
                                <p>Frente a algo o alguien</p>
                                <div class="ejemplo-visual">
                                    <span class="objeto">🧍</span>
                                    <span class="referencia">🏠</span>
                                </div>
                                <p><em>"She is <strong>in front of</strong> the house."</em></p>
                                <p><small>(Ella está <strong>frente a</strong> la casa.)</small></p>
                            </div>
                            <div class="preposicion-item">
                                <h5>Between</h5>
                                <p>En medio de dos objetos o lugares</p>
                                <div class="ejemplo-visual">
                                    <span class="referencia1">📚</span>
                                    <span class="objeto">📝</span>
                                    <span class="referencia2">📚</span>
                                </div>
                                <p><em>"The pen is <strong>between</strong> the books."</em></p>
                                <p><small>(El bolígrafo está <strong>entre</strong> los libros.)</small></p>
                            </div>
                            <div class="preposicion-item">
                                <h5>Next to / Beside</h5>
                                <p>Al lado de algo o alguien</p>
                                <div class="ejemplo-visual">
                                    <span class="referencia">🚶</span>
                                    <span class="objeto">🧍</span>
                                </div>
                                <p><em>"He is <strong>next to</strong> his friend."</em></p>
                                <p><small>(Él está <strong>al lado de</strong> su amigo.)</small></p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="uso-preposiciones">
                        <h4>Usos específicos de las principales preposiciones</h4>
                        <div class="tabla-formacion">
                            <table>
                                <tr>
                                    <th>Preposición</th>
                                    <th>Usos comunes</th>
                                    <th>Ejemplos</th>
                                </tr>
                                <tr>
                                    <td><strong>In</strong></td>
                                    <td>
                                        - En espacios cerrados o delimitados<br>
                                        - En ciudades, países, continentes<br>
                                        - En períodos de tiempo (meses, años, estaciones)
                                    </td>
                                    <td>
                                        - <em>in a box, in a room</em><br>
                                        - <em>in London, in Spain, in Europe</em><br>
                                        - <em>in July, in 2023, in summer</em>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>On</strong></td>
                                    <td>
                                        - Sobre superficies<br>
                                        - En días específicos<br>
                                        - En transporte público de superficie
                                    </td>
                                    <td>
                                        - <em>on the table, on the wall</em><br>
                                        - <em>on Monday, on Christmas Day</em><br>
                                        - <em>on the bus, on the train</em>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>At</strong></td>
                                    <td>
                                        - En puntos específicos<br>
                                        - Para horas específicas<br>
                                        - Para eventos y actividades
                                    </td>
                                    <td>
                                        - <em>at the door, at the bus stop</em><br>
                                        - <em>at 5 o'clock, at midnight</em><br>
                                        - <em>at a concert, at a meeting</em>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        
                        <p><strong>Consejo:</strong> La elección entre <em>in</em>, <em>on</em> y <em>at</em> puede ser confusa. Una regla general es que <em>in</em> se usa para espacios grandes, <em>on</em> para superficies, y <em>at</em> para puntos específicos.</p>
                    </div>
                    
                    <div class="preposiciones-compuestas">
                        <h4>Preposiciones de lugar compuestas</h4>
                        <p>Algunas preposiciones de lugar están formadas por varias palabras:</p>
                        <ul>
                            <li><strong>in front of</strong> (frente a): <em>"The car is <strong>in front of</strong> the garage."</em></li>
                            <li><strong>next to</strong> (junto a): <em>"The library is <strong>next to</strong> the park."</em></li>
                            <li><strong>far from</strong> (lejos de): <em>"The airport is <strong>far from</strong> the city center."</em></li>
                            <li><strong>close to</strong> (cerca de): <em>"Our hotel is <strong>close to</strong> the beach."</em></li>
                            <li><strong>opposite to</strong> (enfrente de): <em>"The bank is <strong>opposite to</strong> the supermarket."</em></li>
                        </ul>
                    </div>
                </div>
            `,
            importancia: `
                <p>Las preposiciones de lugar son fundamentales en el inglés por varias razones:</p>
                <ul>
                    <li>Permiten ubicar objetos y personas en el espacio con precisión</li>
                    <li>Son esenciales para dar y seguir indicaciones o direcciones</li>
                    <li>Ayudan a describir la organización de espacios físicos</li>
                    <li>Facilitan la ubicación espacial en relación con puntos de referencia</li>
                    <li>Son muy frecuentes en conversaciones cotidianas sobre ubicaciones</li>
                    <li>Aparecen constantemente en descripciones de lugares y entornos</li>
                </ul>
                
                <p>Sin el uso correcto de las preposiciones de lugar, sería extremadamente difícil describir dónde se encuentra algo o cómo llegar a un destino, limitando severamente nuestra capacidad de comunicación en situaciones cotidianas.</p>
            `,
            estructura: `
                <h4>Estructura de oraciones con preposiciones de lugar</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Tipo de oración</th>
                            <th>Estructura</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Afirmativa</td>
                            <td>Sujeto + verbo + complemento + preposición + lugar</td>
                            <td>The keys are <strong>on</strong> the table.</td>
                        </tr>
                        <tr>
                            <td>Negativa</td>
                            <td>Sujeto + verbo + not + complemento + preposición + lugar</td>
                            <td>My wallet is <strong>not in</strong> my pocket.</td>
                        </tr>
                        <tr>
                            <td>Interrogativa</td>
                            <td>Verbo auxiliar + sujeto + complemento + preposición + lugar?</td>
                            <td><strong>Is</strong> your car <strong>in</strong> the garage?</td>
                        </tr>
                        <tr>
                            <td>Pregunta con "where"</td>
                            <td>Where + verbo auxiliar + sujeto + complemento?</td>
                            <td><strong>Where is</strong> my phone?</td>
                        </tr>
                        <tr>
                            <td>Respuesta a "where"</td>
                            <td>Pronombre/sujeto + verbo + preposición + lugar</td>
                            <td>It's <strong>under</strong> the sofa.</td>
                        </tr>
                    </tbody>
                </table>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">"The keys are <strong>on</strong> the table."</p>
                        <p class="espanol">Las llaves están <strong>sobre</strong> la mesa.</p>
                        <p class="estructura"><small>Sujeto + verbo to be + preposición + lugar</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"She lives <strong>in</strong> London."</p>
                        <p class="espanol">Ella vive <strong>en</strong> Londres.</p>
                        <p class="estructura"><small>Sujeto + verbo principal + preposición + lugar</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"<strong>Where</strong> is the nearest bank?"</p>
                        <p class="espanol">¿<strong>Dónde</strong> está el banco más cercano?</p>
                        <p class="estructura"><small>Where + verbo to be + sujeto + ?</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"The dog is sleeping <strong>under</strong> the tree."</p>
                        <p class="espanol">El perro está durmiendo <strong>debajo</strong> del árbol.</p>
                        <p class="estructura"><small>Sujeto + verbo + gerundio + preposición + lugar</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"There is a beautiful garden <strong>behind</strong> the house."</p>
                        <p class="espanol">Hay un hermoso jardín <strong>detrás</strong> de la casa.</p>
                        <p class="estructura"><small>There is + sujeto + preposición + lugar</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Para practicar las preposiciones de lugar, describe la ubicación de los objetos a tu alrededor usando diferentes preposiciones. Por ejemplo: "My phone is on the desk", "My keys are in my bag", "The picture is on the wall".</p>
            `,
        },
        "Futuro con 'going to'": {
            descripcion: "Estructura para expresar planes futuros ya decididos y predicciones basadas en evidencias presentes.",
            teoria: `
                <div class="teoria-content">
                    <div class="definicion-seccion">
                        <h4>¿Qué es?</h4>
                        <p>El futuro con <strong>'going to'</strong> es una estructura gramatical que se utiliza para expresar planes futuros ya decididos o predicciones basadas en evidencias visibles en el presente. Es una de las formas más comunes de hablar sobre el futuro en inglés.</p>
                        
                        <p>Esta estructura combina el verbo "to be" en presente con "going to" seguido del verbo principal en infinitivo (sin "to").</p>
                    </div>
                    
                    <div class="usos-seccion">
                        <h4>Usos principales</h4>
                        <ul>
                            <li><strong>Planes y decisiones ya tomadas:</strong> Se usa para hablar de intenciones o planes que ya han sido decididos antes del momento de hablar.
                                <p><em>"I am going to visit my friend tomorrow."</em> (Voy a visitar a mi amigo mañana.)</p>
                                <p><em>"They are going to buy a new car next month."</em> (Van a comprar un coche nuevo el próximo mes.)</p>
                            </li>
                            <li><strong>Predicciones basadas en evidencia presente:</strong> Se utiliza para hacer predicciones cuando hay señales o evidencias visibles que indican que algo va a suceder.
                                <p><em>"Look at those clouds! It's going to rain."</em> (¡Mira esas nubes! Va a llover.)</p>
                                <p><em>"She's going to have a baby."</em> (Ella va a tener un bebé.)</p>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="formacion-seccion">
                        <h4>¿Cómo se forma?</h4>
                        <p>La estructura "going to" se forma con:</p>
                        <ol>
                            <li>El verbo "to be" (am/is/are) conjugado según el sujeto</li>
                            <li>La expresión "going to"</li>
                            <li>El verbo principal en forma base (infinitivo sin "to")</li>
                        </ol>
                        
                        <div class="tabla-formacion">
                            <table>
                                <tr>
                                    <th>Sujeto</th>
                                    <th>Forma afirmativa</th>
                                    <th>Forma negativa</th>
                                    <th>Forma interrogativa</th>
                                </tr>
                                <tr>
                                    <td>I</td>
                                    <td>I <strong>am going to</strong> study<br>I<strong>'m going to</strong> study</td>
                                    <td>I <strong>am not going to</strong> study<br>I<strong>'m not going to</strong> study</td>
                                    <td><strong>Am I going to</strong> study?</td>
                                </tr>
                                <tr>
                                    <td>You</td>
                                    <td>You <strong>are going to</strong> travel<br>You<strong>'re going to</strong> travel</td>
                                    <td>You <strong>are not going to</strong> travel<br>You<strong>'re not going to</strong> travel<br>You <strong>aren't going to</strong> travel</td>
                                    <td><strong>Are you going to</strong> travel?</td>
                                </tr>
                                <tr>
                                    <td>He/She/It</td>
                                    <td>He <strong>is going to</strong> work<br>He<strong>'s going to</strong> work</td>
                                    <td>He <strong>is not going to</strong> work<br>He<strong>'s not going to</strong> work<br>He <strong>isn't going to</strong> work</td>
                                    <td><strong>Is he going to</strong> work?</td>
                                </tr>
                                <tr>
                                    <td>We</td>
                                    <td>We <strong>are going to</strong> play<br>We<strong>'re going to</strong> play</td>
                                    <td>We <strong>are not going to</strong> play<br>We<strong>'re not going to</strong> play<br>We <strong>aren't going to</strong> play</td>
                                    <td><strong>Are we going to</strong> play?</td>
                                </tr>
                                <tr>
                                    <td>They</td>
                                    <td>They <strong>are going to</strong> buy<br>They<strong>'re going to</strong> buy</td>
                                    <td>They <strong>are not going to</strong> buy<br>They<strong>'re not going to</strong> buy<br>They <strong>aren't going to</strong> buy</td>
                                    <td><strong>Are they going to</strong> buy?</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    
                    <div class="diferencia-seccion">
                        <h4>Diferencia con otras formas de futuro</h4>
                        <div class="comparacion">
                            <div class="going-to">
                                <h5>Going to</h5>
                                <p>Para planes <strong>ya decididos</strong> o predicciones con <strong>evidencia presente</strong>.</p>
                                <p><em>"I'm going to paint the house this weekend."</em> (Plan decidido)</p>
                                <p><em>"The sky is dark. It's going to snow."</em> (Evidencia visible)</p>
                            </div>
                            <div class="will">
                                <h5>Will</h5>
                                <p>Para <strong>decisiones espontáneas</strong>, <strong>predicciones generales</strong> o <strong>promesas</strong>.</p>
                                <p><em>"I'll help you with that."</em> (Decisión en el momento)</p>
                                <p><em>"I think it will rain tomorrow."</em> (Predicción general sin evidencia)</p>
                            </div>
                        </div>
                        
                        <div class="comparacion">
                            <div class="present-continuous">
                                <h5>Presente continuo con valor de futuro</h5>
                                <p>Para <strong>planes concretos</strong> con <strong>hora o fecha acordada</strong>.</p>
                                <p><em>"We are meeting at 5 p.m. tomorrow."</em></p>
                                <p><em>"She is flying to Paris on Monday."</em></p>
                            </div>
                            <div class="present-simple">
                                <h5>Presente simple con valor de futuro</h5>
                                <p>Para <strong>horarios</strong> o <strong>eventos programados</strong>.</p>
                                <p><em>"The train leaves at 6:30."</em></p>
                                <p><em>"The new semester starts next week."</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            importancia: `
                <p>Dominar el futuro con "going to" es esencial porque:</p>
                <ul>
                    <li>Es una de las estructuras más comunes para expresar planes e intenciones futuras</li>
                    <li>Permite comunicar de manera clara y precisa acciones que se realizarán en el futuro</li>
                    <li>Ayuda a diferenciar entre distintos tipos de futuro según la intención y contexto</li>
                    <li>Facilita la expresión de predicciones basadas en evidencias presentes</li>
                    <li>Es una de las primeras formas de futuro que se aprende en inglés</li>
                    <li>Se utiliza constantemente en conversaciones cotidianas sobre planes inmediatos y próximos</li>
                </ul>
                
                <p>Sin el manejo adecuado de esta estructura, sería difícil comunicar planes futuros y predicciones, limitando significativamente la fluidez y precisión en la comunicación diaria.</p>
            `,
            estructura: `
                <h4>Estructura de oraciones con "going to"</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Tipo de oración</th>
                            <th>Estructura</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Afirmativa</td>
                            <td>Sujeto + am/is/are + going to + verbo base + complemento</td>
                            <td>We <strong>are going to play</strong> tennis on Saturday.</td>
                        </tr>
                        <tr>
                            <td>Negativa</td>
                            <td>Sujeto + am/is/are + not + going to + verbo base + complemento</td>
                            <td>They <strong>aren't going to attend</strong> the meeting.</td>
                        </tr>
                        <tr>
                            <td>Interrogativa</td>
                            <td>Am/Is/Are + sujeto + going to + verbo base + complemento + ?</td>
                            <td><strong>Is she going to call</strong> you tonight?</td>
                        </tr>
                        <tr>
                            <td>Negativa interrogativa</td>
                            <td>Am/Is/Are + not + sujeto + going to + verbo base + ? <br>o<br> Aren't/Isn't + sujeto + going to + verbo base + ?</td>
                            <td><strong>Isn't he going to join</strong> us for dinner?</td>
                        </tr>
                        <tr>
                            <td>Respuesta corta afirmativa</td>
                            <td>Yes, sujeto + am/is/are.</td>
                            <td>Yes, I am. / Yes, they are.</td>
                        </tr>
                        <tr>
                            <td>Respuesta corta negativa</td>
                            <td>No, sujeto + am/is/are + not. <br>o<br> No, sujeto + aren't/isn't/am not.</td>
                            <td>No, she isn't. / No, we aren't.</td>
                        </tr>
                    </tbody>
                </table>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">"She <strong>is going to travel</strong> next week."</p>
                        <p class="espanol">Ella <strong>va a viajar</strong> la próxima semana.</p>
                        <p class="estructura"><small>Sujeto + is + going to + verbo base + expresión de tiempo</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"I <strong>am not going to study</strong> tonight."</p>
                        <p class="espanol">Yo <strong>no voy a estudiar</strong> esta noche.</p>
                        <p class="estructura"><small>Sujeto + am + not + going to + verbo base + expresión de tiempo</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"<strong>Are they going to buy</strong> a new house?"</p>
                        <p class="espanol">¿<strong>Van a comprar</strong> una casa nueva?</p>
                        <p class="estructura"><small>Are + sujeto + going to + verbo base + complemento + ?</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"Look at those clouds! It <strong>is going to rain</strong>."</p>
                        <p class="espanol">¡Mira esas nubes! <strong>Va a llover</strong>.</p>
                        <p class="estructura"><small>Sujeto + is + going to + verbo base (predicción basada en evidencia)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"<strong>What are you going to do</strong> after graduation?"</p>
                        <p class="espanol">¿<strong>Qué vas a hacer</strong> después de la graduación?</p>
                        <p class="estructura"><small>Palabra interrogativa + are + sujeto + going to + verbo base + ?</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Para practicar, intenta describir tus planes para mañana o el fin de semana utilizando "going to". También puedes hacer predicciones mirando a tu alrededor y buscando evidencias (por ejemplo, si alguien lleva abrigo: "It's going to be cold today").</p>
            `,
        },
        "Presente perfecto": {
            descripcion: "Tiempo verbal que conecta el pasado con el presente para hablar de experiencias, cambios y situaciones incompletas.",
            teoria: `
                <div class="teoria-content">
                    <div class="definicion-seccion">
                        <h4>¿Qué es?</h4>
                        <p>El <strong>presente perfecto</strong> es un tiempo verbal que establece una conexión entre el pasado y el presente. A diferencia del pasado simple, que habla de acciones completamente terminadas en el pasado, el presente perfecto se refiere a acciones o situaciones que ocurrieron en el pasado pero tienen relevancia o conexión con el presente.</p>
                        
                        <p>Este tiempo verbal es especialmente importante porque se usa de manera muy diferente al español, donde frecuentemente usaríamos el presente o el pretérito perfecto.</p>
                    </div>
                    
                    <div class="usos-seccion">
                        <h4>Usos principales</h4>
                        <ul>
                            <li><strong>Experiencias de vida:</strong> Acciones o experiencias ocurridas en algún momento del pasado, sin especificar exactamente cuándo.
                                <p><em>"I <strong>have visited</strong> Paris three times."</em> (He visitado París tres veces.)</p>
                                <p><em>"She <strong>has never eaten</strong> sushi."</em> (Ella nunca ha comido sushi.)</p>
                            </li>
                            <li><strong>Resultados presentes de acciones pasadas:</strong> Acciones pasadas cuyo resultado es visible o relevante en el presente.
                                <p><em>"I <strong>have lost</strong> my keys."</em> (He perdido mis llaves - y aún no las encuentro.)</p>
                                <p><em>"She <strong>has broken</strong> her leg."</em> (Ella se ha roto la pierna - y aún está lesionada.)</p>
                            </li>
                            <li><strong>Acciones recientes:</strong> Con adverbios como "just", "recently", "lately".
                                <p><em>"We <strong>have just finished</strong> dinner."</em> (Acabamos de terminar de cenar.)</p>
                                <p><em>"I <strong>have recently changed</strong> my job."</em> (Recientemente he cambiado de trabajo.)</p>
                            </li>
                            <li><strong>Situaciones que comenzaron en el pasado y continúan en el presente:</strong> Con "for" (durante) y "since" (desde).
                                <p><em>"They <strong>have lived</strong> in Madrid for ten years."</em> (Han vivido en Madrid durante diez años - y siguen viviendo allí.)</p>
                                <p><em>"I <strong>have studied</strong> English since 2015."</em> (He estudiado inglés desde 2015 - y sigo estudiándolo.)</p>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="formacion-seccion">
                        <h4>¿Cómo se forma?</h4>
                        <p>El presente perfecto se forma con dos elementos:</p>
                        <ol>
                            <li>El auxiliar "have/has" (presente del verbo "have")</li>
                            <li>El participio pasado del verbo principal</li>
                        </ol>
                        
                        <div class="tabla-formacion">
                            <table>
                                <tr>
                                    <th>Sujeto</th>
                                    <th>Auxiliar</th>
                                    <th>Participio pasado</th>
                                    <th>Forma completa</th>
                                </tr>
                                <tr>
                                    <td>I</td>
                                    <td>have</td>
                                    <td>worked</td>
                                    <td>I <strong>have worked</strong></td>
                                </tr>
                                <tr>
                                    <td>You</td>
                                    <td>have</td>
                                    <td>seen</td>
                                    <td>You <strong>have seen</strong></td>
                                </tr>
                                <tr>
                                    <td>He/She/It</td>
                                    <td>has</td>
                                    <td>gone</td>
                                    <td>She <strong>has gone</strong></td>
                                </tr>
                                <tr>
                                    <td>We</td>
                                    <td>have</td>
                                    <td>been</td>
                                    <td>We <strong>have been</strong></td>
                                </tr>
                                <tr>
                                    <td>They</td>
                                    <td>have</td>
                                    <td>done</td>
                                    <td>They <strong>have done</strong></td>
                                </tr>
                            </table>
                        </div>
                        
                        <div class="participios-seccion">
                            <h5>Participios pasados</h5>
                            <p><strong>Verbos regulares:</strong> Se forma añadiendo <strong>-ed</strong> al verbo base (igual que el pasado simple).</p>
                            <ul>
                                <li>work → work<strong>ed</strong></li>
                                <li>play → play<strong>ed</strong></li>
                                <li>listen → listen<strong>ed</strong></li>
                            </ul>
                            <p><strong>Verbos irregulares:</strong> Tienen formas específicas que deben memorizarse. Algunos ejemplos comunes:</p>
                            <div class="tabla-formacion">
                                <table>
                                    <tr>
                                        <th>Infinitivo</th>
                                        <th>Pasado simple</th>
                                        <th>Participio pasado</th>
                                    </tr>
                                    <tr>
                                        <td>go</td>
                                        <td>went</td>
                                        <td><strong>gone</strong></td>
                                    </tr>
                                    <tr>
                                        <td>see</td>
                                        <td>saw</td>
                                        <td><strong>seen</strong></td>
                                    </tr>
                                    <tr>
                                        <td>do</td>
                                        <td>did</td>
                                        <td><strong>done</strong></td>
                                    </tr>
                                    <tr>
                                        <td>be</td>
                                        <td>was/were</td>
                                        <td><strong>been</strong></td>
                                    </tr>
                                    <tr>
                                        <td>have</td>
                                        <td>had</td>
                                        <td><strong>had</strong></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div class="expresiones-seccion">
                        <h4>Expresiones temporales comunes</h4>
                        <p>El presente perfecto se usa frecuentemente con estas expresiones temporales:</p>
                        <div class="tabla-formacion">
                            <table>
                                <tr>
                                    <th>Expresión</th>
                                    <th>Uso</th>
                                    <th>Ejemplo</th>
                                </tr>
                                <tr>
                                    <td>ever</td>
                                    <td>Para preguntar sobre experiencias</td>
                                    <td>Have you <strong>ever</strong> been to Japan?</td>
                                </tr>
                                <tr>
                                    <td>never</td>
                                    <td>Para negar experiencias</td>
                                    <td>I have <strong>never</strong> seen snow.</td>
                                </tr>
                                <tr>
                                    <td>just</td>
                                    <td>Para acciones recién completadas</td>
                                    <td>We have <strong>just</strong> arrived.</td>
                                </tr>
                                <tr>
                                    <td>already</td>
                                    <td>Para acciones completadas antes de lo esperado</td>
                                    <td>She has <strong>already</strong> finished her homework.</td>
                                </tr>
                                <tr>
                                    <td>yet</td>
                                    <td>Para preguntar o negar acciones que se esperaban (se usa al final de la oración)</td>
                                    <td>Have you done your homework <strong>yet</strong>?<br>I haven't called him <strong>yet</strong>.</td>
                                </tr>
                                <tr>
                                    <td>for</td>
                                    <td>Para indicar duración (durante)</td>
                                    <td>They have lived here <strong>for</strong> 5 years.</td>
                                </tr>
                                <tr>
                                    <td>since</td>
                                    <td>Para indicar el punto de inicio (desde)</td>
                                    <td>I have studied English <strong>since</strong> 2018.</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    
                    <div class="diferencia-seccion">
                        <h4>Diferencia con el pasado simple</h4>
                        <div class="comparacion">
                            <div class="presente-perfecto">
                                <h5>Presente perfecto</h5>
                                <p>Conexión con el presente, sin especificar cuándo ocurrió exactamente.</p>
                                <p><em>"I <strong>have visited</strong> Paris."</em><br>(He visitado París - en algún momento de mi vida.)</p>
                            </div>
                            <div class="pasado-simple">
                                <h5>Pasado simple</h5>
                                <p>Acciones completamente terminadas en un momento específico del pasado.</p>
                                <p><em>"I <strong>visited</strong> Paris last summer."</em><br>(Visité París el verano pasado - momento específico.)</p>
                            </div>
                        </div>
                        <p><strong>Nota importante:</strong> Cuando mencionamos un tiempo específico del pasado (yesterday, last week, in 2010, etc.), debemos usar el pasado simple, no el presente perfecto.</p>
                    </div>
                </div>
            `,
            importancia: `
                <p>El presente perfecto es un tiempo verbal fundamental en inglés por varias razones:</p>
                <ul>
                    <li>Permite expresar experiencias de vida y logros sin necesidad de especificar cuándo ocurrieron</li>
                    <li>Es esencial para hablar de situaciones que comenzaron en el pasado y continúan hasta el presente</li>
                    <li>Ayuda a comunicar resultados presentes de acciones pasadas</li>
                    <li>Es uno de los tiempos verbales que más diferencias tiene con el español, lo que lo hace crucial para estudiantes hispanohablantes</li>
                    <li>Se usa frecuentemente en conversaciones cotidianas sobre experiencias personales</li>
                    <li>Aparece constantemente en entrevistas de trabajo, conversaciones sociales y al hablar de noticias recientes</li>
                </ul>
                
                <p>Dominar el presente perfecto es un paso importante para avanzar del nivel básico al intermedio en inglés, ya que permite expresar ideas más sofisticadas sobre experiencias y situaciones que conectan el pasado con el presente.</p>
            `,
            estructura: `
                <h4>Estructura del presente perfecto</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Tipo de oración</th>
                            <th>Estructura</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Afirmativa</td>
                            <td>Sujeto + have/has + participio pasado + complemento</td>
                            <td>I <strong>have finished</strong> my homework.</td>
                        </tr>
                        <tr>
                            <td>Negativa</td>
                            <td>Sujeto + have/has + not + participio pasado + complemento</td>
                            <td>She <strong>hasn't seen</strong> that movie.</td>
                        </tr>
                        <tr>
                            <td>Interrogativa</td>
                            <td>Have/Has + sujeto + participio pasado + complemento + ?</td>
                            <td><strong>Have you visited</strong> London?</td>
                        </tr>
                        <tr>
                            <td>Negativa interrogativa</td>
                            <td>Haven't/Hasn't + sujeto + participio pasado + ?</td>
                            <td><strong>Haven't they received</strong> our email?</td>
                        </tr>
                        <tr>
                            <td>Con expresiones de tiempo</td>
                            <td>Sujeto + have/has + participio pasado + for/since + período</td>
                            <td>We <strong>have lived here for</strong> ten years.<br>They <strong>have worked there since</strong> 2015.</td>
                        </tr>
                    </tbody>
                </table>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">"I <strong>have traveled</strong> to many countries in Europe."</p>
                        <p class="espanol">He viajado a muchos países en Europa.</p>
                        <p class="estructura"><small>Sujeto + have + participio pasado + complemento (experiencia)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"She <strong>has lived</strong> in Barcelona for five years."</p>
                        <p class="espanol">Ella ha vivido en Barcelona durante cinco años (y sigue viviendo allí).</p>
                        <p class="estructura"><small>Sujeto + has + participio pasado + complemento + for + período (situación continua)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"<strong>Have you ever seen</strong> a shooting star?"</p>
                        <p class="espanol">¿Has visto alguna vez una estrella fugaz?</p>
                        <p class="estructura"><small>Have + sujeto + ever + participio pasado + complemento + ? (pregunta sobre experiencia)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"They <strong>haven't finished</strong> their project yet."</p>
                        <p class="espanol">Todavía no han terminado su proyecto.</p>
                        <p class="estructura"><small>Sujeto + haven't + participio pasado + complemento + yet (negación de acción esperada)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"I <strong>have just received</strong> an important email from my boss."</p>
                        <p class="espanol">Acabo de recibir un correo importante de mi jefe.</p>
                        <p class="estructura"><small>Sujeto + have + just + participio pasado + complemento (acción reciente)</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Para practicar el presente perfecto, haz una lista de experiencias que has tenido en tu vida usando "I have..." y una lista de cosas que nunca has hecho usando "I have never...". También puedes describir cuánto tiempo llevas haciendo diferentes actividades usando "I have... for/since...".</p>
            `,
        },
        "Pasado continuo": {
            descripcion: "Tiempo verbal utilizado para expresar acciones que estaban en progreso en un momento específico del pasado.",
            teoria: `
                <div class="teoria-content">
                    <div class="definicion-seccion">
                        <h4>¿Qué es?</h4>
                        <p>El <strong>pasado continuo</strong> o <strong>pasado progresivo</strong> es un tiempo verbal que se utiliza para describir acciones que estaban en desarrollo o progreso en un momento determinado del pasado. A diferencia del pasado simple, que describe acciones completadas, el pasado continuo se enfoca en el proceso o la continuidad de una acción.</p>
                        
                        <p>Este tiempo verbal nos permite crear una imagen mental de lo que estaba sucediendo en un momento específico del pasado.</p>
                    </div>
                    
                    <div class="usos-seccion">
                        <h4>Usos principales</h4>
                        <ul>
                            <li><strong>Acciones en progreso en un momento específico del pasado:</strong>
                                <p><em>"At 8 o'clock last night, I <strong>was studying</strong> for my exam."</em> (A las 8 de la noche de ayer, estaba estudiando para mi examen.)</p>
                                <p><em>"When you called, she <strong>was taking</strong> a shower."</em> (Cuando llamaste, ella estaba duchándose.)</p>
                            </li>
                            <li><strong>Dos acciones simultáneas en el pasado:</strong>
                                <p><em>"While I <strong>was cooking</strong>, my wife <strong>was watching</strong> TV."</em> (Mientras yo estaba cocinando, mi esposa estaba viendo la televisión.)</p>
                            </li>
                            <li><strong>Acción en progreso interrumpida por otra acción:</strong> Combinación con pasado simple.
                                <p><em>"I <strong>was reading</strong> when the phone <strong>rang</strong>."</em> (Estaba leyendo cuando sonó el teléfono.)</p>
                                <p><em>"While we <strong>were having</strong> dinner, someone <strong>knocked</strong> on the door."</em> (Mientras estábamos cenando, alguien llamó a la puerta.)</p>
                            </li>
                            <li><strong>Para describir el ambiente o escenario:</strong> Crear el contexto para una historia.
                                <p><em>"It <strong>was raining</strong> heavily, and the wind <strong>was blowing</strong> through the trees."</em> (Estaba lloviendo intensamente, y el viento soplaba entre los árboles.)</p>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="formacion-seccion">
                        <h4>¿Cómo se forma?</h4>
                        <p>El pasado continuo se forma con dos elementos:</p>
                        <ol>
                            <li>El pasado del verbo "to be" (was/were)</li>
                            <li>El gerundio del verbo principal (verbo + -ing)</li>
                        </ol>
                        
                        <div class="tabla-formacion">
                            <table>
                                <tr>
                                    <th>Sujeto</th>
                                    <th>Verbo to be (pasado)</th>
                                    <th>Gerundio</th>
                                    <th>Forma completa</th>
                                </tr>
                                <tr>
                                    <td>I</td>
                                    <td>was</td>
                                    <td>working</td>
                                    <td>I <strong>was working</strong></td>
                                </tr>
                                <tr>
                                    <td>You</td>
                                    <td>were</td>
                                    <td>sleeping</td>
                                    <td>You <strong>were sleeping</strong></td>
                                </tr>
                                <tr>
                                    <td>He/She/It</td>
                                    <td>was</td>
                                    <td>reading</td>
                                    <td>She <strong>was reading</strong></td>
                                </tr>
                                <tr>
                                    <td>We</td>
                                    <td>were</td>
                                    <td>playing</td>
                                    <td>We <strong>were playing</strong></td>
                                </tr>
                                <tr>
                                    <td>They</td>
                                    <td>were</td>
                                    <td>studying</td>
                                    <td>They <strong>were studying</strong></td>
                                </tr>
                            </table>
                        </div>
                        
                        <div class="gerundio-seccion">
                            <h5>Reglas para formar el gerundio (-ing)</h5>
                            <ul>
                                <li>En general, se añade <strong>-ing</strong> al verbo base: <em>work → work<strong>ing</strong></em></li>
                                <li>Si el verbo termina en <strong>-e</strong>, se elimina la -e y se añade -ing: <em>write → writ<strong>ing</strong></em></li>
                                <li>Si el verbo es monosílabo y termina en consonante precedida de vocal, se duplica la consonante final: <em>run → run<strong>ning</strong></em></li>
                                <li>Si el verbo termina en <strong>-ie</strong>, se cambia a <strong>-y</strong> antes de añadir -ing: <em>lie → ly<strong>ing</strong>, die → dy<strong>ing</strong></em></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="estructuras-combinadas">
                        <h4>Combinación con otras estructuras</h4>
                        <p>El pasado continuo frecuentemente se combina con otras estructuras para contar historias:</p>
                        
                        <div class="tabla-formacion">
                            <table>
                                <tr>
                                    <th>Estructura</th>
                                    <th>Uso</th>
                                    <th>Ejemplo</th>
                                </tr>
                                <tr>
                                    <td>Pasado continuo + when + pasado simple</td>
                                    <td>Acción en progreso interrumpida por otra</td>
                                    <td>I <strong>was sleeping when</strong> the earthquake <strong>happened</strong>.</td>
                                </tr>
                                <tr>
                                    <td>Pasado simple + while + pasado continuo</td>
                                    <td>Acción que ocurre durante otra en progreso</td>
                                    <td>The lights <strong>went out while</strong> we <strong>were watching</strong> a movie.</td>
                                </tr>
                                <tr>
                                    <td>While + pasado continuo + pasado continuo</td>
                                    <td>Dos acciones simultáneas en el pasado</td>
                                    <td><strong>While</strong> I <strong>was cooking</strong>, my children <strong>were doing</strong> their homework.</td>
                                </tr>
                                <tr>
                                    <td>When + pasado simple + pasado continuo</td>
                                    <td>Estado en curso en un momento específico</td>
                                    <td><strong>When</strong> I <strong>arrived</strong>, they <strong>were having</strong> lunch.</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    
                    <div class="diferencia-seccion">
                        <h4>Diferencia con el pasado simple</h4>
                        <div class="comparacion">
                            <div class="pasado-continuo">
                                <h5>Pasado continuo</h5>
                                <p>Acción <strong>en proceso</strong> en el pasado, enfatiza la <strong>duración</strong>.</p>
                                <p><em>"I <strong>was watching</strong> TV at 9 PM."</em><br>(Estaba viendo TV a las 9 PM - acción en progreso.)</p>
                            </div>
                            <div class="pasado-simple">
                                <h5>Pasado simple</h5>
                                <p>Acción <strong>completa</strong> en el pasado, enfatiza el <strong>hecho</strong> o <strong>resultado</strong> o <strong>momento</strong> específico.</p>
                                <p><em>"I <strong>watched</strong> TV last night."</em><br>(Vi la televisión anoche - acción completa.)</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            importancia: `
                <p>El pasado continuo es un tiempo verbal importante en inglés por varias razones:</p>
                <ul>
                    <li>Permite describir con precisión situaciones que estaban en desarrollo en un momento del pasado</li>
                    <li>Es esencial para narrar historias de manera vívida y dinámica</li>
                    <li>Ayuda a establecer el contexto o escenario en una narración</li>
                    <li>Es fundamental para explicar qué estaba sucediendo cuando ocurrió otro evento</li>
                    <li>Facilita la descripción de acciones simultáneas en el pasado</li>
                    <li>Contribuye a crear imágenes mentales más detalladas en una narrativa</li>
                </ul>
                
                <p>Dominar el pasado continuo es importante para poder narrar experiencias pasadas con mayor riqueza y detalle, añadiendo dimensión a tus historias y anécdotas en inglés.</p>
            `,
            estructura: `
                <h4>Estructura del pasado continuo</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Tipo de oración</th>
                            <th>Estructura</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Afirmativa</td>
                            <td>Sujeto + was/were + verbo-ing + complemento</td>
                            <td>They <strong>were playing</strong> football.</td>
                        </tr>
                        <tr>
                            <td>Negativa</td>
                            <td>Sujeto + was/were + not + verbo-ing + complemento</td>
                            <td>He <strong>wasn't studying</strong> when I called.</td>
                        </tr>
                        <tr>
                            <td>Interrogativa</td>
                            <td>Was/Were + sujeto + verbo-ing + complemento + ?</td>
                            <td><strong>Were you sleeping</strong> when I called?</td>
                        </tr>
                        <tr>
                            <td>Negativa interrogativa</td>
                            <td>Wasn't/Weren't + sujeto + verbo-ing + ?</td>
                            <td><strong>Wasn't she working</strong> yesterday?</td>
                        </tr>
                        <tr>
                            <td>Con expresiones de tiempo</td>
                            <td>Sujeto + was/were + verbo-ing + at/when/while + momento</td>
                            <td>I <strong>was studying</strong> at 10 PM.<br>She <strong>was sleeping</strong> when the phone rang.</td>
                        </tr>
                    </tbody>
                </table>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">"I <strong>was having</strong> breakfast when you called."</p>
                        <p class="espanol">Estaba desayunando cuando llamaste.</p>
                        <p class="estructura"><small>Sujeto + was + verbo-ing + complemento + when + pasado simple</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"What <strong>were you doing</strong> at 8 o'clock last night?"</p>
                        <p class="espanol">¿Qué estabas haciendo a las 8 de la noche de ayer?</p>
                        <p class="estructura"><small>Interrogativo + were + sujeto + verbo-ing + expresión de tiempo + ?</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"While she <strong>was cooking</strong>, her husband <strong>was cleaning</strong> the house."</p>
                        <p class="espanol">Mientras ella estaba cocinando, su esposo estaba limpiando la casa.</p>
                        <p class="estructura"><small>While + sujeto + was + verbo-ing + , + sujeto + was + verbo-ing</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"They <strong>weren't listening</strong> to the teacher during the class."</p>
                        <p class="espanol">No estaban escuchando al profesor durante la clase.</p>
                        <p class="estructura"><small>Sujeto + weren't + verbo-ing + complemento</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"It <strong>was raining</strong> all day yesterday."</p>
                        <p class="espanol">Estuvo lloviendo todo el día ayer.</p>
                        <p class="estructura"><small>Sujeto + was + verbo-ing + expresión de tiempo</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Para practicar el pasado continuo, intenta describir qué estabas haciendo en un momento específico del pasado, por ejemplo, "Yesterday at 5 PM, I was..." o cuenta una historia sobre algo que te interrumpió mientras hacías otra actividad.</p>
            `,
        },
        "Condicionales tipo 1 y 2": {
            descripcion: "Estructuras gramaticales para expresar situaciones hipotéticas reales y posibles en el presente y futuro, o imaginarias en el presente.",
            teoria: `
                <div class="teoria-content">
                    <div class="definicion-seccion">
                        <h4>¿Qué son?</h4>
                        <p>Las <strong>oraciones condicionales</strong> se utilizan para expresar situaciones que dependen de una condición. En inglés existen cuatro tipos principales de condicionales, pero en el nivel B1 nos concentraremos en los dos primeros tipos:</p>
                        <ul>
                            <li><strong>Condicional tipo 1:</strong> Para situaciones reales y posibles en el presente o futuro.</li>
                            <li><strong>Condicional tipo 2:</strong> Para situaciones imaginarias, improbables o imposibles en el presente.</li>
                        </ul>
                        <p>Estas estructuras son fundamentales para expresar consecuencias que dependen de ciertas condiciones, desde situaciones muy probables hasta hipótesis irreales.</p>
                    </div>
                    
                    <div class="condicional-tipo-1">
                        <h4>Condicional tipo 1</h4>
                        <p>El condicional tipo 1 se refiere a una condición que es <strong>posible y probable</strong> en el presente o futuro. Esta condición podría cumplirse y, si lo hace, ocurrirá el resultado mencionado.</p>
                        
                        <div class="usos-seccion">
                            <h5>Usos del condicional tipo 1</h5>
                            <ul>
                                <li><strong>Situaciones reales que pueden ocurrir:</strong>
                                    <p><em>"If it rains tomorrow, I <strong>will stay</strong> at home."</em> (Si llueve mañana, me quedaré en casa.)</p>
                                </li>
                                <li><strong>Ofrecer consejos o advertir sobre consecuencias:</strong>
                                    <p><em>"If you <strong>don't study</strong>, you <strong>will fail</strong> the exam."</em> (Si no estudias, reprobarás el examen.)</p>
                                </li>
                                <li><strong>Hablar de situaciones habituales (usando presente simple en ambas partes):</strong>
                                    <p><em>"If I <strong>feel</strong> tired, I <strong>drink</strong> coffee."</em> (Si me siento cansado, bebo café.)</p>
                                </li>
                                <li><strong>Establecer reglas o instrucciones:</strong>
                                    <p><em>"If you <strong>heat</strong> water to 100°C, it <strong>boils</strong>."</em> (Si calientas agua a 100°C, hierve.)</p>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="estructura-interna">
                            <h5>Estructura del condicional tipo 1</h5>
                            <div class="tabla-formacion">
                                <table>
                                    <tr>
                                        <th>Cláusula condicional (if)</th>
                                        <th>Cláusula principal (resultado)</th>
                                        <th>Ejemplo completo</th>
                                    </tr>
                                    <tr>
                                        <td><strong>If + presente simple</strong></td>
                                        <td><strong>will/won't + verbo base</strong></td>
                                        <td><em>If she <strong>studies</strong>, she <strong>will pass</strong> the test.</em></td>
                                    </tr>
                                    <tr>
                                        <td><strong>If + presente simple</strong></td>
                                        <td><strong>can/may/should/must + verbo base</strong></td>
                                        <td><em>If you <strong>have</strong> time, you <strong>can visit</strong> the museum.</em></td>
                                    </tr>
                                    <tr>
                                        <td><strong>If + presente simple</strong></td>
                                        <td><strong>imperativo</strong></td>
                                        <td><em>If you <strong>see</strong> John, <strong>tell</strong> him to call me.</em></td>
                                    </tr>
                                    <tr>
                                        <td><strong>If + presente simple</strong></td>
                                        <td><strong>presente simple</strong> (para verdades generales)</td>
                                        <td><em>If water <strong>freezes</strong>, it <strong>expands</strong>.</em></td>
                                    </tr>
                                </table>
                            </div>
                            <p><strong>Nota:</strong> El orden de las cláusulas puede invertirse. Cuando la cláusula "if" va primero, se usa una coma para separar las cláusulas. Cuando la cláusula principal va primero, no se necesita coma.</p>
                            <ul>
                                <li><em>"If you call me, I will help you."</em> (con coma)</li>
                                <li><em>"I will help you if you call me."</em> (sin coma)</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="condicional-tipo-2">
                        <h4>Condicional tipo 2</h4>
                        <p>El condicional tipo 2 se refiere a una condición <strong>hipotética, improbable o imposible</strong> en el presente o futuro. La situación es imaginaria o contraria a la realidad actual.</p>
                        
                        <div class="usos-seccion">
                            <h5>Usos del condicional tipo 2</h5>
                            <ul>
                                <li><strong>Situaciones imaginarias o improbables:</strong>
                                    <p><em>"If I <strong>won</strong> the lottery, I <strong>would travel</strong> around the world."</em> (Si ganara la lotería, viajaría por todo el mundo.)</p>
                                </li>
                                <li><strong>Consejos de manera más cortés usando "if I were you":</strong>
                                    <p><em>"If I <strong>were</strong> you, I <strong>would apply</strong> for that job."</em> (Si yo fuera tú, solicitaría ese trabajo.)</p>
                                </li>
                                <li><strong>Situaciones contrarias a la realidad presente:</strong>
                                    <p><em>"If he <strong>had</strong> more time, he <strong>would learn</strong> Japanese."</em> (Si él tuviera más tiempo, aprendería japonés - pero no tiene tiempo.)</p>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="estructura-interna">
                            <h5>Estructura del condicional tipo 2</h5>
                            <div class="tabla-formacion">
                                <table>
                                    <tr>
                                        <th>Cláusula condicional (if)</th>
                                        <th>Cláusula principal (resultado)</th>
                                        <th>Ejemplo completo</th>
                                    </tr>
                                    <tr>
                                        <td><strong>If + pasado simple</strong></td>
                                        <td><strong>would/wouldn't + verbo base</strong></td>
                                        <td><em>If I <strong>had</strong> money, I <strong>would buy</strong> a new car.</em></td>
                                    </tr>
                                    <tr>
                                        <td><strong>If + pasado simple</strong></td>
                                        <td><strong>could/might + verbo base</strong></td>
                                        <td><em>If we <strong>left</strong> now, we <strong>could arrive</strong> before dark.</em></td>
                                    </tr>
                                </table>
                            </div>
                            <p><strong>Nota especial sobre "were":</strong> Con el verbo "to be" en la primera y tercera persona singular, tradicionalmente se usa "were" en lugar de "was" en el condicional tipo 2, aunque en el inglés moderno también se acepta "was".</p>
                            <ul>
                                <li><em>"If I <strong>were</strong> rich, I would buy a mansion."</em> (forma tradicional)</li>
                                <li><em>"If I <strong>was</strong> rich, I would buy a mansion."</em> (también aceptado en inglés informal)</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="diferencia-seccion">
                        <h4>Diferencia entre condicionales tipo 1 y tipo 2</h4>
                        <div class="comparacion">
                            <div class="condicional-1">
                                <h5>Condicional tipo 1</h5>
                                <p>Situaciones <strong>reales y posibles</strong> en el presente o futuro.</p>
                                <p><em>"If it <strong>rains</strong> tomorrow, we <strong>will cancel</strong> the picnic."</em><br>(La lluvia es posible, y podría ocurrir realmente.)</p>
                            </div>
                            <div class="condicional-2">
                                <h5>Condicional tipo 2</h5>
                                <p>Situaciones <strong>imaginarias, improbables o imposibles</strong> en el presente.</p>
                                <p><em>"If I <strong>had</strong> wings, I <strong>would fly</strong> to the moon."</em><br>(Tener alas es imposible, es una situación imaginaria.)</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="variaciones-seccion">
                        <h4>Variaciones y expresiones alternativas</h4>
                        <p>Existen algunas variaciones y expresiones alternativas para las condicionales:</p>
                        <div class="tabla-formacion">
                            <table>
                                <tr>
                                    <th>Expresión</th>
                                    <th>Uso</th>
                                    <th>Ejemplo</th>
                                </tr>
                                <tr>
                                    <td>Unless</td>
                                    <td>= If not (a menos que)</td>
                                    <td><em>"<strong>Unless</strong> you hurry, you will miss the train."</em><br>(= If you don't hurry...)</td>
                                </tr>
                                <tr>
                                    <td>As long as / Provided that</td>
                                    <td>= Solo si (condición necesaria)</td>
                                    <td><em>"You can borrow my car <strong>as long as</strong> you drive carefully."</em></td>
                                </tr>
                                <tr>
                                    <td>Even if</td>
                                    <td>= Incluso si</td>
                                    <td><em>"<strong>Even if</strong> it rains, the match will still take place."</em></td>
                                </tr>
                                <tr>
                                    <td>Otherwise</td>
                                    <td>= De lo contrario</td>
                                    <td><em>"Hurry up, <strong>otherwise</strong> you'll be late."</em></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            `,
            importancia: `
                <p>Las oraciones condicionales tipo 1 y 2 son estructuras fundamentales en inglés por varias razones:</p>
                <ul>
                    <li>Permiten expresar relaciones de causa-efecto y consecuencias de distintas acciones</li>
                    <li>Son esenciales para hablar de posibilidades futuras y hacer predicciones</li>
                    <li>Ayudan a expresar situaciones hipotéticas y contrastar con la realidad</li>
                    <li>Facilitan la expresión de deseos y situaciones imaginarias</li>
                    <li>Son muy útiles para dar consejos y advertencias</li>
                    <li>Aparecen constantemente en conversaciones cotidianas, negociaciones y textos argumentativos</li>
                </ul>
                
                <p>Dominar estas estructuras condicionales permite expresar un rango mucho más amplio de ideas, desde planes contingentes y posibilidades reales hasta sueños y situaciones imaginarias, enriqueciendo significativamente la capacidad de comunicación en inglés.</p>
            `,
            estructura: `
                <h4>Estructura de las oraciones condicionales</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Condición (if)</th>
                            <th>Resultado</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tipo 1<br>(Real - posible)</td>
                            <td>If + presente simple</td>
                            <td>will/can/may/must + verbo base</td>
                            <td>If you <strong>study hard</strong>, you <strong>will pass</strong> the exam.</td>
                        </tr>
                        <tr>
                            <td>Tipo 1<br>(Hábitos)</td>
                            <td>If + presente simple</td>
                            <td>presente simple</td>
                            <td>If I <strong>feel</strong> tired, I <strong>take</strong> a nap.</td>
                        </tr>
                        <tr>
                            <td>Tipo 2<br>(Irreal - presente)</td>
                            <td>If + pasado simple</td>
                            <td>would/could/might + verbo base</td>
                            <td>If I <strong>had</strong> more time, I <strong>would learn</strong> Chinese.</td>
                        </tr>
                        <tr>
                            <td>Tipo 2<br>(Consejo)</td>
                            <td>If I were you</td>
                            <td>would + verbo base</td>
                            <td>If I <strong>were you</strong>, I <strong>would tell</strong> her the truth.</td>
                        </tr>
                    </tbody>
                </table>
                
                <p><strong>Puntuación:</strong> Cuando la cláusula condicional va primero, usamos coma. Cuando va al final, no se usa coma.</p>
                <ul>
                    <li><em>If it rains, we will stay home.</em> (con coma)</li>
                    <li><em>We will stay home if it rains.</em> (sin coma)</li>
                </ul>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">"If you <strong>miss</strong> the bus, I <strong>will drive</strong> you to work."</p>
                        <p class="espanol">Si pierdes el autobús, te llevaré al trabajo en coche.</p>
                        <p class="estructura"><small>If + presente simple + sujeto + will + verbo base (condicional tipo 1)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"I <strong>would learn</strong> French if I <strong>had</strong> more free time."</p>
                        <p class="espanol">Aprendería francés si tuviera más tiempo libre.</p>
                        <p class="estructura"><small>Sujeto + would + verbo base + if + sujeto + pasado simple (condicional tipo 2)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"If I <strong>were</strong> the president, I <strong>would reduce</strong> taxes."</p>
                        <p class="espanol">Si yo fuera el presidente, reduciría los impuestos.</p>
                        <p class="estructura"><small>If + sujeto + were + complemento + sujeto + would + verbo base (condicional tipo 2)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"<strong>Unless</strong> you <strong>apologize</strong>, I <strong>won't forgive</strong> you."</p>
                        <p class="espanol">A menos que te disculpes, no te perdonaré.</p>
                        <p class="estructura"><small>Unless + sujeto + presente simple + sujeto + won't + verbo base (condicional tipo 1)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"If the weather <strong>is</strong> nice tomorrow, we <strong>can go</strong> to the beach."</p>
                        <p class="espanol">Si hace buen tiempo mañana, podemos ir a la playa.</p>
                        <p class="estructura"><small>If + sujeto + presente simple + sujeto + can + verbo base (condicional tipo 1)</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Para practicar los condicionales, intenta completar frases como "If I won a million dollars, I would..." o "If it rains tomorrow, I will...". También puedes dar consejos usando "If I were you, I would...".</p>
            `,
        },
        "Verbos modales": {
            descripcion: "Verbos auxiliares especiales que se utilizan para expresar habilidad, posibilidad, permiso, obligación, prohibición y consejos.",
            teoria: `
                <div class="teoria-content">
                    <div class="definicion-seccion">
                        <h4>¿Qué son?</h4>
                        <p>Los <strong>verbos modales</strong> son verbos auxiliares especiales que se utilizan junto con el verbo principal para expresar diferentes significados como habilidad, posibilidad, permiso, obligación, prohibición, consejos y deducciones lógicas.</p>
                        
                        <p>A diferencia de los verbos normales, los verbos modales tienen características especiales:</p>
                        <ul>
                            <li>No cambian su forma según el sujeto (no añaden -s en tercera persona singular)</li>
                            <li>No necesitan el auxiliar "do/does/did" para formar preguntas o negaciones</li>
                            <li>Siempre van seguidos del verbo principal en su forma básica (sin "to")</li>
                            <li>Algunos no tienen todas las formas verbales (infinitivo, gerundio, participio)</li>
                        </ul>
                    </div>
                    
                    <div class="modales-principales">
                        <h4>Principales verbos modales y sus usos</h4>
                        
                        <div class="modal-group">
                            <h5>Can / Could</h5>
                            <div class="tabla-formacion">
                                <table>
                                    <tr>
                                        <th>Uso</th>
                                        <th>Explicación</th>
                                        <th>Ejemplo</th>
                                    </tr>
                                    <tr>
                                        <td>Habilidad (presente)</td>
                                        <td>Capacidad de hacer algo en el presente</td>
                                        <td><em>"She <strong>can</strong> speak three languages."</em><br>(Ella puede hablar tres idiomas.)</td>
                                    </tr>
                                    <tr>
                                        <td>Habilidad (pasado)</td>
                                        <td>Capacidad de hacer algo en el pasado</td>
                                        <td><em>"He <strong>could</strong> swim when he was five."</em><br>(Él podía nadar cuando tenía cinco años.)</td>
                                    </tr>
                                    <tr>
                                        <td>Permiso</td>
                                        <td>Pedir o dar permiso (could es más formal)</td>
                                        <td><em>"<strong>Can/Could</strong> I open the window?"</em><br>(¿Puedo abrir la ventana?)</td>
                                    </tr>
                                    <tr>
                                        <td>Posibilidad</td>
                                        <td>Algo que es posible o probable</td>
                                        <td><em>"It <strong>can</strong> be very cold in winter."</em><br>(Puede hacer mucho frío en invierno.)</td>
                                    </tr>
                                    <tr>
                                        <td>Petición</td>
                                        <td>Pedir algo (could es más cortés)</td>
                                        <td><em>"<strong>Could</strong> you help me, please?"</em><br>(¿Podrías ayudarme, por favor?)</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        
                        <div class="modal-group">
                            <h5>May / Might</h5>
                            <div class="tabla-formacion">
                                <table>
                                    <tr>
                                        <th>Uso</th>
                                        <th>Explicación</th>
                                        <th>Ejemplo</th>
                                    </tr>
                                    <tr>
                                        <td>Permiso (formal)</td>
                                        <td>Pedir o dar permiso formalmente</td>
                                        <td><em>"<strong>May</strong> I come in?"</em><br>(¿Puedo entrar?)</td>
                                    </tr>
                                    <tr>
                                        <td>Posibilidad</td>
                                        <td>Algo que posiblemente ocurra (may = 50% de probabilidad, might = menor probabilidad)</td>
                                        <td><em>"It <strong>may/might</strong> rain later today."</em><br>(Puede que llueva más tarde hoy.)</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        
                        <div class="modal-group">
                            <h5>Must / Have to</h5>
                            <div class="tabla-formacion">
                                <table>
                                    <tr>
                                        <th>Uso</th>
                                        <th>Explicación</th>
                                        <th>Ejemplo</th>
                                    </tr>
                                    <tr>
                                        <td>Obligación (Must)</td>
                                        <td>Obligación fuerte, generalmente impuesta por el hablante</td>
                                        <td><em>"You <strong>must</strong> stop at a red light."</em><br>(Debes parar en un semáforo en rojo.)</td>
                                    </tr>
                                    <tr>
                                        <td>Obligación (Have to)</td>
                                        <td>Obligación externa, impuesta por circunstancias o reglas</td>
                                        <td><em>"I <strong>have to</strong> wake up early tomorrow."</em><br>(Tengo que despertarme temprano mañana.)</td>
                                    </tr>
                                    <tr>
                                        <td>Deducción lógica</td>
                                        <td>Estar seguro de que algo es verdad basado en evidencias</td>
                                        <td><em>"She <strong>must be</strong> at home. Her car is in the driveway."</em><br>(Debe estar en casa. Su coche está en la entrada.)</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        
                        <div class="modal-group">
                            <h5>Should / Ought to</h5>
                            <div class="tabla-formacion">
                                <table>
                                    <tr>
                                        <th>Uso</th>
                                        <th>Explicación</th>
                                        <th>Ejemplo</th>
                                    </tr>
                                    <tr>
                                        <td>Consejo</td>
                                        <td>Recomendación o lo que es correcto hacer</td>
                                        <td><em>"You <strong>should</strong> study more."</em><br>(Deberías estudiar más.)</td>
                                    </tr>
                                    <tr>
                                        <td>Expectativa</td>
                                        <td>Lo que se espera que ocurra</td>
                                        <td><em>"The package <strong>should arrive</strong> tomorrow."</em><br>(El paquete debería llegar mañana.)</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        
                        <div class="modal-group">
                            <h5>Would</h5>
                            <div class="tabla-formacion">
                                <table>
                                    <tr>
                                        <th>Uso</th>
                                        <th>Explicación</th>
                                        <th>Ejemplo</th>
                                    </tr>
                                    <tr>
                                        <td>Hipótesis</td>
                                        <td>Usado en condicionales tipo 2 para situaciones imaginarias</td>
                                        <td><em>"If I had money, I <strong>would travel</strong> the world."</em><br>(Si tuviera dinero, viajaría por el mundo.)</td>
                                    </tr>
                                    <tr>
                                        <td>Petición cortés</td>
                                        <td>Para hacer peticiones de forma educada</td>
                                        <td><em>"<strong>Would</strong> you mind closing the door?"</em><br>(¿Te importaría cerrar la puerta?)</td>
                                    </tr>
                                    <tr>
                                        <td>Voluntad/Deseo</td>
                                        <td>Para expresar lo que alguien quiere hacer</td>
                                        <td><em>"I <strong>would like</strong> a cup of coffee."</em><br>(Me gustaría una taza de café.)</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div class="formacion-seccion">
                        <h4>¿Cómo se forman las estructuras con modales?</h4>
                        <p>Los verbos modales siguen estas estructuras básicas:</p>
                        
                        <div class="tabla-formacion">
                            <table>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Estructura</th>
                                    <th>Ejemplo</th>
                                </tr>
                                <tr>
                                    <td>Afirmativa</td>
                                    <td>Sujeto + modal + verbo base</td>
                                    <td><em>"She <strong>can swim</strong>."</em></td>
                                </tr>
                                <tr>
                                    <td>Negativa</td>
                                    <td>Sujeto + modal + not + verbo base</td>
                                    <td><em>"They <strong>cannot (can't) go</strong>."</em></td>
                                </tr>
                                <tr>
                                    <td>Interrogativa</td>
                                    <td>Modal + sujeto + verbo base</td>
                                    <td><em>"<strong>Should</strong> we <strong>call</strong> him?"</em></td>
                                </tr>
                                <tr>
                                    <td>Negativa interrogativa</td>
                                    <td>Modal + not + sujeto + verbo base</td>
                                    <td><em>"<strong>Couldn't</strong> you <strong>find</strong> it?"</em></td>
                                </tr>
                            </table>
                        </div>
                        
                        <p><strong>Importante:</strong> Después de un verbo modal, el verbo principal siempre va en su forma base (infinitivo sin "to"), excepto con "ought to" que requiere "to".</p>
                    </div>
                    
                    <div class="modales-pasado">
                        <h4>Verbos modales para hablar del pasado</h4>
                        <p>Para expresar ideas modales sobre situaciones pasadas, se usa la siguiente estructura:</p>
                        <p><strong>Modal + have + participio pasado</strong></p>
                        
                        <div class="tabla-formacion">
                            <table>
                                <tr>
                                    <th>Modal</th>
                                    <th>Uso en pasado</th>
                                    <th>Ejemplo</th>
                                </tr>
                                <tr>
                                    <td>could have</td>
                                    <td>Habilidad o posibilidad no realizada en el pasado</td>
                                    <td><em>"I <strong>could have helped</strong> you yesterday, but I was busy."</em><br>(Podría haberte ayudado ayer, pero estaba ocupado.)</td>
                                </tr>
                                <tr>
                                    <td>should have</td>
                                    <td>Consejo o expectativa no cumplida en el pasado</td>
                                    <td><em>"You <strong>should have called</strong> me."</em><br>(Deberías haberme llamado.)</td>
                                </tr>
                                <tr>
                                    <td>must have</td>
                                    <td>Deducción lógica sobre el pasado</td>
                                    <td><em>"He <strong>must have missed</strong> the train."</em><br>(Debe haber perdido el tren.)</td>
                                </tr>
                                <tr>
                                    <td>might have / may have</td>
                                    <td>Posibilidad en el pasado</td>
                                    <td><em>"She <strong>might have forgotten</strong> the meeting."</em><br>(Ella tal vez olvidó la reunión.)</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            `,
            importancia: `
                <p>Los verbos modales son fundamentales en inglés por varias razones:</p>
                <ul>
                    <li>Permiten expresar matices de significado como posibilidad, obligación, permiso y habilidad</li>
                    <li>Son esenciales para comunicar de manera cortés y educada en situaciones formales</li>
                    <li>Ayudan a dar consejos y hacer recomendaciones de manera apropiada</li>
                    <li>Facilitan la expresión de distintos grados de certeza y probabilidad</li>
                    <li>Son necesarios para formular peticiones, ofrecimientos y sugerencias</li>
                    <li>Aparecen constantemente en conversaciones cotidianas, entornos laborales y académicos</li>
                </ul>
                
                <p>Dominar los verbos modales es crucial para expresarse con precisión y sutileza en inglés, ya que permiten comunicar intenciones, actitudes y niveles de formalidad que van más allá del significado básico de los verbos.</p>
            `,
            estructura: `
                <h4>Estructuras con verbos modales</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Función</th>
                            <th>Verbo modal</th>
                            <th>Estructura</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Habilidad</td>
                            <td>can / could</td>
                            <td>Sujeto + can/could + verbo base</td>
                            <td>I <strong>can speak</strong> English.<br>She <strong>could play</strong> piano when she was a child.</td>
                        </tr>
                        <tr>
                            <td>Permiso</td>
                            <td>can / may</td>
                            <td>Sujeto + can/may + verbo base</td>
                            <td>You <strong>can use</strong> my phone.<br><strong>May I come</strong> in?</td>
                        </tr>
                        <tr>
                            <td>Obligación</td>
                            <td>must / have to</td>
                            <td>Sujeto + must/have to + verbo base</td>
                            <td>You <strong>must respect</strong> the rules.<br>I <strong>have to finish</strong> this today.</td>
                        </tr>
                        <tr>
                            <td>Consejo</td>
                            <td>should / ought to</td>
                            <td>Sujeto + should/ought to + verbo base</td>
                            <td>You <strong>should exercise</strong> regularly.<br>We <strong>ought to help</strong> them.</td>
                        </tr>
                        <tr>
                            <td>Posibilidad</td>
                            <td>may / might / could</td>
                            <td>Sujeto + may/might/could + verbo base</td>
                            <td>It <strong>may rain</strong> tomorrow.<br>She <strong>might be</strong> at home.</td>
                        </tr>
                    </tbody>
                </table>
                
                <h4>Negaciones e interrogativas</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Estructura</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Negativa</td>
                            <td>Sujeto + modal + not + verbo base</td>
                            <td>I <strong>cannot swim</strong>.<br>You <strong>should not worry</strong>.</td>
                        </tr>
                        <tr>
                            <td>Interrogativa</td>
                            <td>Modal + sujeto + verbo base</td>
                            <td><strong>Can</strong> you <strong>help</strong> me?<br><strong>Should</strong> we <strong>leave</strong> now?</td>
                        </tr>
                        <tr>
                            <td>Negativa interrogativa</td>
                            <td>Modal + not + sujeto + verbo base</td>
                            <td><strong>Couldn't</strong> you <strong>wait</strong> a moment?<br><strong>Shouldn't</strong> he <strong>be</strong> here by now?</td>
                        </tr>
                    </tbody>
                </table>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">"I <strong>can't find</strong> my keys. I <strong>might have left</strong> them at work."</p>
                        <p class="espanol">No puedo encontrar mis llaves. Puede que las haya dejado en el trabajo.</p>
                        <p class="estructura"><small>Sujeto + can't + verbo base | Sujeto + might have + participio pasado</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"You <strong>should see</strong> a doctor if you <strong>don't feel</strong> better soon."</p>
                        <p class="espanol">Deberías ver a un médico si no te sientes mejor pronto.</p>
                        <p class="estructura"><small>Sujeto + should + verbo base + if + sujeto + don't + verbo base</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"<strong>Could you please hold</strong> the door for me? I <strong>have to carry</strong> these boxes."</p>
                        <p class="espanol">¿Podrías sujetarme la puerta, por favor? Tengo que cargar estas cajas.</p>
                        <p class="estructura"><small>Could + sujeto + verbo base | Sujeto + have to + verbo base</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"The meeting <strong>must have been</strong> canceled. Nobody is in the conference room."</p>
                        <p class="espanol">La reunión debe haber sido cancelada. No hay nadie en la sala de conferencias.</p>
                        <p class="estructura"><small>Sujeto + must have been + participio pasado (deducción sobre el pasado)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"I <strong>would go</strong> with you if I <strong>didn't have</strong> to work tomorrow."</p>
                        <p class="espanol">Iría contigo si no tuviera que trabajar mañana.</p>
                        <p class="estructura"><small>Sujeto + would + verbo base + if + sujeto + didn't + verbo base</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Para practicar los verbos modales, intenta reescribir oraciones cambiando el nivel de certeza o formalidad. Por ejemplo, cambia "You must go" por "You should go" o "You might want to go" y observa cómo cambia el significado.</p>
            `,
        },
        "Voz pasiva": {
            descripcion: "Estructura gramatical que enfatiza la acción o su resultado en lugar del sujeto que la realiza.",
            teoria: `
                <div class="teoria-content">
                    <div class="definicion-seccion">
                        <h4>¿Qué es?</h4>
                        <p>La <strong>voz pasiva</strong> es una estructura gramatical que se utiliza cuando queremos enfatizar la acción o el objeto que recibe la acción, en lugar del sujeto que la realiza. A diferencia de la voz activa, donde el énfasis está en quién realiza la acción, la voz pasiva pone el foco en qué se hace o a quién se le hace algo.</p>
                        
                        <p>En inglés, la voz pasiva se utiliza con más frecuencia que en español, especialmente en contextos formales, académicos y científicos.</p>
                        
                        <div class="comparacion">
                            <div class="voz-activa">
                                <h5>Voz activa</h5>
                                <p><strong>El sujeto realiza la acción</strong></p>
                                <p><em>"The chef <strong>prepared</strong> the meal."</em><br>(El chef preparó la comida.)</p>
                            </div>
                            <div class="voz-pasiva">
                                <h5>Voz pasiva</h5>
                                <p><strong>El sujeto recibe la acción</strong></p>
                                <p><em>"The meal <strong>was prepared</strong> by the chef."</em><br>(La comida fue preparada por el chef.)</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="usos-seccion">
                        <h4>¿Cuándo usar la voz pasiva?</h4>
                        <ul>
                            <li><strong>Cuando el objeto es más importante que el sujeto:</strong>
                                <p><em>"The Mona Lisa <strong>was painted</strong> by Leonardo da Vinci."</em> (La Mona Lisa fue pintada por Leonardo da Vinci.)</p>
                            </li>
                            <li><strong>Cuando no se conoce o no es importante quién realizó la acción:</strong>
                                <p><em>"My car <strong>was stolen</strong> last night."</em> (Mi coche fue robado anoche.) - No sabemos quién lo robó.</p>
                            </li>
                            <li><strong>En contextos formales y académicos:</strong>
                                <p><em>"These results <strong>were obtained</strong> through careful analysis."</em> (Estos resultados se obtuvieron mediante un análisis cuidadoso.)</p>
                            </li>
                            <li><strong>Para evitar mencionar al responsable de una acción negativa:</strong>
                                <p><em>"Mistakes <strong>were made</strong> during the process."</em> (Se cometieron errores durante el proceso.) - Sin mencionar quién los cometió.</p>
                            </li>
                            <li><strong>Para mantener el mismo sujeto en oraciones consecutivas:</strong>
                                <p><em>"The suspect <strong>was arrested</strong> and <strong>was taken</strong> to the police station."</em> (El sospechoso fue arrestado y fue llevado a la comisaría.)</p>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="formacion-seccion">
                        <h4>¿Cómo se forma la voz pasiva?</h4>
                        <p>La voz pasiva se forma con la siguiente estructura:</p>
                        <p><strong>Sujeto + verbo "to be" (en el tiempo adecuado) + participio pasado + (by + agente)</strong></p>
                        <p>El "agente" (la persona o cosa que realiza la acción) es opcional y se introduce con la preposición "by".</p>
                        
                        <div class="tabla-formacion">
                            <table>
                                <tr>
                                    <th>Tiempo verbal</th>
                                    <th>Estructura en voz pasiva</th>
                                    <th>Ejemplo</th>
                                </tr>
                                <tr>
                                    <td>Presente simple</td>
                                    <td>am/is/are + participio pasado</td>
                                    <td><em>"English <strong>is spoken</strong> in many countries."</em><br>(El inglés es hablado en muchos países.)</td>
                                </tr>
                                <tr>
                                    <td>Pasado simple</td>
                                    <td>was/were + participio pasado</td>
                                    <td><em>"The house <strong>was built</strong> in 1980."</em><br>(La casa fue construida en 1980.)</td>
                                </tr>
                                <tr>
                                    <td>Presente perfecto</td>
                                    <td>has/have been + participio pasado</td>
                                    <td><em>"The report <strong>has been sent</strong> to all managers."</em><br>(El informe ha sido enviado a todos los gerentes.)</td>
                                </tr>
                                <tr>
                                    <td>Pasado perfecto</td>
                                    <td>had been + participio pasado</td>
                                    <td><em>"By the time I arrived, the decision <strong>had been made</strong>."</em><br>(Para cuando yo llegué, la decisión ya había sido tomada.)</td>
                                </tr>
                                <tr>
                                    <td>Futuro simple</td>
                                    <td>will be + participio pasado</td>
                                    <td><em>"The new bridge <strong>will be completed</strong> next year."</em><br>(El nuevo puente será completado el próximo año.)</td>
                                </tr>
                                <tr>
                                    <td>Con modales</td>
                                    <td>modal + be + participio pasado</td>
                                    <td><em>"This problem <strong>must be solved</strong> immediately."</em><br>(Este problema debe ser resuelto inmediatamente.)</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    
                    <div class="activa-pasiva-seccion">
                        <h4>Transformación de voz activa a pasiva</h4>
                        <p>Para transformar una oración de voz activa a voz pasiva:</p>
                        
                        <ol>
                            <li>El objeto directo de la oración activa se convierte en el sujeto de la oración pasiva.</li>
                            <li>El verbo en voz activa se transforma en el verbo "to be" + participio pasado.</li>
                            <li>El sujeto de la oración activa se convierte en agente introducido por "by" (opcional).</li>
                        </ol>
                        
                        <div class="tabla-formacion">
                            <table>
                                <tr>
                                    <th>Voz activa</th>
                                    <th>Voz pasiva</th>
                                </tr>
                                <tr>
                                    <td><em>"Shakespeare <strong>wrote</strong> Hamlet."</em></td>
                                    <td><em>"Hamlet <strong>was written</strong> by Shakespeare."</em></td>
                                </tr>
                                <tr>
                                    <td><em>"They <strong>are building</strong> a new hospital."</em></td>
                                    <td><em>"A new hospital <strong>is being built</strong>."</em></td>
                                </tr>
                                <tr>
                                    <td><em>"Someone <strong>has stolen</strong> my bike."</em></td>
                                    <td><em>"My bike <strong>has been stolen</strong>."</em></td>
                                </tr>
                                <tr>
                                    <td><em>"The chef <strong>will prepare</strong> dinner at 8."</em></td>
                                    <td><em>"Dinner <strong>will be prepared</strong> at 8 (by the chef)."</em></td>
                                </tr>
                            </table>
                        </div>
                        
                        <p><strong>Nota:</strong> No todas las oraciones activas pueden transformarse en pasivas. Solo los verbos transitivos (que llevan objeto directo) pueden usarse en voz pasiva.</p>
                    </div>
                    
                    <div class="casos-especiales">
                        <h4>Casos especiales</h4>
                        
                        <div class="caso">
                            <h5>Verbos con objeto directo e indirecto</h5>
                            <p>Cuando un verbo tiene tanto objeto directo como indirecto, cualquiera de los dos puede convertirse en el sujeto de la voz pasiva:</p>
                            <div class="tabla-formacion">
                                <table>
                                    <tr>
                                        <th>Voz activa</th>
                                        <th>Voz pasiva (opción 1)</th>
                                        <th>Voz pasiva (opción 2)</th>
                                    </tr>
                                    <tr>
                                        <td><em>"He gave <strong>me</strong> (OI) <strong>a book</strong> (OD)."</em></td>
                                        <td><em>"<strong>I</strong> was given a book (by him)."</em></td>
                                        <td><em>"<strong>A book</strong> was given to me (by him)."</em></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        
                        <div class="caso">
                            <h5>Voz pasiva con verbos de percepción</h5>
                            <p>Con verbos como "see", "hear", "know", etc., seguidos de un infinitivo, se usa esta estructura:</p>
                            <div class="tabla-formacion">
                                <table>
                                    <tr>
                                        <th>Voz activa</th>
                                        <th>Voz pasiva</th>
                                    </tr>
                                    <tr>
                                        <td><em>"People <strong>saw him steal</strong> the car."</em></td>
                                        <td><em>"He <strong>was seen to steal</strong> the car."</em></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            importancia: `
                <p>La voz pasiva es una estructura gramatical importante en inglés por diversas razones:</p>
                <ul>
                    <li>Permite cambiar el énfasis de una oración, destacando la acción o quien la recibe en lugar de quien la realiza</li>
                    <li>Es esencial en escritura formal, académica y científica, donde se busca objetividad y distanciamiento</li>
                    <li>Ayuda a mantener la coherencia del texto cuando se quiere mantener el mismo sujeto en oraciones consecutivas</li>
                    <li>Facilita la comunicación cuando el actor de la acción es desconocido o irrelevante</li>
                    <li>Es muy utilizada en noticias, informes, artículos científicos y documentos oficiales</li>
                    <li>Permite expresar ideas de manera más diplomática, especialmente al comunicar información negativa</li>
                </ul>
                
                <p>Dominar la voz pasiva en inglés es fundamental para alcanzar un nivel intermedio, ya que amplía considerablemente la capacidad de expresión y adaptación a diferentes contextos comunicativos, especialmente en entornos académicos y profesionales.</p>
            `,
            estructura: `
                <h4>Estructura básica de la voz pasiva</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Tiempo verbal</th>
                            <th>Voz activa</th>
                            <th>Voz pasiva</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Presente simple</td>
                            <td>Sujeto + verbo + objeto</td>
                            <td>Objeto + is/am/are + participio pasado (+ by + sujeto)</td>
                        </tr>
                        <tr>
                            <td>Ejemplo</td>
                            <td>They <strong>clean</strong> the office.</td>
                            <td>The office <strong>is cleaned</strong> (by them).</td>
                        </tr>
                        <tr>
                            <td>Pasado simple</td>
                            <td>Sujeto + verbo en pasado + objeto</td>
                            <td>Objeto + was/were + participio pasado (+ by + sujeto)</td>
                        </tr>
                        <tr>
                            <td>Ejemplo</td>
                            <td>They <strong>built</strong> this house in 1990.</td>
                            <td>This house <strong>was built</strong> in 1990 (by them).</td>
                        </tr>
                        <tr>
                            <td>Presente perfecto</td>
                            <td>Sujeto + have/has + participio pasado + objeto</td>
                            <td>Objeto + have/has been + participio pasado (+ by + sujeto)</td>
                        </tr>
                        <tr>
                            <td>Ejemplo</td>
                            <td>Someone <strong>has stolen</strong> my bike.</td>
                            <td>My bike <strong>has been stolen</strong>.</td>
                        </tr>
                    </tbody>
                </table>
                
                <h4>Estructuras con modales</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Modalidad</th>
                            <th>Voz activa</th>
                            <th>Voz pasiva</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Obligación</td>
                            <td>You <strong>must complete</strong> the form.</td>
                            <td>The form <strong>must be completed</strong> (by you).</td>
                        </tr>
                        <tr>
                            <td>Posibilidad</td>
                            <td>They <strong>might postpone</strong> the meeting.</td>
                            <td>The meeting <strong>might be postponed</strong> (by them).</td>
                        </tr>
                    </tbody>
                </table>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">"This book <strong>was written</strong> by a famous author."</p>
                        <p class="espanol">Este libro fue escrito por un autor famoso.</p>
                        <p class="estructura"><small>Sujeto + was + participio pasado + by + agente (pasado simple pasivo)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"English <strong>is spoken</strong> in many countries around the world."</p>
                        <p class="espanol">El inglés se habla en muchos países del mundo.</p>
                        <p class="estructura"><small>Sujeto + is + participio pasado + complemento (presente simple pasivo)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"The window <strong>has been broken</strong> since last week."</p>
                        <p class="espanol">La ventana está rota desde la semana pasada.</p>
                        <p class="estructura"><small>Sujeto + has been + participio pasado + complemento (presente perfecto pasivo)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"The project <strong>must be finished</strong> by Friday."</p>
                        <p class="espanol">El proyecto debe ser terminado para el viernes.</p>
                        <p class="estructura"><small>Sujeto + modal + be + participio pasado + complemento (modal en pasiva)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"<strong>Was this painting created</strong> by a child?"</p>
                        <p class="espanol">¿Fue creada esta pintura por un niño?</p>
                        <p class="estructura"><small>Was + sujeto + participio pasado + by + agente + ? (interrogativa en pasado simple pasivo)</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Para practicar la voz pasiva, intenta reescribir titulares de noticias o instrucciones cambiando oraciones de voz activa a voz pasiva. Presta atención a cómo cambia el énfasis y a cuándo es más natural usar una u otra voz en inglés.</p>
            `,
            estructura: `
                <h4>Estructuras de los phrasal verbs según su tipo</h4>
                <table class="estructura-table">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Estructura</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Intransitivo<br>(sin objeto)</td>
                            <td>Sujeto + verbo + partícula</td>
                            <td>The plane <strong>took off</strong>.<br>They <strong>broke up</strong> last month.</td>
                        </tr>
                        <tr>
                            <td>Transitivo separable<br>(objeto nominal)</td>
                            <td>Sujeto + verbo + partícula + objeto<br>o<br>Sujeto + verbo + objeto + partícula</td>
                            <td>He <strong>turned on</strong> the light.<br>He <strong>turned</strong> the light <strong>on</strong>.</td>
                        </tr>
                        <tr>
                            <td>Transitivo separable<br>(objeto pronominal)</td>
                            <td>Sujeto + verbo + objeto + partícula</td>
                            <td>She <strong>picked</strong> it <strong>up</strong>.<br>(No: She picked up it.)</td>
                        </tr>
                        <tr>
                            <td>Transitivo inseparable</td>
                            <td>Sujeto + verbo + partícula + objeto</td>
                            <td>They <strong>looked after</strong> the children.<br>(No: They looked the children after.)</td>
                        </tr>
                        <tr>
                            <td>Con dos partículas</td>
                            <td>Sujeto + verbo + partícula1 + partícula2 + objeto</td>
                            <td>I <strong>look forward to</strong> meeting you.<br>She <strong>came up with</strong> a great idea.</td>
                        </tr>
                    </tbody>
                </table>
            `,
            ejemplos: `
                <div class="ejemplos-container">
                    <div class="ejemplo">
                        <p class="ingles">"I need to <strong>pick up</strong> my daughter from school at 3 PM."</p>
                        <p class="espanol">Necesito recoger a mi hija de la escuela a las 3 PM.</p>
                        <p class="estructura"><small>Sujeto + verbo + partícula + objeto (phrasal verb separable)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"Can you <strong>turn down</strong> the volume? It's too loud."</p>
                        <p class="espanol">¿Puedes bajar el volumen? Está demasiado alto.</p>
                        <p class="estructura"><small>Sujeto + can + verbo + partícula + objeto (phrasal verb separable)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"She <strong>gets along with</strong> her new colleagues very well."</p>
                        <p class="espanol">Ella se lleva muy bien con sus nuevos colegas.</p>
                        <p class="estructura"><small>Sujeto + verbo + partícula1 + partícula2 + objeto (phrasal verb con dos partículas)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"We had to <strong>put off</strong> the meeting <strong>until</strong> next week."</p>
                        <p class="espanol">Tuvimos que posponer la reunión hasta la próxima semana.</p>
                        <p class="estructura"><small>Sujeto + had to + verbo + partícula + objeto (phrasal verb separable)</small></p>
                    </div>
                    
                    <div class="ejemplo">
                        <p class="ingles">"Don't <strong>give up</strong> on your dreams. Keep trying!"</p>
                        <p class="espanol">No renuncies a tus sueños. ¡Sigue intentándolo!</p>
                        <p class="estructura"><small>Don't + verbo + partícula + on + objeto (phrasal verb con preposición adicional)</small></p>
                    </div>
                </div>
                
                <p><strong>Consejo:</strong> Para practicar los phrasal verbs, intenta crear frases con los más comunes en diferentes tiempos verbales y en distintos contextos. También puedes sustituir palabras en textos o conversaciones por sus equivalentes en phrasal verbs para incorporarlos a tu lenguaje habitual.</p>
            `,
        },
    "Phrasal verbs comunes": {
    descripcion: "Combinaciones de verbos y partículas que forman expresiones con significados únicos y son esenciales en el inglés cotidiano.",
    teoria: `
        <div class="teoria-content">
            <div class="definicion-seccion">
                <h4>¿Qué son los phrasal verbs?</h4>
                <p>Los <strong>phrasal verbs</strong> son combinaciones de un verbo y una o más partículas (preposiciones o adverbios) que juntos crean un significado diferente al del verbo original. Son extremadamente comunes en el inglés hablado y escrito, y suelen expresar acciones de manera más natural y coloquial que sus equivalentes de una sola palabra.</p>
                
                <div class="ejemplo-basico">
                    <p><strong>Verbo simple:</strong> <em>"enter"</em> (entrar)</p>
                    <p><strong>Phrasal verb:</strong> <em>"come in"</em> (entrar)</p>
                    <p><em>"Look"</em> significa "mirar", pero <em>"look after"</em> significa "cuidar".</p>
                </div>
            </div>
            
            <div class="tipos-seccion">
                <h4>Tipos de phrasal verbs</h4>
                
                <div class="tipo">
                    <h5>1. Intransitivos (no llevan objeto)</h5>
                    <p>Estos phrasal verbs no necesitan un objeto para tener sentido completo.</p>
                    <p><em>"The plane <strong>took off</strong> on time."</em> (El avión despegó a tiempo.)</p>
                    <p><em>"Please <strong>sit down</strong>."</em> (Por favor, siéntate.)</p>
                </div>
                
                <div class="tipo">
                    <h5>2. Transitivos separables</h5>
                    <p>Estos phrasal verbs necesitan un objeto, y este puede colocarse entre el verbo y la partícula o después de la partícula.</p>
                    <p><em>"I <strong>turned on</strong> the light."</em> o <em>"I <strong>turned</strong> the light <strong>on</strong>."</em> (Encendí la luz.)</p>
                    <p><strong>Importante:</strong> Si el objeto es un pronombre, <em>debe</em> ir entre el verbo y la partícula.</p>
                    <p><em>"I <strong>turned</strong> it <strong>on</strong>."</em> (NO: "I turned on it.")</p>
                </div>
                
                <div class="tipo">
                    <h5>3. Transitivos inseparables</h5>
                    <p>Estos phrasal verbs necesitan un objeto, pero este siempre debe ir después de la partícula.</p>
                    <p><em>"She <strong>looked after</strong> the children."</em> (Ella cuidó a los niños.)</p>
                    <p><em>"They <strong>ran into</strong> an old friend."</em> (Se encontraron con un viejo amigo.)</p>
                </div>
                
                <div class="tipo">
                    <h5>4. Con múltiples partículas</h5>
                    <p>Algunos phrasal verbs tienen dos o tres partículas y siempre son inseparables.</p>
                    <p><em>"I'm <strong>looking forward to</strong> seeing you."</em> (Estoy deseando verte.)</p>
                    <p><em>"She <strong>gets along with</strong> her colleagues."</em> (Ella se lleva bien con sus colegas.)</p>
                </div>
            </div>
            
            <div class="desafios-seccion">
                <h4>Desafíos de los phrasal verbs</h4>
                <p>Los phrasal verbs presentan varios desafíos para los estudiantes de inglés:</p>
                
                <ul>
                    <li><strong>Significados no literales:</strong> El significado del phrasal verb a menudo no se puede deducir de sus partes individuales.</li>
                    <li><strong>Múltiples significados:</strong> Muchos phrasal verbs tienen varios significados diferentes según el contexto.</li>
                    <li><strong>Reglas de separabilidad:</strong> Recordar cuáles son separables y cuáles no.</li>
                    <li><strong>Formalidad:</strong> Algunos phrasal verbs son informales y deben evitarse en contextos formales.</li>
                </ul>
            </div>
            
            <div class="aprendizaje-seccion">
                <h4>Estrategias para aprender phrasal verbs</h4>
                
                <ul>
                    <li><strong>Aprender en contexto:</strong> Es mejor aprender phrasal verbs dentro de frases completas o situaciones.</li>
                    <li><strong>Agrupar por verbo base:</strong> Estudiar los diferentes phrasal verbs que se forman con un mismo verbo base (ej: look up, look for, look after).</li>
                    <li><strong>Agrupar por significado:</strong> Estudiar phrasal verbs que tienen significados relacionados.</li>
                    <li><strong>Práctica regular:</strong> Usar los phrasal verbs en conversaciones y escritura.</li>
                    <li><strong>Crear asociaciones:</strong> Relacionar el phrasal verb con imágenes o situaciones para recordar su significado.</li>
                </ul>
            </div>
            
            <div class="comunes-seccion">
                <h4>Phrasal verbs más comunes</h4>
                
                <div class="tabla-comunes">
                    <table>
                        <tr>
                            <th>Phrasal Verb</th>
                            <th>Significado</th>
                            <th>Ejemplo</th>
                        </tr>
                        <tr>
                            <td>break down</td>
                            <td>averiarse / derrumbarse</td>
                            <td><em>"My car broke down on the highway."</em><br>(Mi coche se averió en la autopista.)</td>
                        </tr>
                        <tr>
                            <td>give up</td>
                            <td>rendirse / abandonar</td>
                            <td><em>"Don't give up on your dreams."</em><br>(No renuncies a tus sueños.)</td>
                        </tr>
                        <tr>
                            <td>look for</td>
                            <td>buscar</td>
                            <td><em>"I'm looking for my keys."</em><br>(Estoy buscando mis llaves.)</td>
                        </tr>
                        <tr>
                            <td>pick up</td>
                            <td>recoger / levantar</td>
                            <td><em>"I'll pick you up at the airport."</em><br>(Te recogeré en el aeropuerto.)</td>
                        </tr>
                        <tr>
                            <td>put off</td>
                            <td>posponer / aplazar</td>
                            <td><em>"We've put off the meeting until Friday."</em><br>(Hemos pospuesto la reunión hasta el viernes.)</td>
                        </tr>
                        <tr>
                            <td>turn down</td>
                            <td>rechazar / bajar (volumen)</td>
                            <td><em>"She turned down the job offer."</em><br>(Ella rechazó la oferta de trabajo.)</td>
                        </tr>
                        <tr>
                            <td>carry out</td>
                            <td>realizar / llevar a cabo</td>
                            <td><em>"They carried out the plan successfully."</em><br>(Llevaron a cabo el plan con éxito.)</td>
                        </tr>
                        <tr>
                            <td>run into</td>
                            <td>encontrarse con alguien (por casualidad)</td>
                            <td><em>"I ran into an old friend yesterday."</em><br>(Me encontré con un viejo amigo ayer.)</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `,
    importancia: `
        <p>Los phrasal verbs son un componente fundamental del inglés por varias razones:</p>
        <ul>
            <li><strong>Uso frecuente:</strong> Son extremadamente comunes en el inglés cotidiano, especialmente en conversaciones informales</li>
            <li><strong>Naturalidad:</strong> Usar phrasal verbs correctamente hace que tu inglés suene más natural y menos "de libro de texto"</li>
            <li><strong>Economía lingüística:</strong> A menudo, un phrasal verb puede expresar con precisión lo que de otra manera requeriría una explicación más larga</li>
            <li><strong>Riqueza expresiva:</strong> Permiten expresar matices y connotaciones específicas difíciles de transmitir de otra manera</li>
            <li><strong>Comprensión:</strong> Son esenciales para entender conversaciones, películas, canciones y textos en inglés</li>
            <li><strong>Evaluación de nivel:</strong> El dominio de los phrasal verbs es uno de los indicadores del nivel de fluidez en inglés</li>
        </ul>
        
        <p>En el nivel B1, se espera que los estudiantes comprendan y utilicen al menos 50-80 phrasal verbs comunes, lo que les permitirá comunicarse con mayor fluidez y precisión en situaciones cotidianas y profesionales básicas.</p>
    `,
    estructura: `
        <h4>Estructuras de los phrasal verbs según su tipo</h4>
        <table class="estructura-table">
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Estructura</th>
                    <th>Ejemplo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Intransitivo<br>(sin objeto)</td>
                    <td>Sujeto + verbo + partícula</td>
                    <td>The plane <strong>took off</strong>.<br>They <strong>broke up</strong> last month.</td>
                </tr>
                <tr>
                    <td>Transitivo separable<br>(objeto nominal)</td>
                    <td>Sujeto + verbo + partícula + objeto<br>o<br>Sujeto + verbo + objeto + partícula</td>
                    <td>He <strong>turned on</strong> the light.<br>He <strong>turned</strong> the light <strong>on</strong>.</td>
                </tr>
                <tr>
                    <td>Transitivo separable<br>(objeto pronominal)</td>
                    <td>Sujeto + verbo + objeto + partícula</td>
                    <td>She <strong>picked</strong> it <strong>up</strong>.<br>(No: She picked up it.)</td>
                </tr>
                <tr>
                    <td>Transitivo inseparable</td>
                    <td>Sujeto + verbo + partícula + objeto</td>
                    <td>They <strong>looked after</strong> the children.<br>(No: They looked the children after.)</td>
                </tr>
                <tr>
                    <td>Con dos partículas</td>
                    <td>Sujeto + verbo + partícula1 + partícula2 + objeto</td>
                    <td>I <strong>look forward to</strong> meeting you.<br>She <strong>came up with</strong> a great idea.</td>
                </tr>
            </tbody>
        </table>
    `,
    ejemplos: `
        <div class="ejemplos-container">
            <div class="ejemplo">
                <p class="ingles">"I need to <strong>pick up</strong> my daughter from school at 3 PM."</p>
                <p class="espanol">Necesito recoger a mi hija de la escuela a las 3 PM.</p>
                <p class="estructura"><small>Sujeto + verbo + partícula + objeto (phrasal verb separable)</small></p>
            </div>
            
            <div class="ejemplo">
                <p class="ingles">"Can you <strong>turn down</strong> the volume? It's too loud."</p>
                <p class="espanol">¿Puedes bajar el volumen? Está demasiado alto.</p>
                <p class="estructura"><small>Sujeto + can + verbo + partícula + objeto (phrasal verb separable)</small></p>
            </div>
            
            <div class="ejemplo">
                <p class="ingles">"She <strong>gets along with</strong> her new colleagues very well."</p>
                <p class="espanol">Ella se lleva muy bien con sus nuevos colegas.</p>
                <p class="estructura"><small>Sujeto + verbo + partícula1 + partícula2 + objeto (phrasal verb con dos partículas)</small></p>
            </div>
            
            <div class="ejemplo">
                <p class="ingles">"We had to <strong>put off</strong> the meeting <strong>until</strong> next week."</p>
                <p class="espanol">Tuvimos que posponer la reunión hasta la próxima semana.</p>
                <p class="estructura"><small>Sujeto + had to + verbo + partícula + objeto (phrasal verb separable)</small></p>
            </div>
            
            <div class="ejemplo">
                <p class="ingles">"Don't <strong>give up</strong> on your dreams. Keep trying!"</p>
                <p class="espanol">No renuncies a tus sueños. ¡Sigue intentándolo!</p>
                <p class="estructura"><small>Don't + verbo + partícula + on + objeto (phrasal verb con preposición adicional)</small></p>
            </div>
        </div>
        
        <p><strong>Consejo:</strong> Para practicar los phrasal verbs, intenta crear frases con los más comunes en diferentes tiempos verbales y en distintos contextos. También puedes sustituir palabras en textos o conversaciones por sus equivalentes en phrasal verbs para incorporarlos a tu lenguaje habitual.</p>
    `,
}
    };

    // Animaciones de entrada con GSAP
    gsap.from("header", {
        duration: 1.2,
        opacity: 0,
        y: -50,
        ease: "power3.out"
    });

    gsap.to(header, {
        boxShadow: "0px 0px 25px rgba(0, 183, 255, 0.9)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.from(".nivel", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: "back.out(1.7)",
        delay: 0.5
    });

    // Función para mostrar detalles del nivel
    function mostrarDetallesNivel(nivel) {
        const nivelCodigo = nivel.getAttribute("data-level");
        const nivelTitulo = nivel.querySelector("h2").textContent;
        const datosNivel = temasNiveles[nivelCodigo];

        // Animar la salida de los niveles
        gsap.to(".nivel", {
            opacity: 0,
            y: -20,
            stagger: 0.1,
            duration: 0.3,
            onComplete: () => {
                niveles.forEach(n => n.style.display = "none");
                // Actualizar detalles del nivel
                detallesTitulo.textContent = nivelTitulo;
                detallesDescripcion.textContent = datosNivel.descripcion;

                // Limpiar y cargar los temas
                containerDetallesTemas.innerHTML = "";
                const fragmento = document.createDocumentFragment();
                datosNivel.temas.forEach(tema => {
                    const temaElement = document.createElement("div");
                    temaElement.className = "tema-item";
                    temaElement.innerHTML = `
                        <h3>${tema.titulo}</h3>
                        <p>${tema.descripcion}</p>
                    `;
                    temaElement.addEventListener("click", () => {
                        mostrarDetalleTema(tema);
                    });
                    fragmento.appendChild(temaElement);
                });
                containerDetallesTemas.appendChild(fragmento);

                // Asegurarse de ocultar la vista detallada del tema
                temaDetalleContainer.style.display = "none";
                // Mostrar el contenedor de detalles del nivel
                nivelesDetalles.style.display = "block";

                // Animar la aparición del contenedor de detalles
                gsap.fromTo(nivelesDetalles,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
                );

                // Animar la entrada de los temas
                gsap.from(".tema-item", {
                    opacity: 0,
                    y: 20,
                    stagger: 0.1,
                    duration: 0.4,
                    delay: 0.5,
                    clearProps: "all"
                });
            }
        });
    }

    // Función para mostrar el detalle de un tema específico
    function mostrarDetalleTema(tema) {
        if (!detallesTemas[tema.titulo]) {
            console.warn(`No hay datos detallados para: ${tema.titulo}`);
            return;
        }

        const detalles = detallesTemas[tema.titulo];
        temaDetalleTitulo.textContent = tema.titulo;
        temaDetalleDescripcion.textContent = detalles.descripcion || tema.descripcion;
        temaDetalleTeoria.innerHTML = detalles.teoria || "<p>Contenido próximamente</p>";
        temaDetalleImportancia.innerHTML = detalles.importancia || "<p>Contenido próximamente</p>";
        temaDetalleEstructura.innerHTML = detalles.estructura || "<p>Contenido próximamente</p>";
        temaDetalleEjemplos.innerHTML = detalles.ejemplos || "<p>Contenido próximamente</p>";

        // Primero animar la desaparición del header, contenedor de niveles y de detalles
        gsap.to([header, nivelesContainer, nivelesDetalles, nuevoHeader], {
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
                header.style.display = "none";
                nivelesContainer.style.display = "none";
                nivelesDetalles.style.display = "none";

                // Configurar el contenedor de detalle del tema
                temaDetalleContainer.style.display = "flex";
                temaDetalleContainer.style.position = "absolute"; // Cambiado de fixed a absolute para permitir scroll normal
                temaDetalleContainer.style.top = "0";
                temaDetalleContainer.style.left = "0";
                temaDetalleContainer.style.width = "100%";
                temaDetalleContainer.style.height = "auto"; // Cambiado de 100vh a auto para ajustarse al contenido
                temaDetalleContainer.style.justifyContent = "center"; // Centrado horizontal
                temaDetalleContainer.style.alignItems = "center"; // Centrado vertical
                temaDetalleContainer.style.overflowY = "visible"; // Permitir scroll predeterminado del navegador

                // Añadir márgenes simétricos y espacio uniforme
                temaDetalleContainer.style.padding = "5vh -5vh"; // Solo padding vertical
                temaDetalleContainer.style.margin = "5vh auto";
                temaDetalleContainer.style.boxSizing = "border-box";

                // Ajustar el contenido para que esté centrado y simétrico
                document.querySelector('.tema-detalle-content').style.width = "85%";
                document.querySelector('.tema-detalle-content').style.maxWidth = "1000px";
                document.querySelector('.tema-detalle-content').style.margin = "0 auto";
                document.querySelector('.tema-detalle-content').style.padding = "30px";
                document.querySelector('.tema-detalle-content').style.boxSizing = "border-box";

                // Animar la entrada del contenedor de detalle
                gsap.fromTo(temaDetalleContainer,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        onComplete: () => {
                            gsap.from(".seccion-teoria, .seccion-importancia, .seccion-estructura, .seccion-ejemplos", {
                                opacity: 0,
                                y: 20,
                                stagger: 0.2,
                                duration: 0.5,
                                ease: "back.out(1.2)"
                            });
                            // Mantener el scrollY predeterminado sin forzar scroll
                        }
                    }
                );
            }
        });
    }

    // Función para volver desde el detalle de nivel a la vista principal
    function ocultarDetallesNivel() {
        gsap.to(nivelesDetalles, {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
                nivelesDetalles.style.display = "none";
                niveles.forEach(n => {
                    n.style.display = "flex";
                    n.style.opacity = "1";
                    n.style.top = "10vh";
                });
                gsap.from(".nivel", {
                    opacity: 0,
                    y: 25,
                    stagger: 0.2,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        });
    }

    // Función para volver desde el detalle del tema al detalle del nivel
    function ocultarDetalleTema() {
        gsap.to(temaDetalleContainer, {
            opacity: 0,
            y: 30,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
                // Ocultar el contenedor de detalle
                temaDetalleContainer.style.display = "none";
                // Restaurar displays y opacidades de header, nivelesContainer y nivelesDetalles
                header.style.display = "flex";
                header.style.opacity = "1";
                nivelesContainer.style.display = "flex";    //!Requerido para que muestre el contenido del section
                nivelesContainer.style.opacity = "1";
                nivelesDetalles.style.display = "block";
                nivelesDetalles.style.opacity = "1";
                nuevoHeader.style.display = "flex";
                nuevoHeader.style.opacity = "1";

                // Animar la reaparición individual de cada elemento
                gsap.fromTo(header,
                    { opacity: 0, y: -50 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
                );
                gsap.fromTo(nivelesContainer,
                    { opacity: 0, y: -50 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.2 }
                );
                gsap.fromTo(nivelesDetalles,
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.4 }
                );
                gsap.fromTo(nuevoHeader,
                    { opacity: 0, y: -50 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.4 }
                );

                // Animar la aparición de los elementos internos (temas)
                gsap.from(".tema-item", {
                    opacity: 0,
                    y: 15,
                    stagger: 0.1,
                    duration: 0.3,
                    ease: "back.out(1.5)"
                });

                // Restaurar el scroll al inicio
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }


    // Función para ir al taller práctico (placeholder)
    function irATallerPractico() {
        // Obtener el tema actual
    const temaActual = temaDetalleTitulo.textContent;
    
    // Definir qué conjunto de preguntas usar según el tema
    let preguntas;
    switch(temaActual) {
        case "Verbo 'to be'":
                preguntas = preguntasToBe;
                break;
            case "Pronombres personales":
                preguntas = preguntasPronombres;
                break;
            case "Artículos":
                preguntas = preguntasArticulos;
                break;
            case "Sustantivos":
                preguntas = preguntasSustantivos;
                break;
            case "Adjetivos posesivos":
                preguntas = preguntasAdjetivosPosesivos;
                break;
            case "Presente simple":
                preguntas = preguntasPresenteSimple;
                break;
            case "Presente continuo":
                preguntas = preguntasPresenteContinuo;
                break;
            case "Pasado simple":
                preguntas = preguntasPasadoSimple;
                break;
            case "Comparativos y superlativos":
                preguntas = preguntasComparativosSuperlativos;
                break;
            case "Adverbios de frecuencia":
                preguntas = preguntasAdverbiosFrecuencia;
                break;
            case "Preposiciones de lugar":
                preguntas = preguntasPreposiciones;
                break;
            case "Futuro con 'going to'":
                preguntas = preguntasFuturo;
                break;
            case "Presente perfecto":
                preguntas = preguntasPresentePerfecto;
                break;
            case "Pasado continuo":
                preguntas = preguntasPasadoContinuo;
                break;
            case "Presente perfecto":
                preguntas = preguntasPresentePerfecto;
                break;
            case "Pasado continuo":
                preguntas = preguntasPasadoContinuo;
                break;
            case "Condicionales tipo 1 y 2":
                preguntas = preguntasCondicionales;
                break;
            case "Verbos modales":
                preguntas = preguntasVerbosModales;
                break;
            case "Voz pasiva":
                preguntas = preguntasVozPasiva;
                break;
            case "Phrasal verbs comunes":
                preguntas = preguntasPhrasalVerbs;
                break;
        default:
            // Si no hay preguntas disponibles para el tema
            alert("El taller práctico para este tema se encuentra en desarrollo.");
            return;
    }
    
    // Si hay preguntas para el tema, mostrar el taller
    if (preguntas) {
        // Animación de salida para el detalle del tema
        gsap.to(temaDetalleContainer, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            onComplete: () => {
                temaDetalleContainer.style.display = "none";
                mostrarTallerPractico(temaActual);
            }
        });
    }
}

    // Objeto con las preguntas para el tema "Verbo 'to be'"
    const preguntasToBe = [
        {
            pregunta: "¿Cuál es la forma correcta para la primera persona singular del verbo 'to be' en presente?",
            opciones: ["am", "is", "are", "be"],
            respuestaCorrecta: 0,
            explicacion: "La forma correcta para 'I' (primera persona singular) es 'am'. Ejemplo: 'I am a student.'"
        },
        {
            pregunta: "Selecciona la oración correcta:",
            opciones: [
                "She are happy.",
                "She is happy.",
                "She am happy.",
                "She be happy."
            ],
            respuestaCorrecta: 1,
            explicacion: "Para tercera persona singular (she), la forma correcta del verbo 'to be' es 'is'."
        },
        {
            pregunta: "¿Cuál es la forma negativa correcta de 'He is a doctor'?",
            opciones: [
                "He not is a doctor.",
                "He isn't a doctor.",
                "He don't is a doctor.",
                "He not a doctor."
            ],
            respuestaCorrecta: 1,
            explicacion: "La forma negativa correcta se forma añadiendo 'not' después del verbo: He is not (o He isn't) a doctor."
        },
        {
            pregunta: "Completa la pregunta: '_____ they students?'",
            opciones: ["Is", "Am", "Are", "Be"],
            respuestaCorrecta: 2,
            explicacion: "Para formar preguntas con la tercera persona plural (they), usamos 'Are'. Ejemplo: 'Are they students?'"
        },
        {
            pregunta: "Selecciona la respuesta correcta a la pregunta: 'Are you a teacher?'",
            opciones: [
                "Yes, I are.",
                "Yes, I is.",
                "Yes, I am.",
                "Yes, am I."
            ],
            respuestaCorrecta: 2,
            explicacion: "La respuesta correcta es 'Yes, I am.' ya que la primera persona singular usa 'am'."
        },
        {
            pregunta: "¿Cuál es la forma del verbo 'to be' para 'it' en presente?",
            opciones: ["am", "is", "are", "be"],
            respuestaCorrecta: 1,
            explicacion: "Para la tercera persona singular (it), usamos 'is'. Ejemplo: 'It is cold today.'"
        },
        {
            pregunta: "Identifica la oración incorrecta:",
            opciones: [
                "We are students.",
                "You are happy.",
                "They am tired.",
                "He is busy."
            ],
            respuestaCorrecta: 2,
            explicacion: "'They am tired' es incorrecto. Debería ser 'They are tired' ya que 'they' usa la forma 'are'."
        },
        {
            pregunta: "Completa la oración: 'I _____ not from Spain.'",
            opciones: ["is", "am", "are", "be"],
            respuestaCorrecta: 1,
            explicacion: "Para la primera persona singular (I) en negativo, usamos 'am'. Ejemplo: 'I am not from Spain.'"
        },
        {
            pregunta: "¿Cómo se forma una pregunta con el verbo 'to be'?",
            opciones: [
                "Añadiendo do/does antes del sujeto",
                "Colocando el verbo to be después del sujeto",
                "Colocando el verbo to be antes del sujeto",
                "Añadiendo el signo de interrogación al final"
            ],
            respuestaCorrecta: 2,
            explicacion: "Las preguntas con 'to be' se forman colocando el verbo (am/is/are) antes del sujeto. Ejemplo: 'Is she happy?'"
        },
        {
            pregunta: "¿Cuál es la conjugación correcta del verbo 'to be' en presente?",
            opciones: [
                "I am, you is, he/she/it is, we are, you are, they are",
                "I am, you are, he/she/it is, we are, you are, they are",
                "I am, you are, he/she/it are, we is, you are, they is",
                "I is, you are, he/she/it is, we am, you are, they are"
            ],
            respuestaCorrecta: 1,
            explicacion: "La conjugación correcta es: I am, you are, he/she/it is, we are, you are, they are"
        }
    ];
    // Objeto con las preguntas para el tema "Pronombres personales"
const preguntasPronombres = [
    {
        pregunta: "¿Cuál es el pronombre de primera persona singular en inglés?",
        opciones: ["You", "He", "I", "We"],
        respuestaCorrecta: 2,
        explicacion: "El pronombre de primera persona singular en inglés es 'I' (yo)."
    },
    {
        pregunta: "¿Cuál de estos pronombres se usa para hablar de un grupo que incluye al hablante?",
        opciones: ["You", "They", "We", "I"],
        respuestaCorrecta: 2,
        explicacion: "'We' (nosotros/nosotras) se usa para hablar de un grupo que incluye a la persona que habla."
    },
    {
        pregunta: "¿Qué pronombre usarías para referirte a una mujer?",
        opciones: ["He", "She", "It", "They"],
        respuestaCorrecta: 1,
        explicacion: "'She' (ella) es el pronombre personal que se usa para referirse a una mujer."
    },
    {
        pregunta: "¿Cuál es el pronombre correcto para hablar de un objeto inanimado?",
        opciones: ["He", "She", "It", "They"],
        respuestaCorrecta: 2,
        explicacion: "'It' se usa para objetos inanimados, animales (cuando no se especifica el género) y bebés (cuando no se quiere especificar el género)."
    },
    {
        pregunta: "Selecciona la oración que usa correctamente el pronombre de segunda persona:",
        opciones: [
            "You is my friend.",
            "You am my friend.",
            "You are my friend.",
            "You be my friend."
        ],
        respuestaCorrecta: 2,
        explicacion: "'You' (tú/usted/ustedes/vosotros) siempre va acompañado de 'are' en presente con el verbo 'to be'."
    },
    {
        pregunta: "¿Qué pronombre usarías para referirte a dos o más personas que no incluyen al hablante?",
        opciones: ["We", "You", "They", "Them"],
        respuestaCorrecta: 2,
        explicacion: "'They' (ellos/ellas) se usa para referirse a dos o más personas u objetos que no incluyen al hablante."
    },
    {
        pregunta: "Completa la oración: '_____ is a doctor.'",
        opciones: ["He", "They", "We", "You"],
        respuestaCorrecta: 0,
        explicacion: "'He' (él) se usa para referirse a un hombre y va con el verbo en tercera persona singular 'is'."
    },
    {
        pregunta: "¿Cuál es el pronombre sujeto de segunda persona en inglés?",
        opciones: ["You", "Your", "Yours", "Yourself"],
        respuestaCorrecta: 0,
        explicacion: "'You' es el pronombre sujeto de segunda persona, usado para quien escucha o lee (tú, usted, ustedes, vosotros)."
    },
    {
        pregunta: "¿Cuál es la diferencia principal entre 'he', 'she' e 'it'?",
        opciones: [
            "No hay diferencia, son intercambiables",
            "Se usan para diferentes tiempos verbales",
            "Se refieren a personas de diferente nivel social",
            "Se refieren a diferentes géneros y a objetos"
        ],
        respuestaCorrecta: 3,
        explicacion: "'He' se usa para hombres, 'she' para mujeres e 'it' para objetos, animales o conceptos sin género específico."
    },
    {
        pregunta: "Identifica la oración que usa incorrectamente los pronombres:",
        opciones: [
            "They are doctors.",
            "We are students.",
            "It is raining.",
            "She am happy."
        ],
        respuestaCorrecta: 3,
        explicacion: "'She am happy' es incorrecto. Debería ser 'She is happy' porque 'she' es tercera persona singular y va con 'is'."
    }
];
// Objeto con las preguntas para el tema "Artículos"
const preguntasArticulos = [
    {
        pregunta: "¿Cuáles son los artículos indefinidos en inglés?",
        opciones: ["A y an", "The", "This y that", "These y those"],
        respuestaCorrecta: 0,
        explicacion: "Los artículos indefinidos en inglés son 'a' y 'an'. Se usan para referirse a algo no específico o mencionado por primera vez."
    },
    {
        pregunta: "¿Cuál es el artículo definido en inglés?",
        opciones: ["A", "An", "The", "Some"],
        respuestaCorrecta: 2,
        explicacion: "El artículo definido en inglés es 'the'. Se usa para hablar de algo específico o ya mencionado anteriormente."
    },
    {
        pregunta: "¿Cuándo se usa 'an' en lugar de 'a'?",
        opciones: [
            "Antes de cualquier sustantivo",
            "Antes de sustantivos que empiezan con vocal o sonido vocálico",
            "Antes de sustantivos que empiezan con consonante",
            "Antes de sustantivos en plural"
        ],
        respuestaCorrecta: 1,
        explicacion: "Se usa 'an' antes de palabras que empiezan con sonido vocálico (a, e, i, o, u). Por ejemplo: an apple, an hour."
    },
    {
        pregunta: "Selecciona la oración correcta:",
        opciones: [
            "I have a apple.",
            "I have an apple.",
            "I have the apple.",
            "I have apple."
        ],
        respuestaCorrecta: 1,
        explicacion: "La opción correcta es 'I have an apple' porque 'apple' comienza con vocal, por lo que usamos 'an'."
    },
    {
        pregunta: "¿Cuándo usamos 'the'?",
        opciones: [
            "Solo con sustantivos en plural",
            "Solo con sustantivos contables",
            "Cuando hablamos de algo específico o ya mencionado",
            "Solo en preguntas"
        ],
        respuestaCorrecta: 2,
        explicacion: "Usamos 'the' cuando nos referimos a algo específico o que ya ha sido mencionado anteriormente."
    },
    {
        pregunta: "Completa la oración: 'I need _____ umbrella because it's raining.'",
        opciones: ["a", "an", "the", "No se necesita artículo"],
        respuestaCorrecta: 1,
        explicacion: "La palabra 'umbrella' comienza con el sonido vocálico /ʌ/, por lo que usamos 'an'."
    },
    {
        pregunta: "¿En cuál de estas oraciones NO es necesario el artículo?",
        opciones: [
            "He is ___ doctor.",
            "I like ___ music.",
            "She has ___ cat.",
            "They live in ___ small house."
        ],
        respuestaCorrecta: 1,
        explicacion: "No se usa artículo con sustantivos incontables en sentido general: 'I like music'. No necesita artículo."
    },
    {
        pregunta: "Identifica la oración donde el uso del artículo es INCORRECTO:",
        opciones: [
            "She goes to the school every day.",
            "The Eiffel Tower is in Paris.",
            "I have the breakfast at 8 AM.",
            "The water in this lake is clean."
        ],
        respuestaCorrecta: 2,
        explicacion: "'I have the breakfast' es incorrecto. Debería ser 'I have breakfast' sin artículo, ya que hablamos de la comida en general."
    },
    {
        pregunta: "Completa la oración: 'My father is ___ engineer.'",
        opciones: ["a", "an", "the", "No se necesita artículo"],
        respuestaCorrecta: 1,
        explicacion: "La palabra 'engineer' comienza con el sonido vocálico /e/, por lo tanto, usamos 'an'."
    },
    {
        pregunta: "¿Cuál es el uso correcto para hablar de países?",
        opciones: [
            "Siempre usamos 'the'",
            "Nunca usamos artículos con países",
            "Usamos 'the' con países que son plurales o compuestos (como The United States)",
            "Usamos 'a' o 'an' con todos los países"
        ],
        respuestaCorrecta: 2,
        explicacion: "Generalmente no usamos artículos con países (Spain, Japan), pero sí usamos 'the' con países que son plurales o nombres compuestos (The United States, The United Kingdom)."
    }
];
// Objeto con las preguntas para el tema "Sustantivos"
const preguntasSustantivos = [
    {
        pregunta: "¿Qué son los sustantivos?",
        opciones: [
            "Palabras que indican acciones",
            "Palabras que nombran personas, lugares, cosas o ideas",
            "Palabras que describen cualidades",
            "Palabras que reemplazan nombres"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los sustantivos son palabras que nombran personas, lugares, cosas o ideas. Por ejemplo: teacher, London, table, happiness."
    },
    {
        pregunta: "¿Cuál es la diferencia entre sustantivos contables e incontables?",
        opciones: [
            "Los contables son siempre plurales, los incontables siempre singulares",
            "Los contables se pueden contar y tienen forma plural, los incontables no",
            "Los contables son objetos, los incontables son conceptos",
            "No hay diferencia, todos los sustantivos funcionan igual"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los sustantivos contables pueden contarse individualmente y tienen forma plural (one book, two books). Los incontables no pueden contarse individualmente y no tienen forma plural (water, music)."
    },
    {
        pregunta: "¿Cómo se forma generalmente el plural de los sustantivos en inglés?",
        opciones: [
            "Añadiendo -s o -es al final",
            "Cambiando las vocales internas",
            "Duplicando la última letra",
            "Añadiendo -en al final"
        ],
        respuestaCorrecta: 0,
        explicacion: "El plural de la mayoría de los sustantivos en inglés se forma añadiendo -s (car → cars) o -es (box → boxes) al final de la palabra."
    },
    {
        pregunta: "¿Cuál es el plural correcto de 'child'?",
        opciones: ["childs", "childes", "childen", "children"],
        respuestaCorrecta: 3,
        explicacion: "'Child' es un sustantivo con plural irregular. Su forma plural es 'children'."
    },
    {
        pregunta: "Identifica el sustantivo incontable:",
        opciones: ["dog", "book", "information", "table"],
        respuestaCorrecta: 2,
        explicacion: "'Information' es un sustantivo incontable. No se puede decir 'one information' o 'two informations'. Se usa siempre en singular."
    },
    {
        pregunta: "¿Cómo se forma el plural de los sustantivos que terminan en -y precedida de consonante?",
        opciones: [
            "Se añade -s",
            "Se cambia -y por -ies",
            "Se añade -es",
            "Se mantiene igual"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cuando un sustantivo termina en -y precedida de consonante, el plural se forma cambiando la -y por -ies: baby → babies, city → cities."
    },
    {
        pregunta: "¿Cuál es el plural correcto de 'mouse' (ratón)?",
        opciones: ["mouses", "mice", "mousen", "mouse"],
        respuestaCorrecta: 1,
        explicacion: "'Mouse' tiene un plural irregular. Su forma plural es 'mice'."
    },
    {
        pregunta: "¿Qué artículo usamos con sustantivos incontables?",
        opciones: [
            "A o an",
            "The",
            "Some o no artículo",
            "These o those"
        ],
        respuestaCorrecta: 2,
        explicacion: "Con sustantivos incontables usamos 'some' o ningún artículo para hablar en general (water, some water), o 'the' para específicos (the water in this bottle)."
    },
    {
        pregunta: "Selecciona la oración con uso correcto del sustantivo incontable:",
        opciones: [
            "I need some advices.",
            "She gave me many informations.",
            "I have a lot of money.",
            "He has three furnitures."
        ],
        respuestaCorrecta: 2,
        explicacion: "'I have a lot of money' es correcto. 'Money' es incontable y se usa con expresiones como 'a lot of', pero no con numerales directos."
    },
    {
        pregunta: "Identifica el sustantivo colectivo:",
        opciones: ["person", "dog", "team", "book"],
        respuestaCorrecta: 2,
        explicacion: "'Team' es un sustantivo colectivo, que se refiere a un grupo de personas que actúan como una unidad."
    }
];
// Objeto con las preguntas para el tema "Adjetivos posesivos"
const preguntasAdjetivosPosesivos = [
    {
        pregunta: "¿Qué son los adjetivos posesivos en inglés?",
        opciones: [
            "Palabras que indican cantidad",
            "Palabras que describen cualidades",
            "Palabras que indican a quién pertenece algo",
            "Palabras que reemplazan nombres"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los adjetivos posesivos son palabras que indican a quién pertenece algo y siempre acompañan a un sustantivo (my book, your car)."
    },
    {
        pregunta: "¿Cuál es el adjetivo posesivo para la primera persona singular?",
        opciones: ["My", "Your", "His", "Their"],
        respuestaCorrecta: 0,
        explicacion: "'My' es el adjetivo posesivo para la primera persona singular (yo). Ejemplo: 'This is my book' (Este es mi libro)."
    },
    {
        pregunta: "Completa la oración: 'She loves _____ parents.'",
        opciones: ["she", "her", "hers", "she's"],
        respuestaCorrecta: 1,
        explicacion: "'Her' es el adjetivo posesivo correcto para la tercera persona singular femenino. 'She loves her parents' (Ella ama a sus padres)."
    },
    {
        pregunta: "¿Cuál es el adjetivo posesivo correcto para 'they'?",
        opciones: ["his", "her", "its", "their"],
        respuestaCorrecta: 3,
        explicacion: "'Their' es el adjetivo posesivo que corresponde al pronombre 'they'. Ejemplo: 'They love their dog' (Ellos aman a su perro)."
    },
    {
        pregunta: "Selecciona la oración que usa el adjetivo posesivo correctamente:",
        opciones: [
            "I love you car.",
            "She reads him book.",
            "The dog eats its food.",
            "We write they essays."
        ],
        respuestaCorrecta: 2,
        explicacion: "'The dog eats its food' es la oración correcta. 'Its' es el adjetivo posesivo para 'it'."
    },
    {
        pregunta: "Completa la oración: 'We finished _____ project yesterday.'",
        opciones: ["we", "us", "our", "ours"],
        respuestaCorrecta: 2,
        explicacion: "'Our' es el adjetivo posesivo para 'we'. 'We finished our project yesterday' (Terminamos nuestro proyecto ayer)."
    },
    {
        pregunta: "¿Qué adjetivo posesivo corresponde a 'you' (singular)?",
        opciones: ["you", "your", "yours", "you're"],
        respuestaCorrecta: 1,
        explicacion: "'Your' es el adjetivo posesivo para 'you', tanto en singular como en plural. Ejemplo: 'Your book is on the table' (Tu libro está sobre la mesa)."
    },
    {
        pregunta: "Identifica la oración con error en el uso del adjetivo posesivo:",
        opciones: [
            "He loves his family.",
            "They clean their house.",
            "The cat drinks it's milk.",
            "I found my keys."
        ],
        respuestaCorrecta: 2,
        explicacion: "'The cat drinks it's milk' es incorrecta. 'It's' es la contracción de 'it is', mientras que el adjetivo posesivo es 'its' (sin apóstrofo)."
    },
    {
        pregunta: "¿Cuál es la diferencia entre 'his' y 'her'?",
        opciones: [
            "No hay diferencia, son intercambiables",
            "'His' se usa para hombres y 'her' para mujeres",
            "'His' es para plural y 'her' para singular",
            "'His' es formal y 'her' es informal"
        ],
        respuestaCorrecta: 1,
        explicacion: "'His' es el adjetivo posesivo para hombres (tercera persona singular masculino) y 'her' para mujeres (tercera persona singular femenino)."
    },
    {
        pregunta: "Completa la tabla de adjetivos posesivos correctamente:",
        opciones: [
            "I → my, you → your, he → him, she → her, it → its, we → our, they → their",
            "I → my, you → your, he → his, she → her, it → its, we → our, they → their",
            "I → mine, you → yours, he → his, she → hers, it → its, we → ours, they → theirs",
            "I → my, you → yours, he → his, she → her, it → it, we → we, they → them"
        ],
        respuestaCorrecta: 1,
        explicacion: "La lista correcta de adjetivos posesivos es: I → my, you → your, he → his, she → her, it → its, we → our, they → their."
    }
];
// Objeto con las preguntas para el tema "Presente simple"
const preguntasPresenteSimple = [
    {
        pregunta: "¿Cuándo usamos el presente simple?",
        opciones: [
            "Para acciones que están ocurriendo ahora mismo",
            "Para hablar del futuro",
            "Para rutinas, hábitos y verdades generales",
            "Solo para hablar de acciones pasadas"
        ],
        respuestaCorrecta: 2,
        explicacion: "El presente simple se usa para hablar de rutinas, hábitos, hechos o verdades generales. Ejemplo: 'I go to school every day' (Voy a la escuela todos los días)."
    },
    {
        pregunta: "¿Cómo se forma la tercera persona singular (he, she, it) en presente simple?",
        opciones: [
            "Añadiendo -ing al verbo",
            "Añadiendo -s o -es al verbo",
            "Añadiendo -ed al verbo",
            "El verbo no cambia"
        ],
        respuestaCorrecta: 1,
        explicacion: "En la tercera persona singular (he, she, it), se añade -s o -es al verbo. Ejemplo: He works, She teaches, It runs."
    },
    {
        pregunta: "Selecciona la oración correcta en presente simple:",
        opciones: [
            "She play tennis every weekend.",
            "He studying English now.",
            "They goes to school by bus.",
            "I watch TV every night."
        ],
        respuestaCorrecta: 3,
        explicacion: "'I watch TV every night' es correcta. Para 'I', el verbo en presente simple no cambia su forma base."
    },
    {
        pregunta: "¿Cómo se forma una pregunta en presente simple?",
        opciones: [
            "Colocando el verbo principal antes del sujeto",
            "Usando el auxiliar do/does antes del sujeto, seguido del verbo en forma base",
            "Añadiendo -ing al verbo principal",
            "Usando el auxiliar has/have antes del sujeto"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para preguntas en presente simple, usamos el auxiliar do/does antes del sujeto, seguido del verbo en su forma base. Ejemplo: 'Do you like coffee?', 'Does she speak English?'"
    },
    {
        pregunta: "¿Cómo se forma la negación en presente simple?",
        opciones: [
            "Añadiendo not después del verbo principal",
            "Usando do/does + not + forma base del verbo",
            "Añadiendo -n't al verbo principal",
            "Usando is/are + not + verbo"
        ],
        respuestaCorrecta: 1,
        explicacion: "La negación en presente simple se forma con el auxiliar do/does + not (o don't/doesn't) + la forma base del verbo. Ejemplo: 'I don't like coffee', 'She doesn't speak French'."
    },
    {
        pregunta: "Completa la oración: 'He _____ to work every day.'",
        opciones: ["go", "goes", "going", "is go"],
        respuestaCorrecta: 1,
        explicacion: "La forma correcta es 'goes' porque con he/she/it (tercera persona singular) añadimos -s o -es al verbo en presente simple."
    },
    {
        pregunta: "¿Qué expresiones de tiempo son comunes con el presente simple?",
        opciones: [
            "Now, at the moment, right now",
            "Yesterday, last week, last month",
            "Every day, always, never, usually, often",
            "Tomorrow, next week, in the future"
        ],
        respuestaCorrecta: 2,
        explicacion: "El presente simple se usa frecuentemente con expresiones de tiempo como: every day, always, never, usually, often, sometimes, etc."
    },
    {
        pregunta: "Selecciona la forma negativa correcta: 'She _____ coffee.'",
        opciones: [
            "no likes",
            "not likes",
            "don't like",
            "doesn't like"
        ],
        respuestaCorrecta: 3,
        explicacion: "La negación correcta es 'doesn't like' porque usamos 'doesn't' (does not) con la tercera persona singular, seguido de la forma base del verbo (sin la -s)."
    },
    {
        pregunta: "Identifica la pregunta correcta en presente simple:",
        opciones: [
            "Do he work on Saturdays?",
            "Does they live in London?",
            "Does she study French?",
            "Do you goes to school?"
        ],
        respuestaCorrecta: 2,
        explicacion: "'Does she study French?' es correcta. Usamos 'does' con tercera persona singular (she) y el verbo en su forma base, sin -s."
    },
    {
        pregunta: "¿Cuál es la forma del verbo 'study' en tercera persona singular?",
        opciones: ["study", "studys", "studyes", "studies"],
        respuestaCorrecta: 3,
        explicacion: "Cuando un verbo termina en consonante + y, cambiamos la y por i y añadimos -es: study → studies."
    }
];
// Objeto con las preguntas para el tema "Presente continuo"
const preguntasPresenteContinuo = [
    {
        pregunta: "¿Cuándo utilizamos el presente continuo?",
        opciones: [
            "Para acciones habituales y rutinarias",
            "Para verdades generales",
            "Para acciones que están ocurriendo en este momento o temporalmente",
            "Para eventos que ocurrieron en el pasado"
        ],
        respuestaCorrecta: 2,
        explicacion: "El presente continuo se utiliza para acciones que están ocurriendo en el momento de hablar o por un periodo temporal. Ejemplo: 'I am studying right now' (Estoy estudiando ahora mismo)."
    },
    {
        pregunta: "¿Cómo se forma el presente continuo?",
        opciones: [
            "verbo principal + -ed",
            "do/does + verbo principal",
            "be (am/is/are) + verbo principal + -ing",
            "have/has + participio pasado"
        ],
        respuestaCorrecta: 2,
        explicacion: "El presente continuo se forma con el verbo 'be' (am/is/are) + el verbo principal con terminación -ing. Ejemplo: 'She is reading a book' (Ella está leyendo un libro)."
    },
    {
        pregunta: "Selecciona la oración correcta en presente continuo:",
        opciones: [
            "She reading a book now.",
            "He is play football at the moment.",
            "They are studying for the exam right now.",
            "I am cook dinner every day."
        ],
        respuestaCorrecta: 2,
        explicacion: "'They are studying for the exam right now' es correcta. Forma: sujeto + am/is/are + verbo-ing."
    },
    {
        pregunta: "¿Cómo se forma la negación en presente continuo?",
        opciones: [
            "Añadiendo 'not' al verbo principal",
            "Usando don't/doesn't + verbo-ing",
            "Colocando am/is/are + not + verbo-ing",
            "Añadiendo no antes del verbo principal"
        ],
        respuestaCorrecta: 2,
        explicacion: "La negación en presente continuo se forma colocando 'not' después del verbo 'be': am not / is not / are not (o isn't / aren't) + verbo-ing. Ejemplo: 'She isn't watching TV'."
    },
    {
        pregunta: "¿Cómo se forma una pregunta en presente continuo?",
        opciones: [
            "Añadiendo do/does al inicio",
            "Colocando el verbo principal antes del sujeto",
            "Colocando am/is/are antes del sujeto",
            "Añadiendo un signo de interrogación"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las preguntas en presente continuo se forman colocando am/is/are antes del sujeto, seguido del verbo con -ing. Ejemplo: 'Are you studying?'"
    },
    {
        pregunta: "¿Qué expresiones de tiempo son comunes con el presente continuo?",
        opciones: [
            "Always, never, usually, every day",
            "Yesterday, last week, ago, last year",
            "Now, at the moment, currently, right now",
            "Tomorrow, next week, in the future"
        ],
        respuestaCorrecta: 2,
        explicacion: "El presente continuo se usa frecuentemente con expresiones como: now, at the moment, currently, right now, these days, etc."
    },
    {
        pregunta: "Selecciona la forma negativa correcta: 'They _____ TV right now.'",
        opciones: [
            "not watching",
            "don't watching",
            "aren't watching",
            "doesn't watch"
        ],
        respuestaCorrecta: 2,
        explicacion: "La negación correcta es 'aren't watching' (are not watching). Usamos el auxiliar 'are' con 'not' seguido del verbo con -ing."
    },
    {
        pregunta: "¿Cuál es la regla para duplicar la consonante final al añadir -ing?",
        opciones: [
            "Siempre se duplica la última consonante",
            "Se duplica si el verbo termina en consonante + vocal + consonante y la última sílaba es tónica",
            "Nunca se duplica la última consonante",
            "Se duplica solo si el verbo termina en -y"
        ],
        respuestaCorrecta: 1,
        explicacion: "Se duplica la consonante final cuando el verbo termina en consonante + vocal + consonante y la última sílaba es tónica. Ejemplo: run → running, swim → swimming."
    },
    {
        pregunta: "Identifica la pregunta correcta en presente continuo:",
        opciones: [
            "Is they working now?",
            "Are she studying?",
            "Am you sleeping?",
            "Is he watching TV?"
        ],
        respuestaCorrecta: 3,
        explicacion: "'Is he watching TV?' es la forma correcta. El auxiliar 'is' va con 'he', seguido del verbo principal con -ing."
    },
    {
        pregunta: "¿Qué sucede con los verbos que terminan en -e al añadir -ing?",
        opciones: [
            "Se mantiene la -e",
            "Se elimina la -e",
            "Se cambia -e por -y",
            "Se duplica la -e"
        ],
        respuestaCorrecta: 1,
        explicacion: "Generalmente, se elimina la -e final antes de añadir -ing. Ejemplos: write → writing, make → making, take → taking."
    }
];
// Objeto con las preguntas para el tema "Pasado simple"
const preguntasPasadoSimple = [
    {
        pregunta: "¿Cuándo se utiliza el pasado simple?",
        opciones: [
            "Para hablar de acciones que están ocurriendo ahora",
            "Para hablar de acciones o situaciones que ocurrieron y terminaron en el pasado",
            "Para hablar de acciones futuras",
            "Para hablar de acciones que comenzaron en el pasado y continúan en el presente"
        ],
        respuestaCorrecta: 1,
        explicacion: "El pasado simple se utiliza para hablar de acciones o situaciones que comenzaron y terminaron en un momento específico del pasado. Ejemplo: 'I visited my grandmother last weekend' (Visité a mi abuela el fin de semana pasado)."
    },
    {
        pregunta: "¿Cómo se forma el pasado simple de los verbos regulares?",
        opciones: [
            "Añadiendo -ing al verbo",
            "Añadiendo -s al verbo",
            "Añadiendo -ed al verbo",
            "El verbo no cambia su forma"
        ],
        respuestaCorrecta: 2,
        explicacion: "El pasado simple de los verbos regulares se forma añadiendo -ed al infinitivo del verbo. Ejemplos: work → worked, play → played, talk → talked."
    },
    {
        pregunta: "Selecciona la oración correcta en pasado simple:",
        opciones: [
            "He goed to school yesterday.",
            "She swimmed in the pool last summer.",
            "They eated dinner at 8 PM.",
            "We watched a movie last night."
        ],
        respuestaCorrecta: 3,
        explicacion: "'We watched a movie last night' es correcta. 'Watch' es un verbo regular que forma su pasado simple añadiendo -ed."
    },
    {
        pregunta: "¿Cuál es el pasado simple del verbo 'go'?",
        opciones: ["goed", "going", "gone", "went"],
        respuestaCorrecta: 3,
        explicacion: "El pasado simple de 'go' es 'went'. Es un verbo irregular que no sigue la regla de añadir -ed."
    },
    {
        pregunta: "¿Cómo se forma una pregunta en pasado simple?",
        opciones: [
            "Colocando el verbo principal antes del sujeto",
            "Usando el auxiliar did antes del sujeto, seguido del infinitivo del verbo",
            "Añadiendo -ed al verbo antes del sujeto",
            "Usando el auxiliar have/has antes del sujeto"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para preguntas en pasado simple, usamos el auxiliar 'did' antes del sujeto, seguido del verbo en su forma base (infinitivo). Ejemplo: 'Did you watch TV yesterday?'"
    },
    {
        pregunta: "¿Cómo se forma la negación en pasado simple?",
        opciones: [
            "Añadiendo not después del verbo principal",
            "Usando didn't + infinitivo del verbo",
            "Añadiendo -n't al verbo principal",
            "Usando wasn't/weren't + verbo"
        ],
        respuestaCorrecta: 1,
        explicacion: "La negación en pasado simple se forma con el auxiliar 'did' + not (o didn't) + el infinitivo del verbo. Ejemplo: 'I didn't watch TV yesterday' (No vi la televisión ayer)."
    },
    {
        pregunta: "¿Qué expresiones de tiempo son comunes con el pasado simple?",
        opciones: [
            "Now, at the moment, currently",
            "Every day, always, usually",
            "Yesterday, last week, last month, ago, in 2010",
            "Tomorrow, next week, in the future"
        ],
        respuestaCorrecta: 2,
        explicacion: "El pasado simple se usa frecuentemente con expresiones de tiempo como: yesterday, last week, last month, ago, in 2010, when I was young, etc."
    },
    {
        pregunta: "Identifica el verbo irregular en pasado simple:",
        opciones: ["played", "talked", "walked", "took"],
        respuestaCorrecta: 3,
        explicacion: "'Took' es el pasado simple del verbo irregular 'take'. Los otros son verbos regulares que siguen la regla de añadir -ed."
    },
    {
        pregunta: "Selecciona la forma negativa correcta: 'She _____ to the party last night.'",
        opciones: [
            "no went",
            "didn't went",
            "didn't go",
            "doesn't went"
        ],
        respuestaCorrecta: 2,
        explicacion: "La negación correcta es 'didn't go'. Usamos 'didn't' (did not) seguido del infinitivo del verbo sin cambios, incluso para verbos irregulares."
    },
    {
        pregunta: "¿Cuál es la pronunciación correcta de la terminación -ed en 'walked'?",
        opciones: [
            "/id/",
            "/d/",
            "/t/",
            "No se pronuncia"
        ],
        respuestaCorrecta: 2,
        explicacion: "La terminación -ed en 'walked' se pronuncia /t/ porque el verbo termina en un sonido sordo /k/. Regla: después de sonidos sordos como /p/, /k/, /f/, /s/, /ʃ/, /tʃ/, /θ/, la terminación -ed se pronuncia /t/."
    }
];
// Objeto con las preguntas para el tema "Comparativos y superlativos"
const preguntasComparativosSuperlativos = [
    {
        pregunta: "¿Cuál es la función principal de los adjetivos comparativos?",
        opciones: [
            "Describir cualidades",
            "Comparar dos personas, objetos o situaciones",
            "Indicar el grado máximo de una cualidad",
            "Expresar igualdad"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los adjetivos comparativos se utilizan para comparar dos personas, objetos o situaciones, mostrando la diferencia entre ellos. Ejemplo: 'She is taller than her brother' (Ella es más alta que su hermano)."
    },
    {
        pregunta: "¿Cómo se forma el comparativo de los adjetivos cortos (una sílaba)?",
        opciones: [
            "Añadiendo more antes del adjetivo",
            "Añadiendo -er al adjetivo",
            "Añadiendo the antes del adjetivo",
            "El adjetivo no cambia"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para adjetivos cortos (de una sílaba), normalmente formamos el comparativo añadiendo -er. Ejemplos: tall → taller, old → older, fast → faster."
    },
    {
        pregunta: "¿Cómo se forma el comparativo de los adjetivos largos (dos o más sílabas)?",
        opciones: [
            "Añadiendo -er al adjetivo",
            "Añadiendo more antes del adjetivo",
            "Añadiendo the most antes del adjetivo",
            "El adjetivo no cambia"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para adjetivos largos (de dos o más sílabas), generalmente formamos el comparativo colocando 'more' antes del adjetivo. Ejemplos: more beautiful, more expensive, more difficult."
    },
    {
        pregunta: "¿Cuál es la forma correcta del comparativo de 'good'?",
        opciones: ["gooder", "more good", "better", "goodest"],
        respuestaCorrecta: 2,
        explicacion: "El comparativo de 'good' es 'better'. Es un adjetivo irregular que no sigue las reglas normales de formación del comparativo."
    },
    {
        pregunta: "¿Cuál es la función principal de los adjetivos superlativos?",
        opciones: [
            "Comparar dos elementos",
            "Expresar igualdad",
            "Indicar el grado máximo de una cualidad entre tres o más elementos",
            "Describir cualidades básicas"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los adjetivos superlativos se utilizan para indicar el grado máximo de una cualidad entre tres o más elementos. Ejemplo: 'This is the tallest building in the city' (Este es el edificio más alto de la ciudad)."
    },
    {
        pregunta: "¿Cómo se forma el superlativo de los adjetivos cortos (una sílaba)?",
        opciones: [
            "Añadiendo most antes del adjetivo",
            "Añadiendo -er al adjetivo",
            "Añadiendo the -est al adjetivo",
            "El adjetivo no cambia"
        ],
        respuestaCorrecta: 2,
        explicacion: "Para adjetivos cortos (de una sílaba), normalmente formamos el superlativo añadiendo 'the' + adjetivo + -est. Ejemplos: tall → the tallest, old → the oldest, fast → the fastest."
    },
    {
        pregunta: "¿Cómo se forma el superlativo de los adjetivos largos (dos o más sílabas)?",
        opciones: [
            "Añadiendo -est al adjetivo",
            "Añadiendo the most antes del adjetivo",
            "Añadiendo the antes del adjetivo",
            "Añadiendo most después del adjetivo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para adjetivos largos (de dos o más sílabas), generalmente formamos el superlativo colocando 'the most' antes del adjetivo. Ejemplos: the most beautiful, the most expensive, the most difficult."
    },
    {
        pregunta: "¿Cuál es la forma correcta del superlativo de 'bad'?",
        opciones: ["baddest", "most bad", "worse", "worst"],
        respuestaCorrecta: 3,
        explicacion: "El superlativo de 'bad' es 'worst'. Es un adjetivo irregular que no sigue las reglas normales de formación del superlativo."
    },
    {
        pregunta: "Selecciona la oración correcta con un comparativo:",
        opciones: [
            "This book is more better than that one.",
            "My house is more bigger than yours.",
            "This car is more expensive than that one.",
            "She is the taller than her sister."
        ],
        respuestaCorrecta: 2,
        explicacion: "'This car is more expensive than that one' es correcta. 'Expensive' es un adjetivo largo (3 sílabas), por lo que usamos 'more' para formar el comparativo."
    },
    {
        pregunta: "Selecciona la oración correcta con un superlativo:",
        opciones: [
            "This is most interesting book I've ever read.",
            "He is tallest boy in the class.",
            "She is the most intelligent student in the school.",
            "This is the more beautiful painting in the gallery."
        ],
        respuestaCorrecta: 2,
        explicacion: "'She is the most intelligent student in the school' es correcta. Para formar el superlativo de un adjetivo largo como 'intelligent', usamos 'the most' + adjetivo."
    }
];
// Objeto con las preguntas para el tema "Futuro con 'will' y 'going to'"
const preguntasFuturo = [
    {
        pregunta: "¿Cuándo usamos 'will' para hablar del futuro?",
        opciones: [
            "Solo para planes organizados con antelación",
            "Para predicciones, decisiones espontáneas, promesas y ofrecimientos",
            "Únicamente para eventos que ocurrirán en el pasado",
            "Solo para hablar de rutinas diarias"
        ],
        respuestaCorrecta: 1,
        explicacion: "Usamos 'will' para hacer predicciones sobre el futuro, tomar decisiones espontáneas en el momento de hablar, hacer promesas y ofrecimientos. Ejemplo: 'I think it will rain tomorrow' (Creo que lloverá mañana)."
    },
    {
        pregunta: "¿Cuándo usamos 'going to' para hablar del futuro?",
        opciones: [
            "Solo para decisiones espontáneas",
            "Para planes e intenciones futuras y predicciones basadas en evidencia presente",
            "Únicamente para promesas",
            "Solo para ofrecimientos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Usamos 'going to' para hablar de planes e intenciones futuras ya decididas y para hacer predicciones basadas en evidencia presente. Ejemplo: 'I'm going to study medicine' (Voy a estudiar medicina)."
    },
    {
        pregunta: "¿Cómo se forma una oración afirmativa con 'will'?",
        opciones: [
            "will + sujeto + infinitivo",
            "sujeto + will + infinitivo",
            "sujeto + will + -ing",
            "will + sujeto + participio pasado"
        ],
        respuestaCorrecta: 1,
        explicacion: "La estructura afirmativa con 'will' es: sujeto + will + infinitivo (sin 'to'). Ejemplo: 'She will call you tomorrow' (Ella te llamará mañana)."
    },
    {
        pregunta: "¿Cómo se forma una oración afirmativa con 'going to'?",
        opciones: [
            "sujeto + going to + infinitivo",
            "sujeto + am/is/are + going to + infinitivo",
            "sujeto + will + going to + infinitivo",
            "going to + sujeto + infinitivo"
        ],
        respuestaCorrecta: 1,
        explicacion: "La estructura afirmativa con 'going to' es: sujeto + am/is/are + going to + infinitivo. Ejemplo: 'I am going to visit my grandmother this weekend' (Voy a visitar a mi abuela este fin de semana)."
    },
    {
        pregunta: "¿Cómo se forma una pregunta con 'will'?",
        opciones: [
            "will + sujeto + infinitivo?",
            "sujeto + will + infinitivo?",
            "do + sujeto + will + infinitivo?",
            "will + sujeto + going to + infinitivo?"
        ],
        respuestaCorrecta: 0,
        explicacion: "Para formar preguntas con 'will', invertimos el orden: will + sujeto + infinitivo? Ejemplo: 'Will you help me?' (¿Me ayudarás?)."
    },
    {
        pregunta: "¿Cómo se forma una pregunta con 'going to'?",
        opciones: [
            "going to + sujeto + infinitivo?",
            "am/is/are + sujeto + going to + infinitivo?",
            "am/is/are + going to + sujeto + infinitivo?",
            "am/is/are + sujeto + going to?"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para formar preguntas con 'going to', comenzamos con am/is/are: am/is/are + sujeto + going to + infinitivo? Ejemplo: 'Are you going to attend the meeting?' (¿Vas a asistir a la reunión?)."
    },
    {
        pregunta: "¿Cómo se forma la negación con 'will'?",
        opciones: [
            "sujeto + will not/won't + infinitivo",
            "sujeto + don't will + infinitivo",
            "will + not + sujeto + infinitivo",
            "sujeto + not + will + infinitivo"
        ],
        respuestaCorrecta: 0,
        explicacion: "La negación con 'will' se forma: sujeto + will not (o won't) + infinitivo. Ejemplo: 'I won't be late' (No llegaré tarde)."
    },
    {
        pregunta: "¿Cómo se forma la negación con 'going to'?",
        opciones: [
            "sujeto + not + going to + infinitivo",
            "sujeto + am/is/are + not going to + infinitivo",
            "sujeto + don't + going to + infinitivo",
            "sujeto + am/is/are + going to + not + infinitivo"
        ],
        respuestaCorrecta: 1,
        explicacion: "La negación con 'going to' se forma: sujeto + am/is/are + not + going to + infinitivo. Ejemplo: 'She isn't going to buy a new car' (Ella no va a comprar un coche nuevo)."
    },
    {
        pregunta: "Completa la oración: 'Look at those clouds! It _____ rain.'",
        opciones: [
            "will",
            "is going to",
            "goes to",
            "shall"
        ],
        respuestaCorrecta: 1,
        explicacion: "La respuesta correcta es 'is going to', ya que estamos haciendo una predicción basada en evidencia presente (las nubes que vemos ahora)."
    },
    {
        pregunta: "Selecciona la oración que expresa una decisión espontánea:",
        opciones: [
            "I'm going to call a taxi - I've already decided.",
            "The phone is ringing. I'll answer it.",
            "We're going to move to Canada next year.",
            "She is going to be a doctor when she grows up."
        ],
        respuestaCorrecta: 1,
        explicacion: "'The phone is ringing. I'll answer it.' expresa una decisión espontánea tomada en el momento de hablar, por lo que usamos 'will'."
    }
];
// Objeto con las preguntas para el tema "Adverbios de frecuencia"
const preguntasAdverbiosFrecuencia = [
    {
        pregunta: "¿Qué son los adverbios de frecuencia?",
        opciones: [
            "Palabras que indican cómo se realiza una acción",
            "Palabras que indican cuándo ocurre una acción",
            "Palabras que indican con qué frecuencia ocurre una acción",
            "Palabras que indican dónde ocurre una acción"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los adverbios de frecuencia son palabras que indican con qué frecuencia o regularidad ocurre una acción. Ejemplos: always, usually, often, sometimes, rarely, never."
    },
    {
        pregunta: "¿Cuál de los siguientes NO es un adverbio de frecuencia?",
        opciones: [
            "Sometimes",
            "Never",
            "Usually",
            "Quickly"
        ],
        respuestaCorrecta: 3,
        explicacion: "'Quickly' no es un adverbio de frecuencia, sino un adverbio de modo que indica cómo se realiza una acción. Los otros son adverbios de frecuencia."
    },
    {
        pregunta: "¿Cuál es el orden correcto de los adverbios de frecuencia de mayor a menor frecuencia?",
        opciones: [
            "Always, usually, often, sometimes, rarely, never",
            "Never, rarely, sometimes, often, usually, always",
            "Always, often, usually, sometimes, rarely, never",
            "Never, rarely, often, sometimes, usually, always"
        ],
        respuestaCorrecta: 0,
        explicacion: "El orden correcto de mayor a menor frecuencia es: always (100%), usually (80-90%), often (70%), sometimes (50%), rarely/seldom (10-20%), never (0%)."
    },
    {
        pregunta: "¿Dónde se coloca generalmente el adverbio de frecuencia en una oración simple?",
        opciones: [
            "Al final de la oración",
            "Al principio de la oración",
            "Después del verbo principal",
            "Antes del verbo principal o después del verbo 'to be'"
        ],
        respuestaCorrecta: 3,
        explicacion: "Generalmente, los adverbios de frecuencia se colocan antes del verbo principal, pero después del verbo 'to be'. Ejemplos: 'I always eat breakfast' / 'She is never late'."
    },
    {
        pregunta: "Completa la oración: 'She _____ goes to the gym on Sundays.'",
        opciones: [
            "usually",
            "rare",
            "frequent",
            "most"
        ],
        respuestaCorrecta: 0,
        explicacion: "'She usually goes to the gym on Sundays' es correcta. 'Usually' es un adverbio de frecuencia que indica que algo ocurre con regularidad, pero no siempre."
    },
    {
        pregunta: "¿Qué porcentaje de frecuencia representa aproximadamente 'sometimes'?",
        opciones: [
            "100%",
            "75%",
            "50%",
            "25%"
        ],
        respuestaCorrecta: 2,
        explicacion: "'Sometimes' representa aproximadamente un 50% de frecuencia, indicando que algo ocurre en ocasiones, ni muy frecuentemente ni muy raramente."
    },
    {
        pregunta: "¿Cuál es la posición correcta del adverbio de frecuencia en esta oración: 'She has ___ been to Paris'?",
        opciones: [
            "She has been to Paris always",
            "She always has been to Paris",
            "She has always been to Paris",
            "Always she has been to Paris"
        ],
        respuestaCorrecta: 2,
        explicacion: "La posición correcta es 'She has always been to Paris'. En los tiempos perfectos, el adverbio de frecuencia se coloca entre el auxiliar (has/have) y el participio pasado (been)."
    },
    {
        pregunta: "Selecciona la oración correcta:",
        opciones: [
            "I go never to bed before midnight.",
            "I never go to bed before midnight.",
            "Never I go to bed before midnight.",
            "I go to bed never before midnight."
        ],
        respuestaCorrecta: 1,
        explicacion: "'I never go to bed before midnight' es correcta. El adverbio 'never' se coloca antes del verbo principal 'go'."
    },
    {
        pregunta: "¿Cómo se puede formar una pregunta usando adverbios de frecuencia?",
        opciones: [
            "Colocando el adverbio al inicio de la oración con signo de interrogación",
            "Los adverbios de frecuencia no pueden usarse en preguntas",
            "Usando 'How often' al inicio de la pregunta",
            "Colocando el adverbio después del verbo con signo de interrogación"
        ],
        respuestaCorrecta: 2,
        explicacion: "Para preguntar sobre la frecuencia, usamos 'How often' al inicio de la pregunta. Ejemplo: 'How often do you go to the cinema?' (¿Con qué frecuencia vas al cine?)."
    },
    {
        pregunta: "¿Qué adverbio de frecuencia usarías para decir que haces algo todos los días sin excepción?",
        opciones: [
            "Usually",
            "Often",
            "Always",
            "Normally"
        ],
        respuestaCorrecta: 2,
        explicacion: "'Always' es el adverbio que indica que algo ocurre el 100% de las veces, sin excepción. Es la mayor frecuencia posible."
    }
];
// Objeto con las preguntas para el tema "Preposiciones de lugar y tiempo"
const preguntasPreposiciones = [
    {
        pregunta: "¿Qué preposición es correcta en la siguiente frase? 'The book is ___ the table.'",
        opciones: ["in", "on", "at", "between"],
        respuestaCorrecta: 1,
        explicacion: "La preposición correcta es 'on' cuando hablamos de algo que está sobre la superficie de algo. 'The book is on the table' (El libro está sobre la mesa)."
    },
    {
        pregunta: "¿Qué preposición usamos para indicar que algo está dentro de un espacio cerrado?",
        opciones: ["on", "at", "in", "to"],
        respuestaCorrecta: 2,
        explicacion: "Usamos la preposición 'in' para indicar que algo está dentro de un espacio cerrado o limitado. Ejemplo: 'The cat is in the box' (El gato está dentro de la caja)."
    },
    {
        pregunta: "Completa la frase: 'She lives ___ London.'",
        opciones: ["at", "on", "to", "in"],
        respuestaCorrecta: 3,
        explicacion: "Usamos 'in' con ciudades, países y lugares geográficos grandes. 'She lives in London' (Ella vive en Londres)."
    },
    {
        pregunta: "¿Qué preposición de tiempo es correcta? 'I have a meeting ___ 3 o'clock.'",
        opciones: ["in", "on", "at", "for"],
        respuestaCorrecta: 2,
        explicacion: "Usamos 'at' con horas específicas. 'I have a meeting at 3 o'clock' (Tengo una reunión a las 3 en punto)."
    },
    {
        pregunta: "Completa la frase: 'My birthday is ___ May.'",
        opciones: ["at", "on", "in", "by"],
        respuestaCorrecta: 2,
        explicacion: "Usamos 'in' con meses, años, estaciones y periodos más largos. 'My birthday is in May' (Mi cumpleaños es en mayo)."
    },
    {
        pregunta: "Selecciona la preposición correcta: 'We're going on vacation ___ summer.'",
        opciones: ["at", "on", "by", "in"],
        respuestaCorrecta: 3,
        explicacion: "Usamos 'in' con estaciones del año. 'We're going on vacation in summer' (Vamos de vacaciones en verano)."
    },
    {
        pregunta: "¿Qué preposición es correcta? 'The meeting is ___ Monday.'",
        opciones: ["in", "at", "on", "to"],
        respuestaCorrecta: 2,
        explicacion: "Usamos 'on' con días específicos y fechas. 'The meeting is on Monday' (La reunión es el lunes)."
    },
    {
        pregunta: "Completa la frase: 'She's been working here ___ 2015.'",
        opciones: ["for", "since", "from", "during"],
        respuestaCorrecta: 1,
        explicacion: "Usamos 'since' con un punto específico en el tiempo para indicar el inicio de una acción que continúa. 'She's been working here since 2015' (Ella ha estado trabajando aquí desde 2015)."
    },
    {
        pregunta: "¿Qué preposición es correcta en 'I've lived in this house ___ ten years'?",
        opciones: ["since", "for", "during", "while"],
        respuestaCorrecta: 1,
        explicacion: "Usamos 'for' con un periodo de tiempo para indicar la duración. 'I've lived in this house for ten years' (He vivido en esta casa durante diez años)."
    },
    {
        pregunta: "Selecciona la preposición correcta: 'The bank is ___ the post office and the supermarket.'",
        opciones: ["between", "under", "behind", "above"],
        respuestaCorrecta: 0,
        explicacion: "Usamos 'between' para indicar la posición de algo que está en medio de dos objetos o lugares. 'The bank is between the post office and the supermarket' (El banco está entre la oficina de correos y el supermercado)."
    }
];
// Objeto con las preguntas para el tema "Presente perfecto"
const preguntasPresentePerfecto = [
    {
        pregunta: "¿Cuándo se utiliza el presente perfecto?",
        opciones: [
            "Solo para acciones pasadas con un tiempo específico",
            "Para conectar el pasado con el presente: experiencias, cambios o acciones recientes con efecto en el presente",
            "Exclusivamente para planes futuros",
            "Solo para rutinas diarias"
        ],
        respuestaCorrecta: 1,
        explicacion: "El presente perfecto se utiliza para conectar el pasado con el presente: hablar de experiencias sin especificar cuándo ocurrieron, cambios o acciones recientes que tienen un efecto en el presente, y situaciones que empezaron en el pasado y continúan en el presente."
    },
    {
        pregunta: "¿Cómo se forma el presente perfecto?",
        opciones: [
            "have/has + infinitivo",
            "had + infinitivo",
            "have/has + participio pasado",
            "have/has + verbo en pasado"
        ],
        respuestaCorrecta: 2,
        explicacion: "El presente perfecto se forma con el auxiliar have/has + el participio pasado del verbo principal. Ejemplo: 'I have visited Paris' (He visitado París)."
    },
    {
        pregunta: "¿Cuál es el participio pasado del verbo 'go'?",
        opciones: ["went", "goed", "going", "gone"],
        respuestaCorrecta: 3,
        explicacion: "El participio pasado del verbo 'go' es 'gone'. Así, el presente perfecto es 'I have gone' (He ido)."
    },
    {
        pregunta: "¿Cuál es la diferencia principal entre el presente perfecto y el pasado simple?",
        opciones: [
            "El presente perfecto se usa solo para acciones recientes, el pasado simple para todas las acciones pasadas",
            "El presente perfecto conecta el pasado con el presente, el pasado simple habla de acciones terminadas en un tiempo específico del pasado",
            "El presente perfecto es más formal que el pasado simple",
            "No hay diferencia significativa, son intercambiables"
        ],
        respuestaCorrecta: 1,
        explicacion: "La diferencia principal es que el presente perfecto conecta el pasado con el presente (sin especificar cuándo ocurrió la acción o con relevancia actual), mientras que el pasado simple habla de acciones completamente terminadas en un momento específico del pasado."
    },
    {
        pregunta: "¿Qué palabra señal es típica del presente perfecto?",
        opciones: ["yesterday", "last week", "just", "ago"],
        respuestaCorrecta: 2,
        explicacion: "'Just' es una palabra señal típica del presente perfecto que indica que algo ocurrió recientemente. Otras palabras señal incluyen: already, ever, never, yet, so far, recently."
    },
    {
        pregunta: "Completa la frase: 'I ___ never ___ to Japan.'",
        opciones: [
            "have / been",
            "has / been",
            "have / went",
            "has / gone"
        ],
        respuestaCorrecta: 0,
        explicacion: "La forma correcta es 'I have never been to Japan' (Nunca he estado en Japón). Con 'I' usamos 'have' como auxiliar, y el participio pasado de 'be' es 'been'."
    },
    {
        pregunta: "¿Cómo se forma una pregunta en presente perfecto?",
        opciones: [
            "Colocando have/has al principio de la oración",
            "Añadiendo do/does antes del sujeto",
            "Añadiendo did antes del sujeto",
            "Poniendo el verbo principal primero"
        ],
        respuestaCorrecta: 0,
        explicacion: "Para formar preguntas en presente perfecto, colocamos have/has al principio de la oración, seguido del sujeto y el participio pasado. Ejemplo: 'Have you seen that movie?' (¿Has visto esa película?)."
    },
    {
        pregunta: "¿Cuál es la forma negativa correcta? 'She ___ to work today.'",
        opciones: [
            "haven't gone",
            "hasn't gone",
            "have not went",
            "has not been"
        ],
        respuestaCorrecta: 1,
        explicacion: "La forma negativa correcta es 'She hasn't gone to work today' (Ella no ha ido al trabajo hoy). Con 'she' usamos 'hasn't' (has not), y el participio pasado de 'go' es 'gone'."
    },
    {
        pregunta: "¿Qué expresión de tiempo NO se usa normalmente con el presente perfecto?",
        opciones: [
            "Since 2010",
            "For three hours",
            "Last week",
            "Recently"
        ],
        respuestaCorrecta: 2,
        explicacion: "'Last week' no se usa normalmente con el presente perfecto porque especifica un tiempo pasado terminado, por lo que iría con pasado simple. 'Since', 'for' y 'recently' sí se usan con el presente perfecto."
    },
    {
        pregunta: "Completa la frase: 'How long ___ you ___ English?'",
        opciones: [
            "did / study",
            "do / study",
            "have / studied",
            "has / study"
        ],
        respuestaCorrecta: 2,
        explicacion: "La forma correcta es 'How long have you studied English?' (¿Cuánto tiempo has estudiado inglés?). Usamos el presente perfecto para hablar de situaciones que comenzaron en el pasado y continúan en el presente."
    }
];
// Objeto con las preguntas para el tema "Pasado continuo"
const preguntasPasadoContinuo = [
    {
        pregunta: "¿Cuándo se utiliza el pasado continuo?",
        opciones: [
            "Para acciones habituales en el pasado",
            "Para acciones que estaban en progreso en un momento específico del pasado",
            "Solo para acciones futuras",
            "Para acciones que acaban de terminar"
        ],
        respuestaCorrecta: 1,
        explicacion: "El pasado continuo se utiliza para hablar de acciones que estaban en progreso en un momento específico del pasado. También se usa para describir el contexto de otras acciones pasadas."
    },
    {
        pregunta: "¿Cómo se forma el pasado continuo?",
        opciones: [
            "was/were + infinitivo",
            "was/were + participio pasado",
            "was/were + verbo-ing",
            "had + verbo-ing"
        ],
        respuestaCorrecta: 2,
        explicacion: "El pasado continuo se forma con was/were (pasado del verbo 'to be') + el verbo principal con la terminación -ing. Ejemplo: 'I was studying when you called' (Estaba estudiando cuando llamaste)."
    },
    {
        pregunta: "Completa la oración: 'They ___ TV when the phone rang.'",
        opciones: [
            "were watching",
            "was watching",
            "are watching",
            "watched"
        ],
        respuestaCorrecta: 0,
        explicacion: "La forma correcta es 'They were watching TV when the phone rang' (Estaban viendo la televisión cuando sonó el teléfono). Con 'they' usamos 'were' como auxiliar."
    },
    {
        pregunta: "¿Cómo se forma una pregunta en pasado continuo?",
        opciones: [
            "Añadiendo did al inicio",
            "Colocando el verbo principal al inicio",
            "Colocando was/were al inicio",
            "Añadiendo didn't al inicio"
        ],
        respuestaCorrecta: 2,
        explicacion: "Para formar preguntas en pasado continuo, colocamos was/were al inicio, seguido del sujeto y el verbo con -ing. Ejemplo: 'Were you working yesterday at 8 PM?' (¿Estabas trabajando ayer a las 8 PM?)."
    },
    {
        pregunta: "¿Cómo se forma la negación en pasado continuo?",
        opciones: [
            "Añadiendo not después del verbo principal",
            "Usando didn't antes del verbo",
            "Colocando wasn't/weren't antes del verbo principal",
            "Añadiendo not después de was/were (wasn't/weren't) + verbo-ing"
        ],
        respuestaCorrecta: 3,
        explicacion: "La negación en pasado continuo se forma con wasn't/weren't (was/were + not) seguido del verbo con -ing. Ejemplo: 'She wasn't sleeping when I arrived' (Ella no estaba durmiendo cuando llegué)."
    },
    {
        pregunta: "¿Qué expresa esta oración? 'I was studying while my brother was playing video games.'",
        opciones: [
            "Dos acciones consecutivas en el pasado",
            "Dos acciones simultáneas en progreso en el pasado",
            "Una acción interrumpida por otra en el pasado",
            "Una acción habitual en el pasado"
        ],
        respuestaCorrecta: 1,
        explicacion: "Expresa dos acciones simultáneas que estaban en progreso en el pasado. Ambas acciones ocurrían al mismo tiempo."
    },
    {
        pregunta: "¿Cuál es la diferencia entre pasado simple y pasado continuo?",
        opciones: [
            "El pasado simple es para acciones completadas, el pasado continuo para acciones en progreso",
            "El pasado simple es más formal que el pasado continuo",
            "El pasado simple es para acciones recientes, el pasado continuo para acciones lejanas",
            "No hay diferencia, son intercambiables"
        ],
        respuestaCorrecta: 0,
        explicacion: "La principal diferencia es que el pasado simple se usa para acciones completadas en el pasado, mientras que el pasado continuo para acciones que estaban en progreso en un momento específico del pasado."
    },
    {
        pregunta: "Selecciona la oración correcta:",
        opciones: [
            "I were sleeping at 3 AM.",
            "She was cook dinner when I arrived.",
            "They was playing football yesterday.",
            "He was reading when the lights went out."
        ],
        respuestaCorrecta: 3,
        explicacion: "'He was reading when the lights went out' es la única oración correcta. Con 'he' usamos 'was', y el verbo principal lleva -ing (reading)."
    },
    {
        pregunta: "¿Qué tiempo verbal se usa en 'When I arrived, she ___ dinner'?",
        opciones: [
            "was cooking (pasado continuo)",
            "cooked (pasado simple)",
            "has cooked (presente perfecto)",
            "is cooking (presente continuo)"
        ],
        respuestaCorrecta: 0,
        explicacion: "Se usa el pasado continuo 'was cooking' para indicar una acción en progreso cuando otra acción (arrived) la interrumpió o tuvo lugar durante ella."
    },
    {
        pregunta: "Completa la oración: 'What ___ you ___ at this time yesterday?'",
        opciones: [
            "did / do",
            "were / doing",
            "was / do",
            "have / done"
        ],
        respuestaCorrecta: 1,
        explicacion: "La forma correcta es 'What were you doing at this time yesterday?' (¿Qué estabas haciendo a esta hora ayer?). Usamos el pasado continuo para preguntar sobre una acción en progreso en un momento específico del pasado."
    }
];
// Objeto con las preguntas para el tema "Condicionales tipo 1 y 2"
const preguntasCondicionales = [
    {
        pregunta: "¿Qué expresan las oraciones condicionales tipo 1?",
        opciones: [
            "Situaciones imposibles o poco probables",
            "Situaciones hipotéticas en el presente",
            "Situaciones posibles y probables en el presente o futuro",
            "Situaciones que ocurrieron en el pasado"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las condicionales tipo 1 (primer condicional) expresan situaciones posibles y probables en el presente o futuro. Se usan para hablar de algo que puede suceder si se cumple cierta condición."
    },
    {
        pregunta: "¿Cuál es la estructura del condicional tipo 1?",
        opciones: [
            "If + presente simple, will + infinitivo",
            "If + pasado simple, would + infinitivo",
            "If + presente perfecto, will + infinitivo",
            "If + pasado perfecto, would + have + participio pasado"
        ],
        respuestaCorrecta: 0,
        explicacion: "La estructura del condicional tipo 1 es: If + presente simple (en la cláusula condicional), will/can/may + infinitivo (en la cláusula principal). Ejemplo: 'If it rains, I will stay at home' (Si llueve, me quedaré en casa)."
    },
    {
        pregunta: "¿Qué expresan las oraciones condicionales tipo 2?",
        opciones: [
            "Situaciones reales y posibles en el futuro",
            "Situaciones hipotéticas, improbables o imposibles en el presente",
            "Situaciones que ocurrieron en el pasado",
            "Situaciones que están ocurriendo ahora"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las condicionales tipo 2 (segundo condicional) expresan situaciones hipotéticas, improbables o imposibles en el presente. También se usan para dar consejos o hablar de situaciones imaginarias."
    },
    {
        pregunta: "¿Cuál es la estructura del condicional tipo 2?",
        opciones: [
            "If + presente simple, will + infinitivo",
            "If + pasado simple, would + infinitivo",
            "If + presente perfecto, will + infinitivo",
            "If + pasado perfecto, would + have + participio pasado"
        ],
        respuestaCorrecta: 1,
        explicacion: "La estructura del condicional tipo 2 es: If + pasado simple (en la cláusula condicional), would/could/might + infinitivo (en la cláusula principal). Ejemplo: 'If I had more money, I would buy a new car' (Si tuviera más dinero, compraría un coche nuevo)."
    },
    {
        pregunta: "Completa la oración condicional tipo 1: 'If it ___ tomorrow, we ___ to the beach.'",
        opciones: [
            "rains / won't go",
            "rain / won't go",
            "rains / don't go",
            "will rain / don't go"
        ],
        respuestaCorrecta: 0,
        explicacion: "La forma correcta es 'If it rains tomorrow, we won't go to the beach' (Si llueve mañana, no iremos a la playa). En la cláusula con 'if' usamos presente simple, y en la cláusula principal usamos futuro con 'will' (o 'won't' para la negación)."
    },
    {
        pregunta: "Completa la oración condicional tipo 2: 'If I ___ a millionaire, I ___ a mansion.'",
        opciones: [
            "am / will buy",
            "was / would buy",
            "were / would buy",
            "were / will buy"
        ],
        respuestaCorrecta: 2,
        explicacion: "La forma correcta es 'If I were a millionaire, I would buy a mansion' (Si fuera millonario, compraría una mansión). En condicionales tipo 2, usamos pasado simple (preferiblemente 'were' para todas las personas con 'be') y 'would' + infinitivo."
    },
    {
        pregunta: "¿Cuál de las siguientes oraciones es un condicional tipo 1?",
        opciones: [
            "If I had wings, I would fly.",
            "If I won the lottery, I would travel the world.",
            "If you study hard, you will pass the exam.",
            "If I had studied more, I would have passed the exam."
        ],
        respuestaCorrecta: 2,
        explicacion: "'If you study hard, you will pass the exam' es un condicional tipo 1. Expresa una situación posible y probable en el futuro, usando presente simple en la cláusula con 'if' y 'will' + infinitivo en la cláusula principal."
    },
    {
        pregunta: "¿Cuál de las siguientes oraciones es un condicional tipo 2?",
        opciones: [
            "If I have time, I will call you.",
            "If I were you, I would apologize.",
            "If you heat ice, it melts.",
            "If you had told me, I would have helped you."
        ],
        respuestaCorrecta: 1,
        explicacion: "'If I were you, I would apologize' es un condicional tipo 2. Expresa una situación hipotética en el presente ('ser tú' es imposible), usando pasado simple en la cláusula con 'if' y 'would' + infinitivo en la cláusula principal."
    },
    {
        pregunta: "En condicionales tipo 2, ¿qué forma se prefiere usar con el verbo 'be' para todas las personas?",
        opciones: ["am", "is", "are", "were"],
        respuestaCorrecta: 3,
        explicacion: "En condicionales tipo 2, se prefiere usar 'were' con el verbo 'be' para todas las personas, incluso con I, he, she, it. Ejemplo: 'If I were rich...' (Si yo fuera rico...), 'If she were here...' (Si ella estuviera aquí...)."
    },
    {
        pregunta: "¿Se puede cambiar el orden de las cláusulas en las oraciones condicionales?",
        opciones: [
            "No, siempre debe ir primero la cláusula con 'if'",
            "Sí, se puede poner primero cualquiera de las dos cláusulas",
            "Solo en condicionales tipo 1",
            "Solo en preguntas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Sí, se puede cambiar el orden de las cláusulas en oraciones condicionales. Si la cláusula con 'if' va primero, se separa de la cláusula principal con una coma. Si va después, no se necesita coma. Ejemplo: 'If it rains, we will stay home' o 'We will stay home if it rains'."
    }
];
// Objeto con las preguntas para el tema "Verbos modales"
const preguntasVerbosModales = [
    {
        pregunta: "¿Qué son los verbos modales?",
        opciones: [
            "Verbos que expresan acciones físicas",
            "Verbos que indican tiempo",
            "Verbos auxiliares que expresan habilidad, posibilidad, permiso, obligación, etc.",
            "Verbos que solo se usan en pasado"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los verbos modales son verbos auxiliares que se usan antes de otro verbo para expresar distintos significados como habilidad, posibilidad, permiso, obligación, prohibición, etc. Ejemplos: can, could, may, might, must, should, would, etc."
    },
    {
        pregunta: "¿Qué expresa el verbo modal 'can'?",
        opciones: [
            "Obligación",
            "Prohibición",
            "Habilidad o permiso",
            "Sugerencia"
        ],
        respuestaCorrecta: 2,
        explicacion: "El verbo modal 'can' se usa principalmente para expresar habilidad ('I can swim' - Puedo nadar) o permiso ('You can use my phone' - Puedes usar mi teléfono)."
    },
    {
        pregunta: "¿Qué expresa el verbo modal 'must'?",
        opciones: [
            "Habilidad",
            "Posibilidad",
            "Sugerencia",
            "Obligación o necesidad fuerte"
        ],
        respuestaCorrecta: 3,
        explicacion: "El verbo modal 'must' expresa obligación o necesidad fuerte ('You must follow the rules' - Debes seguir las reglas) o una fuerte probabilidad ('She's not answering. She must be busy' - No contesta. Debe de estar ocupada)."
    },
    {
        pregunta: "Completa la oración: 'You ___ smoke in the hospital. It's prohibited.'",
        opciones: ["can't", "shouldn't", "don't have to", "mustn't"],
        respuestaCorrecta: 3,
        explicacion: "La forma correcta es 'You mustn't smoke in the hospital' (No debes fumar en el hospital). 'Mustn't' (must not) se usa para expresar prohibición fuerte."
    },
    {
        pregunta: "¿Qué diferencia hay entre 'must' y 'have to'?",
        opciones: [
            "No hay diferencia, son intercambiables",
            "'Must' es más formal que 'have to'",
            "'Must' implica obligación interna (del hablante), 'have to' implica obligación externa",
            "'Must' es para obligaciones pasadas, 'have to' para presentes"
        ],
        respuestaCorrecta: 2,
        explicacion: "La principal diferencia es que 'must' suele implicar una obligación interna (algo que el hablante considera necesario), mientras que 'have to' implica una obligación externa (impuesta por otra persona o circunstancia)."
    },
    {
        pregunta: "¿Qué expresa 'should' en esta oración? 'You should see a doctor.'",
        opciones: [
            "Obligación",
            "Habilidad",
            "Permiso",
            "Consejo o recomendación"
        ],
        respuestaCorrecta: 3,
        explicacion: "En 'You should see a doctor', 'should' expresa un consejo o recomendación. Está sugiriendo que sería bueno ver a un médico, pero no es una obligación."
    },
    {
        pregunta: "¿Qué característica gramatical comparten todos los verbos modales?",
        opciones: [
            "Todos llevan -ing en su forma continua",
            "No cambian en tercera persona singular",
            "Todos tienen formas irregulares en pasado",
            "Se conjugan como verbos regulares"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una característica común de todos los verbos modales es que no cambian en tercera persona singular. No añadimos -s/-es. Ejemplo: 'He can swim' (no 'He cans swim')."
    },
    {
        pregunta: "¿Cómo se forma la negación con verbos modales?",
        opciones: [
            "Añadiendo don't/doesn't antes del modal",
            "Añadiendo not después del modal",
            "Añadiendo not después del verbo principal",
            "Usando un modal negativo diferente"
        ],
        respuestaCorrecta: 1,
        explicacion: "La negación con verbos modales se forma añadiendo 'not' después del modal. A menudo se contraen: can't, won't, shouldn't, mustn't, etc. Ejemplo: 'She can't come to the party' (Ella no puede venir a la fiesta)."
    },
    {
        pregunta: "¿Cómo se forma una pregunta con verbos modales?",
        opciones: [
            "Añadiendo do/does antes del sujeto",
            "Colocando el verbo modal antes del sujeto",
            "Añadiendo un signo de interrogación al final",
            "Añadiendo el auxiliar 'to be' al inicio"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para formar preguntas con verbos modales, simplemente colocamos el verbo modal antes del sujeto. Ejemplo: 'Can you help me?' (¿Puedes ayudarme?)."
    },
    {
        pregunta: "¿Qué verbo modal usarías para expresar una posibilidad poco probable?",
        opciones: ["can", "will", "might", "should"],
        respuestaCorrecta: 2,
        explicacion: "'Might' se usa para expresar una posibilidad poco probable o incierta. Ejemplo: 'It might rain later' (Podría llover más tarde, aunque no es muy probable)."
    }
];
// Objeto con las preguntas para el tema "Voz pasiva"
const preguntasVozPasiva = [
    {
        pregunta: "¿Cuándo se utiliza la voz pasiva?",
        opciones: [
            "Cuando queremos enfatizar quién realiza la acción",
            "Cuando queremos enfatizar la acción, no quién la realiza, o cuando el agente es desconocido/obvio/irrelevante",
            "Solo para hablar de acciones pasadas",
            "Solo para dar órdenes o instrucciones"
        ],
        respuestaCorrecta: 1,
        explicacion: "La voz pasiva se utiliza cuando queremos enfatizar la acción o el objeto que recibe la acción, no quién la realiza. También se usa cuando el agente (quien realiza la acción) es desconocido, obvio o irrelevante."
    },
    {
        pregunta: "¿Cómo se forma la voz pasiva?",
        opciones: [
            "verbo principal + by + agente",
            "verbo to be + verbo principal + by + agente",
            "verbo to be + participio pasado (del verbo principal) + by + agente (opcional)",
            "verbo to have + participio pasado + by + agente"
        ],
        respuestaCorrecta: 2,
        explicacion: "La voz pasiva se forma con el verbo 'to be' en el tiempo correspondiente + el participio pasado del verbo principal + 'by + agente' (opcional). Ejemplo: 'The letter was written by John' (La carta fue escrita por John)."
    },
    {
        pregunta: "Transforma a voz pasiva: 'They build this house in 1990.'",
        opciones: [
            "This house builds in 1990.",
            "This house is built in 1990.",
            "This house was built in 1990.",
            "This house was build in 1990."
        ],
        respuestaCorrecta: 2,
        explicacion: "La forma correcta es 'This house was built in 1990' (Esta casa fue construida en 1990). Como la oración original está en pasado simple, usamos 'was' + el participio pasado 'built'."
    },
    {
        pregunta: "¿Cuál de las siguientes oraciones está en voz pasiva?",
        opciones: [
            "John wrote a letter.",
            "A letter was written by John.",
            "John was writing a letter.",
            "John has written a letter."
        ],
        respuestaCorrecta: 1,
        explicacion: "'A letter was written by John' está en voz pasiva. La estructura es: objeto (a letter) + verbo to be (was) + participio pasado (written) + by + agente (John)."
    },
    {
        pregunta: "¿Cómo se forma la voz pasiva en presente simple?",
        opciones: [
            "am/is/are + participio pasado",
            "was/were + participio pasado",
            "have/has been + participio pasado",
            "will be + participio pasado"
        ],
        respuestaCorrecta: 0,
        explicacion: "La voz pasiva en presente simple se forma con am/is/are + participio pasado. Ejemplo: 'The house is cleaned every day' (La casa es limpiada todos los días)."
    },
    {
        pregunta: "¿Cómo se forma la voz pasiva en pasado simple?",
        opciones: [
            "am/is/are + participio pasado",
            "was/were + participio pasado",
            "have/has been + participio pasado",
            "will be + participio pasado"
        ],
        respuestaCorrecta: 1,
        explicacion: "La voz pasiva en pasado simple se forma con was/were + participio pasado. Ejemplo: 'The letter was sent yesterday' (La carta fue enviada ayer)."
    },
    {
        pregunta: "Transforma a voz pasiva: 'They will announce the results tomorrow.'",
        opciones: [
            "The results will announce tomorrow.",
            "The results will be announced tomorrow.",
            "The results are announced tomorrow.",
            "The results would be announced tomorrow."
        ],
        respuestaCorrecta: 1,
        explicacion: "La forma correcta es 'The results will be announced tomorrow' (Los resultados serán anunciados mañana). Como la oración original está en futuro simple, usamos 'will be' + participio pasado 'announced'."
    },
    {
        pregunta: "¿Cuándo es común omitir el agente (by + agente) en la voz pasiva?",
        opciones: [
            "Nunca debe omitirse",
            "Cuando es desconocido, obvio o irrelevante",
            "Solo en tiempo presente",
            "Solo en oraciones negativas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Es común omitir el agente en la voz pasiva cuando es desconocido, obvio o irrelevante. Ejemplo: 'My car was stolen' (Mi coche fue robado) - no sabemos quién lo robó o no es relevante mencionarlo."
    },
    {
        pregunta: "Transforma a voz pasiva: 'They have cancelled the meeting.'",
        opciones: [
            "The meeting has cancelled.",
            "The meeting has been cancelled.",
            "The meeting have been cancelled.",
            "The meeting is being cancelled."
        ],
        respuestaCorrecta: 1,
        explicacion: "La forma correcta es 'The meeting has been cancelled' (La reunión ha sido cancelada). Como la oración original está en presente perfecto, usamos 'has been' + participio pasado 'cancelled'."
    },
    {
        pregunta: "¿Cuál es la voz pasiva correcta de 'The teacher is explaining the lesson'?",
        opciones: [
            "The lesson is explained by the teacher.",
            "The lesson was explained by the teacher.",
            "The lesson is being explained by the teacher.",
            "The lesson has been explained by the teacher."
        ],
        respuestaCorrecta: 2,
        explicacion: "La forma correcta es 'The lesson is being explained by the teacher' (La lección está siendo explicada por el profesor). Como la oración original está en presente continuo, usamos 'is being' + participio pasado 'explained'."
    }
];
// Objeto con las preguntas para el tema "Phrasal verbs comunes"
const preguntasPhrasalVerbs = [
    {
        pregunta: "¿Qué son los phrasal verbs?",
        opciones: [
            "Verbos que solo se usan en frases",
            "Combinaciones de un verbo y una o más partículas (preposición o adverbio) que crean un significado diferente",
            "Verbos irregulares en inglés",
            "Verbos que siempre van seguidos de un sustantivo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los phrasal verbs son combinaciones de un verbo y una o más partículas (preposición o adverbio) que juntos crean un significado diferente al del verbo original. Ejemplo: 'look after' (cuidar), que tiene un significado diferente a 'look' (mirar)."
    },
    {
        pregunta: "¿Cuál es el significado del phrasal verb 'give up'?",
        opciones: [
            "Dar hacia arriba",
            "Entregar algo",
            "Devolver algo",
            "Rendirse o abandonar algo"
        ],
        respuestaCorrecta: 3,
        explicacion: "El phrasal verb 'give up' significa 'rendirse' o 'abandonar algo'. Ejemplo: 'I decided to give up smoking' (Decidí dejar de fumar)."
    },
    {
        pregunta: "¿Cuál es el significado del phrasal verb 'look for'?",
        opciones: [
            "Mirar hacia adelante",
            "Mirar por la ventana",
            "Buscar algo",
            "Esperar algo"
        ],
        respuestaCorrecta: 2,
        explicacion: "El phrasal verb 'look for' significa 'buscar algo'. Ejemplo: 'I'm looking for my keys' (Estoy buscando mis llaves)."
    },
    {
        pregunta: "¿Cuál es el significado del phrasal verb 'pick up'?",
        opciones: [
            "Elegir algo",
            "Recoger algo o a alguien",
            "Seleccionar hacia arriba",
            "Levantar algo pesado"
        ],
        respuestaCorrecta: 1,
        explicacion: "El phrasal verb 'pick up' generalmente significa 'recoger algo o a alguien'. Ejemplo: 'I'll pick you up at 8' (Te recogeré a las 8). También puede significar 'aprender algo de manera informal' o 'mejorar'."
    },
    {
        pregunta: "¿Cuál es el significado del phrasal verb 'turn down'?",
        opciones: [
            "Rechazar o bajar (volumen, temperatura)",
            "Dar la vuelta hacia abajo",
            "Apagar algo",
            "Reducir la velocidad"
        ],
        respuestaCorrecta: 0,
        explicacion: "El phrasal verb 'turn down' puede significar 'rechazar una oferta o invitación' o 'bajar el volumen o temperatura'. Ejemplo: 'He turned down the job offer' (Rechazó la oferta de trabajo) o 'Please turn down the music' (Por favor, baja la música)."
    },
    {
        pregunta: "¿Cuál es el significado del phrasal verb 'put off'?",
        opciones: [
            "Apagar algo",
            "Quitar algo",
            "Posponer o aplazar algo",
            "Molestar a alguien"
        ],
        respuestaCorrecta: 2,
        explicacion: "El phrasal verb 'put off' significa 'posponer o aplazar algo'. Ejemplo: 'We decided to put off the meeting until next week' (Decidimos posponer la reunión hasta la próxima semana)."
    },
    {
        pregunta: "Selecciona la oración correcta con el phrasal verb 'run into':",
        opciones: [
            "I run into the building.",
            "I ran into an old friend at the supermarket yesterday.",
            "The car run into the wall.",
            "She run into problems at work."
        ],
        respuestaCorrecta: 1,
        explicacion: "'I ran into an old friend at the supermarket yesterday' es correcta. El phrasal verb 'run into' significa 'encontrarse con alguien por casualidad'. También puede significar 'chocar contra algo' o 'encontrar problemas'."
    },
    {
        pregunta: "¿En cuál de estos phrasal verbs el objeto puede ir entre el verbo y la partícula?",
        opciones: [
            "Look after",
            "Run into",
            "Turn on",
            "Get over"
        ],
        respuestaCorrecta: 2,
        explicacion: "'Turn on' es un phrasal verb separable, lo que significa que el objeto puede ir entre el verbo y la partícula. Ejemplo: 'Turn on the light' o 'Turn the light on'. No todos los phrasal verbs son separables."
    },
    {
        pregunta: "¿Cuál es el significado del phrasal verb 'break down'?",
        opciones: [
            "Romper en pedazos",
            "Averiarse o colapsar (físicamente o emocionalmente)",
            "Escapar de un lugar",
            "Descomponer algo en partes más pequeñas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El phrasal verb 'break down' generalmente significa 'averiarse' (para máquinas o vehículos) o 'colapsar' (físicamente o emocionalmente). Ejemplo: 'My car broke down on the highway' (Mi coche se averió en la autopista)."
    },
    {
        pregunta: "¿Cuál es el significado del phrasal verb 'carry out'?",
        opciones: [
            "Llevar algo afuera",
            "Transportar objetos",
            "Realizar o llevar a cabo (una tarea, plan, etc.)",
            "Continuar haciendo algo"
        ],
        respuestaCorrecta: 2,
        explicacion: "El phrasal verb 'carry out' significa 'realizar o llevar a cabo' una tarea, plan, investigación, etc. Ejemplo: 'They carried out a survey to find out customer opinions' (Realizaron una encuesta para conocer las opiniones de los clientes)."
    }
];
    // Función para mostrar el taller práctico
    function mostrarTallerPractico(tema) {
        // Configurar y mostrar el taller práctico
        document.getElementById("taller-titulo").textContent = `Taller Práctico: ${tema}`;

        // Limpiar el contenedor de preguntas
        const tallerBody = document.getElementById("taller-practico-body");
        tallerBody.innerHTML = "";

        // Crear y añadir las preguntas
        let preguntas;

        switch(tema) {
            case "Verbo 'to be'":
                preguntas = preguntasToBe;
                break;
            case "Pronombres personales":
                preguntas = preguntasPronombres;
                break;
            case "Artículos":
                preguntas = preguntasArticulos;
                break;
            case "Sustantivos":
                preguntas = preguntasSustantivos;
                break;
            case "Adjetivos posesivos":
                preguntas = preguntasAdjetivosPosesivos;
                break;
            case "Presente simple":
                preguntas = preguntasPresenteSimple;
                break;
            case "Presente continuo":
                preguntas = preguntasPresenteContinuo;
                break;
            case "Pasado simple":
                preguntas = preguntasPasadoSimple;
                break;
            case "Comparativos y superlativos":
                preguntas = preguntasComparativosSuperlativos;
                break;
            case "Adverbios de frecuencia":
                preguntas = preguntasAdverbiosFrecuencia;
                break;
            case "Preposiciones de lugar":
                preguntas = preguntasPreposiciones;
                break;
            case "Futuro con 'going to'":
                preguntas = preguntasFuturo;
                break;
            case "Presente perfecto":
                preguntas = preguntasPresentePerfecto;
                break;
            case "Pasado continuo":
                preguntas = preguntasPasadoContinuo;
                break;
            case "Presente perfecto":
                preguntas = preguntasPresentePerfecto;
                break;
            case "Pasado continuo":
                preguntas = preguntasPasadoContinuo;
                break;
            case "Condicionales tipo 1 y 2":
                preguntas = preguntasCondicionales;
                break;
            case "Verbos modales":
                preguntas = preguntasVerbosModales;
                break;
            case "Voz pasiva":
                preguntas = preguntasVozPasiva;
                break;
            case "Phrasal verbs comunes":
                preguntas = preguntasPhrasalVerbs;
                break;
        }

        if (preguntas) {
            preguntas.forEach((pregunta, index) => {
                const preguntaElement = document.createElement("div");
                preguntaElement.className = "pregunta-item";
                preguntaElement.dataset.index = index;

                // Crear el contenido de la pregunta
                preguntaElement.innerHTML = `
                    <h4>${index + 1}. ${pregunta.pregunta}</h4>
                    <div class="opciones-container">
                        ${pregunta.opciones.map((opcion, opIndex) => `
                            <label class="opcion-item" data-index="${opIndex}">
                                <input type="radio" name="pregunta-${index}" value="${opIndex}">
                                ${opcion}
                            </label>
                        `).join('')}
                    </div>
                `;

                tallerBody.appendChild(preguntaElement);
            });

            // Ocultar los resultados
            document.getElementById("taller-resultados").style.display = "none";

            // Mostrar el contenedor del taller
            const tallerContainer = document.getElementById("taller-practico-container");
            tallerContainer.style.display = "flex";
            tallerContainer.style.opacity = 0;
            window.scrollTo(0, 0);
            // Añadir el manejador de eventos para las opciones
            tallerBody.querySelectorAll(".opcion-item").forEach(opcion => {
                opcion.addEventListener("click", function () {
                    // Obtener el índice de la pregunta
                    const preguntaIndex = this.closest(".pregunta-item").dataset.index;

                    // Desmarcar todas las opciones de esta pregunta
                    tallerBody.querySelectorAll(`input[name="pregunta-${preguntaIndex}"]`).forEach(input => {
                        input.closest(".opcion-item").classList.remove("seleccionada");
                    });

                    // Marcar esta opción como seleccionada
                    this.classList.add("seleccionada");
                });
            });

            // Animación de entrada para el taller práctico
            gsap.fromTo(tallerContainer,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power1.out"
                }
            );

            // Animación para las preguntas
            gsap.from(".pregunta-item", {
                opacity: 0,
                y: 15,
                stagger: 0.1,
                duration: 0.4,
                delay: 0.3
            });
        }
    }

    // Función para verificar las respuestas
    function verificarRespuestas() {
        const tallerBody = document.getElementById("taller-practico-body");
        const temaActual = document.getElementById("taller-titulo").textContent.replace("Taller Práctico: ", "");

        let preguntas;
        switch(temaActual) {
            case "Verbo 'to be'":
                preguntas = preguntasToBe;
                break;
            case "Pronombres personales":
                preguntas = preguntasPronombres;
                break;
            case "Artículos":
                preguntas = preguntasArticulos;
                break;
            case "Sustantivos":
                preguntas = preguntasSustantivos;
                break;
            case "Adjetivos posesivos":
                preguntas = preguntasAdjetivosPosesivos;
                break;
            case "Presente simple":
                preguntas = preguntasPresenteSimple;
                break;
            case "Presente continuo":
                preguntas = preguntasPresenteContinuo;
                break;
            case "Pasado simple":
                preguntas = preguntasPasadoSimple;
                break;
            case "Comparativos y superlativos":
                preguntas = preguntasComparativosSuperlativos;
                break;
            case "Adverbios de frecuencia":
                preguntas = preguntasAdverbiosFrecuencia;
                break;
            case "Preposiciones de lugar":
                preguntas = preguntasPreposiciones;
                break;
            case "Futuro con 'going to'":
                preguntas = preguntasFuturo;
                break;
            case "Presente perfecto":
                preguntas = preguntasPresentePerfecto;
                break;
            case "Pasado continuo":
                preguntas = preguntasPasadoContinuo;
                break;
            case "Presente perfecto":
                preguntas = preguntasPresentePerfecto;
                break;
            case "Pasado continuo":
                preguntas = preguntasPasadoContinuo;
                break;
            case "Condicionales tipo 1 y 2":
                preguntas = preguntasCondicionales;
                break;
            case "Verbos modales":
                preguntas = preguntasVerbosModales;
                break;
            case "Voz pasiva":
                preguntas = preguntasVozPasiva;
                break;
            case "Phrasal verbs comunes":
                preguntas = preguntasPhrasalVerbs;
                break;
        }
        if (!preguntas) return;

        // Verificar si hay preguntas sin responder
        const preguntasSinResponder = [];
        preguntas.forEach((pregunta, index) => {
            const preguntaElement = tallerBody.querySelector(`.pregunta-item[data-index="${index}"]`);
            const opcionSeleccionada = preguntaElement.querySelector('input:checked');

            if (!opcionSeleccionada) {
                preguntasSinResponder.push(index + 1); // Añadir el número de pregunta (índice + 1)
            }
        });

        // Si hay preguntas sin responder, mostrar un aviso
        if (preguntasSinResponder.length > 0) {
            const mensaje = preguntasSinResponder.length === 1
                ? `¡Atención! No has respondido la pregunta ${preguntasSinResponder[0]}.`
                : `¡Atención! No has respondido las siguientes preguntas: ${preguntasSinResponder.join(', ')}.`;

            // Crear y mostrar un modal de advertencia
            mostrarModalAdvertencia(mensaje, preguntasSinResponder);
            return; // Detener la función aquí
        }

        // Si todas las preguntas están respondidas, continuar con la verificación
        procederConVerificacion(tallerBody, temaActual, preguntas);
    }

    // Función para mostrar un modal de advertencia
    function mostrarModalAdvertencia(mensaje, preguntasSinResponder) {
        // Crear el modal
        const modal = document.createElement('div');
        modal.className = 'modal-advertencia';

        // Contenido del modal
        modal.innerHTML = `
            <div class="modal-contenido">
                <div class="modal-header">
                    <h3><i class="fas fa-exclamation-triangle"></i> Preguntas sin responder</h3>
                </div>
                <div class="modal-body">
                    <p>${mensaje}</p>
                    <p>¿Qué deseas hacer?</p>
                </div>
                <div class="modal-footer">
                    <button id="btn-responder-todas" class="btn-modal">Responder todas</button>
                    <button id="btn-continuar-sin" class="btn-modal">Continuar sin responder</button>
                </div>
            </div>
        `;

        // Añadir el modal al body
        document.body.appendChild(modal);

        // Mostrar el modal con animación
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);

        // Manejadores de eventos para los botones
        document.getElementById('btn-responder-todas').addEventListener('click', () => {
            // Resaltar las preguntas sin responder
            preguntasSinResponder.forEach(numPregunta => {
                const preguntaElement = document.querySelector(`.pregunta-item[data-index="${numPregunta - 1}"]`);
                if (preguntaElement) {
                    // Añadir clase para resaltar
                    preguntaElement.classList.add('sin-responder');

                    // Desplazarse a la primera pregunta sin responder
                    if (numPregunta === preguntasSinResponder[0]) {
                        preguntaElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }

                    // Quitar la clase después de unos segundos
                    setTimeout(() => {
                        preguntaElement.classList.remove('sin-responder');
                    }, 3000);
                }
            });

            // Cerrar el modal
            cerrarModal(modal);
        });

        document.getElementById('btn-continuar-sin').addEventListener('click', () => {
            // Cerrar el modal
            cerrarModal(modal);

            // Obtener elementos necesarios
            const tallerBody = document.getElementById("taller-practico-body");
            const temaActual = document.getElementById("taller-titulo").textContent.replace("Taller Práctico: ", "");

            let preguntas;
            switch(temaActual) {
                case "Verbo 'to be'":
                preguntas = preguntasToBe;
                break;
            case "Pronombres personales":
                preguntas = preguntasPronombres;
                break;
            case "Artículos":
                preguntas = preguntasArticulos;
                break;
            case "Sustantivos":
                preguntas = preguntasSustantivos;
                break;
            case "Adjetivos posesivos":
                preguntas = preguntasAdjetivosPosesivos;
                break;
            case "Presente simple":
                preguntas = preguntasPresenteSimple;
                break;
            case "Presente continuo":
                preguntas = preguntasPresenteContinuo;
                break;
            case "Pasado simple":
                preguntas = preguntasPasadoSimple;
                break;
            case "Comparativos y superlativos":
                preguntas = preguntasComparativosSuperlativos;
                break;
            case "Adverbios de frecuencia":
                preguntas = preguntasAdverbiosFrecuencia;
                break;
            case "Preposiciones de lugar":
                preguntas = preguntasPreposiciones;
                break;
            case "Futuro con 'going to'":
                preguntas = preguntasFuturo;
                break;
            case "Presente perfecto":
                preguntas = preguntasPresentePerfecto;
                break;
            case "Pasado continuo":
                preguntas = preguntasPasadoContinuo;
                break;
            case "Presente perfecto":
                preguntas = preguntasPresentePerfecto;
                break;
            case "Pasado continuo":
                preguntas = preguntasPasadoContinuo;
                break;
            case "Condicionales tipo 1 y 2":
                preguntas = preguntasCondicionales;
                break;
            case "Verbos modales":
                preguntas = preguntasVerbosModales;
                break;
            case "Voz pasiva":
                preguntas = preguntasVozPasiva;
                break;
            case "Phrasal verbs comunes":
                preguntas = preguntasPhrasalVerbs;
                break;
            }

            // Proceder con la verificación
            procederConVerificacion(tallerBody, temaActual, preguntas);
        });
    }

    // Función para cerrar el modal
    function cerrarModal(modal) {
        // Animar salida
        modal.style.opacity = '0';

        // Eliminar después de la animación
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }

    // Función para proceder con la verificación de respuestas
    function procederConVerificacion(tallerBody, temaActual, preguntas) {
        // Contar respuestas correctas
        let correctas = 0;
        const respuestas = [];

        preguntas.forEach((pregunta, index) => {
            const preguntaElement = tallerBody.querySelector(`.pregunta-item[data-index="${index}"]`);
            const opcionSeleccionada = preguntaElement.querySelector('input:checked');

            let esCorrecta = false;
            let respuestaUsuario = -1;

            if (opcionSeleccionada) {
                respuestaUsuario = parseInt(opcionSeleccionada.value);
                esCorrecta = respuestaUsuario === pregunta.respuestaCorrecta;

                // Marcar visualmente las respuestas
                const opcionesItems = preguntaElement.querySelectorAll('.opcion-item');

                opcionesItems.forEach((opcion, opIndex) => {
                    if (opIndex === pregunta.respuestaCorrecta) {
                        opcion.classList.add("correcta");
                    }

                    if (opIndex === respuestaUsuario && !esCorrecta) {
                        opcion.classList.add("incorrecta");
                    }
                });

                if (esCorrecta) correctas++;
            }

            respuestas.push({
                pregunta: pregunta.pregunta,
                respuestaUsuario,
                respuestaCorrecta: pregunta.respuestaCorrecta,
                esCorrecta,
                explicacion: pregunta.explicacion,
                opciones: pregunta.opciones
            });
        });

        // Calcular porcentaje de respuestas correctas
        const porcentajeCorrectas = Math.round((correctas / preguntas.length) * 100);

        // Crear contenedor principal para los resultados
        const resultadosContainer = document.getElementById("taller-resultados");
        resultadosContainer.innerHTML = ""; // Limpiar el contenedor

        // Crear el contenedor principal de resultados
        const resultadosContent = document.createElement("div");
        resultadosContent.className = "resultados-content";

        // Crear la sección de resumen con el círculo de porcentaje
        const resumenResultados = document.createElement("div");
        resumenResultados.className = "resumen-resultados";

        // Añadir el círculo de porcentaje
        resumenResultados.innerHTML = `
            <h3>Resultados</h3>
            <div class="porcentaje-circular">
                <div class="circulo-externo">
                    <div class="circulo-interno">
                        <span class="porcentaje-valor">${porcentajeCorrectas}%</span>
                    </div>
                </div>
                <svg class="circulo-progreso" width="200" height="200" viewBox="0 0 200 200">
                    <circle class="circulo-base" cx="100" cy="100" r="90" fill="none" stroke="#333" stroke-width="10" />
                    <circle class="circulo-valor" cx="100" cy="100" r="90" fill="none" stroke="${porcentajeCorrectas >= 70 ? '#2ecc71' : porcentajeCorrectas >= 40 ? '#f39c12' : '#e74c3c'}" stroke-width="10" 
                        stroke-dasharray="${2 * Math.PI * 90}" 
                        stroke-dashoffset="${2 * Math.PI * 90 * (1 - porcentajeCorrectas / 100)}" 
                        transform="rotate(-90 100 100)" />
                </svg>
            </div>
            <p class="resumen-texto">Has respondido correctamente <span>${correctas}</span> de <span>${preguntas.length}</span> preguntas.</p>
        `;

        resultadosContent.appendChild(resumenResultados);

        // Crear el contenedor para los detalles de las respuestas
        const detalleRespuestasElement = document.createElement("div");
        detalleRespuestasElement.className = "detalle-respuestas";

        // Generar detalle de respuestas
        respuestas.forEach((respuesta, index) => {
            // Determinar si el usuario ha respondido esta pregunta
            const haRespondido = respuesta.respuestaUsuario >= 0;

            // Obtener el texto de la respuesta del usuario
            let respuestaUsuarioTexto = haRespondido ?
                respuesta.opciones[respuesta.respuestaUsuario] :
                "No respondida";

            // Crear el elemento de resultado
            const resultadoItem = document.createElement("div");

            // Asignar clase según si es correcta, incorrecta o no respondida
            if (!haRespondido) {
                resultadoItem.className = "resultado-item no-respondida";
            } else {
                resultadoItem.className = `resultado-item ${respuesta.esCorrecta ? 'correcto' : 'incorrecto'}`;
            }

            // HTML diferente según si la respuesta es correcta, incorrecta o no respondida
            if (!haRespondido) {
                // Si no se respondió
                resultadoItem.innerHTML = `
                    <div class="resultado-header">
                        <span class="resultado-numero">${index + 1}</span>
                        <div class="resultado-info">
                            <p class="resultado-pregunta"><strong>${respuesta.pregunta}</strong></p>
                            <p class="resultado-respuesta"><i class="fas fa-question-circle"></i> No respondida</p>
                        </div>
                    </div>
                `;
            } else if (respuesta.esCorrecta) {
                // Si la respuesta es correcta
                resultadoItem.innerHTML = `
                    <div class="resultado-header">
                        <span class="resultado-numero">${index + 1}</span>
                        <div class="resultado-info">
                            <p class="resultado-pregunta"><strong>${respuesta.pregunta}</strong></p>
                            <p class="resultado-respuesta"><i class="fas fa-check-circle"></i> ${respuestaUsuarioTexto}</p>
                        </div>
                    </div>
                `;
            } else {
                // Si la respuesta es incorrecta
                resultadoItem.innerHTML = `
                    <div class="resultado-header">
                        <span class="resultado-numero">${index + 1}</span>
                        <div class="resultado-info">
                            <p class="resultado-pregunta"><strong>${respuesta.pregunta}</strong></p>
                            <p class="resultado-respuesta"><i class="fas fa-times-circle"></i> Tu respuesta: ${respuestaUsuarioTexto}</p>
                            <p class="resultado-correcta">Respuesta correcta: ${respuesta.opciones[respuesta.respuestaCorrecta]}</p>
                            <p class="explicacion">${respuesta.explicacion}</p>
                        </div>
                    </div>
                `;
            }

            // Añadir el elemento al contenedor de respuestas
            detalleRespuestasElement.appendChild(resultadoItem);
        });

        // Añadir el contenedor de detalles al contenedor principal
        resultadosContent.appendChild(detalleRespuestasElement);

        // Añadir botones para volver
        const botonesContainer = document.createElement("div");
        botonesContainer.className = "taller-resultados-botones";

        // Verificar si hay alguna pregunta sin responder
        const hayPreguntasSinResponder = respuestas.some(respuesta => respuesta.respuestaUsuario === -1);

        // HTML para los botones - Solo incluir "Volver a las preguntas" si hay preguntas sin responder
        botonesContainer.innerHTML = `
    ${hayPreguntasSinResponder ? `
    <button class="btn-volver-preguntas" id="btn-volver-preguntas">
        <i class="fas fa-arrow-left"></i> Volver a las preguntas
    </button>
    ` : ''}
    <button class="btn-menu-principal" id="btn-menu-principal">
        <i class="fas fa-home"></i> Ir al menú principal
    </button>
`;

        resultadosContent.appendChild(botonesContainer);

        resultadosContainer.appendChild(resultadosContent);
        // Eventos para los botones - Solo agregar evento si existe el botón
        const btnVolverPreguntas = document.getElementById("btn-volver-preguntas");
        if (btnVolverPreguntas) {
            btnVolverPreguntas.addEventListener("click", volverAPreguntas);
        }
        document.getElementById("btn-menu-principal").addEventListener("click", volverAlMenuPrincipal);

        // Ocultar preguntas con animación
        const tallerFooter = document.querySelector(".taller-practico-footer");
        resultadosContainer.style.display = "none";

        // Animar salida simultánea del cuerpo de preguntas y el footer
        const tallerContent = [tallerBody, tallerFooter];
        gsap.to(tallerContent, {
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
                // Ocultar todos los elementos de preguntas
                tallerBody.style.display = "none";
                tallerFooter.style.display = "none";

                // Mostrar resultados
                resultadosContainer.style.display = "block";
                resultadosContainer.style.opacity = 0; // Cambiar a 0 para iniciar animación
                resultadosContainer.style.scrollX = 0;
                // Posicionamiento inmediato al tope del contenedor de resultados
                window.scrollTo(0, 0);

                // Asegurar que el contenedor de resultados tenga altura suficiente
                resultadosContainer.style.maxHeight = "none";
                resultadosContainer.style.overflowY = "auto";

                // Animar entrada de resultados con callback para asegurar visibilidad
                gsap.to(resultadosContainer, {
                    opacity: 1,
                    duration: 0.4,
                    clearProps: "opacity", // Limpiar propiedades después de la animación
                    onComplete: () => {
                        // Animar el círculo de porcentaje
                        gsap.from(".circulo-valor", {
                            strokeDashoffset: 2 * Math.PI * 90,
                            duration: 1.5,
                            ease: "power2.out"
                        });

                        // Animar cada resultado individualmente con menos desplazamiento y más rápido
                        gsap.from(".resultado-item", {
                            opacity: 0,
                            y: 10, // Reducir el desplazamiento vertical
                            stagger: 0.05, // Reducir el tiempo entre animaciones de cada elemento
                            duration: 0.2, // Animación más rápida
                            ease: "power1.out",
                            onComplete: () => {
                                // Asegurar que todos los elementos tengan opacidad completa
                                document.querySelectorAll(".resultado-item").forEach(item => {
                                    item.style.opacity = 1;
                                    item.style.transform = "translateY(0)";
                                });

                                // Scroll suave hacia arriba para asegurar que se vean todos los resultados
                                setTimeout(() => {
                                    // Forzar reflow/repaint para asegurar que todos los elementos estén calculados correctamente
                                    resultadosContainer.style.display = "block";
                                    resultadosContainer.offsetHeight; // Trigger reflow

                                    // Asegurar visibilidad de todos los resultados
                                    window.scrollTo({ top: 0, behavior: 'auto' });

                                    // Hacer visibles explícitamente todos los elementos
                                    document.querySelectorAll(".resultado-item").forEach((item, index) => {
                                        item.classList.add("visible");
                                    });
                                }, 200);
                            }
                        });
                    }
                });
            }
        });
    }

    // Función para volver a las preguntas desde los resultados
    function volverAPreguntas() {
        const resultadosContainer = document.getElementById("taller-resultados");
        const tallerBody = document.getElementById("taller-practico-body");
        const tallerFooter = document.querySelector(".taller-practico-footer");

        // Animar salida de resultados
        gsap.to(resultadosContainer, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                resultadosContainer.style.display = "none";

                // Preparar elementos para la animación
                tallerBody.style.display = "block";
                tallerBody.style.opacity = 0;
                tallerFooter.style.display = "flex";
                tallerFooter.style.opacity = 0;

                // Posicionamiento inmediato al tope de la página
                window.scrollTo(0, 0);

                // Animar entrada simultánea del cuerpo de preguntas y footer
                const tallerContent = [tallerBody, tallerFooter];
                gsap.to(tallerContent, {
                    opacity: 1,
                    duration: 0.4,
                    onComplete: () => {
                        // Animar entrada de cada pregunta individualmente para efecto escalonado
                        gsap.from(".pregunta-item", {
                            opacity: 0,
                            y: 15,
                            stagger: 0.1,
                            duration: 0.3
                        });
                    }
                });
            }
        });
    }

    // Función para volver al menú principal
    function volverAlMenuPrincipal() {
        const tallerContainer = document.getElementById("taller-practico-container");

        // Animar salida del taller
        gsap.to(tallerContainer, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                // Ocultar taller
                tallerContainer.style.display = "none";

                // Restablecer estados para futura visita
                const tallerBody = document.getElementById("taller-practico-body");
                const tallerFooter = document.querySelector(".taller-practico-footer");
                const resultadosContainer = document.getElementById("taller-resultados");

                tallerBody.style.display = "block";
                tallerBody.style.opacity = 1;
                tallerFooter.style.display = "flex";
                tallerFooter.style.opacity = 1;
                resultadosContainer.style.display = "none";

                // Ocultar otras secciones
                nivelesDetalles.style.display = "none";
                temaDetalleContainer.style.display = "none";

                // Mostrar menú principal
                header.style.display = "flex";
                header.style.opacity = 0;
                nivelesContainer.style.display = "flex";
                nivelesContainer.style.opacity = 0;
                nivelesDetalles.style.display = "block";
                nivelesDetalles.style.opacity = 0;

                // Posicionamiento inmediato al tope
                window.scrollTo(0, 0);

                // Animar entrada del header
                gsap.to(header, {
                    opacity: 1,
                    duration: 0.4
                });

                // Animar entrada del contenedor de niveles 
                gsap.to(nivelesContainer, {
                    opacity: 1,
                    duration: 0.4,
                    delay: 0.1
                });

                // Animar entrada de los detalles de nivel
                gsap.to([nivelesDetalles, nuevoHeader], {
                    opacity: 1,
                    duration: 0.4,
                    delay: 0.2,
                    onComplete: () => {
                        // Asegurar que todos los elementos estén completamente visibles
                        header.style.display = "flex";
                        header.style.opacity = 1;
                        nivelesContainer.style.display = "flex";    //!Requerido para que muestre el contenido del section
                        nivelesContainer.style.opacity = "1";
                        nivelesDetalles.style.display = "block";
                        nivelesDetalles.style.opacity = "1";
                        nuevoHeader.style.display = "flex";
                        nuevoHeader.style.opacity = 1;
                    }
                });

                gsap.from(".nivel", {
                    opacity: 0,
                    y: 20,
                    stagger: 0.1,
                    duration: 0.3,
                    delay: 0.2
                });
            }
        });
    }

    // Función para volver desde el taller práctico al detalle del tema
    function volverDesdeTaller() {
        const tallerContainer = document.getElementById("taller-practico-container");

        // Animar salida del taller
        gsap.to(tallerContainer, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                tallerContainer.style.display = "none";

                // Restaurar estados para futuras visitas
                const tallerBody = document.getElementById("taller-practico-body");
                const tallerFooter = document.querySelector(".taller-practico-footer");
                const resultadosContainer = document.getElementById("taller-resultados");

                tallerBody.style.display = "block";
                tallerBody.style.opacity = 1;
                tallerFooter.style.display = "flex";
                tallerFooter.style.opacity = 1;
                resultadosContainer.style.display = "none";

                // Mostrar el detalle del tema con animación
                temaDetalleContainer.style.display = "flex";
                temaDetalleContainer.style.opacity = 0;

                // Posicionamiento inmediato al tope
                window.scrollTo(0, 0);

                // Animar entrada del detalle del tema
                gsap.to(temaDetalleContainer, {
                    opacity: 1,
                    duration: 0.4,
                    onComplete: () => {
                        // Animar entrada de cada sección del tema
                        gsap.from(".seccion-teoria, .seccion-importancia, .seccion-estructura, .seccion-ejemplos", {
                            opacity: 0,
                            y: 20,
                            stagger: 0.15,
                            duration: 0.4
                        });
                    }
                });
            }
        });
    }

    niveles.forEach(nivel => {
        nivel.addEventListener("click", () => {
            mostrarDetallesNivel(nivel);
        });

        // Animación de hover con GSAP
        nivel.addEventListener("mouseenter", () => {
            gsap.to(nivel, {
                scale: 1.05,
                duration: 0.3,
                boxShadow: "0px 0px 20px rgba(0, 255, 255, 1)"
            });
        });

        nivel.addEventListener("mouseleave", () => {
            gsap.to(nivel, {
                scale: 1,
                duration: 0.3,
                boxShadow: "0px 0px 15px rgba(0, 183, 255, 0.8)"
            });
        });
    });

    // Eventos para los botones
    btnVolver.addEventListener("click", ocultarDetallesNivel);
    btnTemaVolver.addEventListener("click", ocultarDetalleTema);
    btnPractica.addEventListener("click", irATallerPractico);
    document.getElementById("btn-taller-volver").addEventListener("click", volverDesdeTaller);
    document.getElementById("btn-verificar").addEventListener("click", verificarRespuestas);
});