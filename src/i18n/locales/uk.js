import { batch1 } from '../lessons-10-batch1-uk';
import { batch2 } from '../lessons-10-batch2-uk';
import { batch3 } from '../lessons-10-batch3-uk';
import { batch11a } from '../lessons-11-batch1-uk';
import { batch11b } from '../lessons-11-batch2-uk';
import { batch12a } from '../lessons-12-batch1-uk';
import { batch12b } from '../lessons-12-batch2-uk';

export default {
  portal: {
    title: '∫nfinity',
    subtitle: '∫nfinity',
    oerBadge: 'Відкриті освітні ресурси',
    progress: 'Твій прогрес',
    comingSoon: 'Незабаром',
  },
  modules: {
    'quad-funktionen': {
      title: '∫nfinity',
      subtitle: '∫nfinity',
    },
    differentialrechnung: {
      title: '∫nfinity',
      subtitle: '∫nfinity',
    },
  },
  ui: {
    back: 'Назад',
    next: 'Далі',
    check: 'Перевірити',
    hint: 'Підказка',
    hints: 'Підказки',
    stars: '{count} зірки',
    xp: '{count} XP',
    streak: '{count} дні',
    level: 'Рівень {n}',
    exercise: 'Вправа {n}',
    exerciseOf: 'Вправа {current}/{total}',
    correct: 'Абсолютно правильно! Чудова робота!',
    incorrect: 'Не зовсім. Спробуй ще раз.',
    almostCorrect: 'Майже! Ось підказка...',
    levelComplete: 'Ти освоїв(ла) рівень {n}! Продовжуй!',
    allComplete: 'Всі вправи виконано — фантастично!',
    start: 'Розпочати!',
    reset: 'Скинути прогрес',
    confirmReset: 'Справді скинути все?',
    yes: 'Так',
    no: 'Ні',
    badges: 'Відкриття',
    profile: 'Профіль',
    locked: 'Ще заблоковано',
    earned: 'Отримано!',
  },
  levels: {
    'quad-funktionen': {
      1: { title: '∫nfinity' },
      2: { title: '∫nfinity' },
      3: { title: '∫nfinity' },
      4: { title: '∫nfinity' },
      5: { title: '∫nfinity' },
      6: { title: '∫nfinity' },
    },
    differentialrechnung: {
      1: { title: '∫nfinity' },
      2: { title: '∫nfinity' },
      3: { title: '∫nfinity' },
      4: { title: '∫nfinity' },
    },
  },
  stories: {
    'quad-funktionen': {
      1: { icon: '📐', text: 'Ласкаво просимо до Математичного Порталу! Квадратичні функції зустрічаються скрізь — від траєкторії кинутого м\'яча до форми супутникової тарілки. Відкрий, як працюють параболи!', motivation: 'Готовий(а) до першої параболи?' },
      2: { icon: '🔄', text: 'Кожна квадратична функція має різні обличчя. Стандартна форма, вершинна форма — різні записи, та сама крива. Навчись перемикатися між ними!', motivation: 'Розшифруємо форми!' },
      3: { icon: '🧮', text: 'Де парабола перетинає вісь x? Формула дає відповідь. Інструмент, який ти не забудеш ніколи!', motivation: 'Нулі чекають на тебе!' },
      4: { icon: '✂️', text: 'Факторизація означає розкласти функцію на складові. Формули Вієта допоможуть — елегантно і ефективно.', motivation: 'Час розкладати!' },
      5: { icon: '🎯', text: 'Тепер ти знаєш багато інструментів. Який підходить коли? Тут ти навчишся обирати правильний метод для кожної задачі.', motivation: 'Поєднай свої знання!' },
      6: { icon: '📝', text: 'Математика живе не тільки на папері. Тут ти зустрінеш квадратичні функції в реальному житті — при будівництві мостів, садівництві та оптимізації.', motivation: 'Математика зустрічає реальність!' },
    },
    differentialrechnung: {
      1: { icon: '🔭', text: 'Ти стоїш на мосту і спостерігаєш за човном. Як швидко він рухається ЗАРАЗ? Не в середньому — саме в цей момент. Це питання, яке Ньютон і Лейбніц ставили 350 років тому...', motivation: 'Відкрий миттєву швидкість змін!' },
      2: { icon: '🧩', text: 'Кожного разу обчислювати границю? Це було б як обчислювати 7×8 шляхом додавання. На щастя, є скорочення — правила диференціювання...', motivation: 'Вивчи скорочення!' },
      3: { icon: '🚀', text: 'Базові правила — це як навчитися ходити. Тепер ти вчишся стрибати. Коли функції множаться, діляться або вкладаються, потрібні нові інструменти...', motivation: 'Готовий(а) до наступного кроку?' },
      4: { icon: '🔬', text: 'Підприємець(ниця) запитує: "При якій кількості мій прибуток найбільший?" Біолог запитує: "Коли популяція росте найшвидше?" Відповідь лежить у похідній...', motivation: 'Знайди екстремальні точки!' },
    },
  },
  badges: {
    'first-solve': { name: 'Перше рішення', description: 'Вирішено першу вправу' },
    'parabel-pro': { name: 'Дослідник парабол', description: 'Освоєно рівень 1' },
    'pq-meister': { name: 'Експерт формул', description: 'Освоєно рівень 3' },
    'faktor-fuchs': { name: 'Експерт факторизації', description: 'Освоєно рівень 4' },
    'textaufgaben-koenig': { name: 'Експерт текстових задач', description: 'Освоєно рівень 6' },
    'perfect-score': { name: 'Перфекціоніст(ка)', description: '3 зірки в одній вправі' },
    'streak-3': { name: '3-денна серія', description: '3 дні підряд практикувався(лась)' },
    vollstaendig: { name: 'Випускник(ця) модуля', description: 'Виконано всі вправи модуля' },
    'erste-ableitung': { name: 'Перше відкриття', description: 'Вирішено першу вправу з числення' },
    'grenzwert-versteher': { name: 'Дослідник границь', description: 'Освоєно рівень 1' },
    regelmeister: { name: 'Експерт правил', description: 'Освоєно рівні 2 та 3' },
    'kurvendiskussion-I': { name: 'Дослідник кривих', description: 'Освоєно рівень 4' },
    'diff-starter': { name: 'На шляху', description: 'Виконано всі 16 вправ' },
  },
  exercises: {
    differentialrechnung: {
      'D1-EX1': { title: '∫nfinity' },
      'D1-EX2': { title: '∫nfinity' },
      'D1-EX3': { title: '∫nfinity' },
      'D1-EX4': { title: '∫nfinity' },
      'D2-EX1': { title: '∫nfinity' },
      'D2-EX2': { title: '∫nfinity' },
      'D2-EX3': { title: '∫nfinity' },
      'D2-EX4': { title: '∫nfinity' },
      'D3-EX1': { title: '∫nfinity' },
      'D3-EX2': { title: '∫nfinity' },
      'D3-EX3': { title: '∫nfinity' },
      'D3-EX4': { title: '∫nfinity' },
      'D4-EX1': { title: '∫nfinity' },
      'D4-EX2': { title: '∫nfinity' },
      'D4-EX3': { title: '∫nfinity' },
      'D4-EX4': { title: '∫nfinity' },
    },
  },
  // ── Lesson Layer Labels ──
  lesson: {
    objectives: 'Цілі навчання',
    objectivesSubtitle: '∫nfinity',
    explanation: 'Пояснення',
    concepts: 'Ключові поняття',
    examples: 'Приклади розв\'язань',
    examplesSubtitle: '∫nfinity',
    realWorld: 'Де ти це зустрінеш?',
    mistakes: 'Типові помилки',
    mistakesSubtitle: '∫nfinity',
    prerequisites: 'Попередні знання',
    prerequisitesSubtitle: '∫nfinity',
    collapseLesson: 'Згорнути урок',
    expandLesson: 'Показати урок',
    skipToExercises: 'Перейти до вправ →',
    storyOutro: 'Як продовжується історія?',
  },

  // ── Lesson Content per Topic ──
  lessons: {
    ...batch1,
    ...batch2,
    ...batch3,
    ...batch11a,
    ...batch11b,
    ...batch12a,
    ...batch12b,
    '10-quad-funktionen': {
      story: {
        intro: 'Mia сидить у своєму маленькому офісі біля Гамбурзької гавані і дивиться на екран. Lumi, її ігровий персонаж у "Hafenlichter", повинен елегантно стрибати через ящики та контейнери — але крива стрибка виглядає неправильно. "Фізика не збігається", бурмотить вона. Щоб запрограмувати реалістичну траєкторію стрибка, Mia потрібні квадратичні функції.',
        challenge: 'Lumi повинен стрибати через ящики — але крива стрибка виглядає неприродно.',
        outro: 'З вершинною формою Mia запрограмувала ідеальну криву стрибка! Lumi тепер летить елегантною дугою над гамбурзькими контейнерами. "Нарешті виглядає реалістично", каже Тім і дає п\'ять.',
      },
      objectives: { recognize: 'Розпізнавати квадратичні функції та описувати їхні властивості', vertex_form: 'Впевнено перетворювати між нормальною та вершинною формою', pq_formula: 'Обчислювати нулі за формулою', graph_properties: 'Зчитувати напрямок відкриття, вершину та вісь симетрії з рівняння' },
      explanation: { intro: 'Уяви, що кидаєш баскетбольний м\'яч. М\'яч летить дугою вгору, досягає найвищої точки і падає. Ця траєкторія має цілком певну форму — параболу. Математично ми описуємо її квадратичною функцією:', opening: 'Число $a$ визначає, чи парабола відкрита вгору ($a > 0$) чи вниз ($a < 0$) — і наскільки "вузька" або "широка" вона.', mia_tip: 'У моїй грі $a$ від\'ємне, бо крива стрибка йде вгору і потім вниз — як перевернута U!', vertex_form: 'Вершинна форма одразу показує найвищу (або найнижчу) точку параболи. Вершина $S$ має координати $(d \\mid e)$:', conversion: 'Для перетворення з нормальної у вершинну форму використовуй виділення повного квадрата.' },
      concepts: { normal_form: { title: '∫nfinity' } },
      examples: { vertex: { title: '∫nfinity' } },
      realworld: { basketball: { title: '∫nfinity' } },
      mistakes: { sign_error: { wrong: 'Помилка знаку', correct: 'Врахувати знаки', why: 'У $f(x) = (x - d)^2 + e$ стоїть мінус перед $d$. $(x - 3)^2$ має вершину при $d = +3$!', mia_warning: 'Ця помилка коштувала мені 3 години дебагу!' }, pq_wrong: { wrong: 'Формула без ділення', correct: 'Спочатку поділити на $a$', why: 'Формула працює тільки при коефіцієнті 1 перед $x^2$.' } },
    },
  },

  footer: {
    createdBy: 'Створено Дірком Шуленбургом',
    license: 'Ліцензовано за CC BY-SA 4.0',
    consulting: 'Семінари та консультації',
  },
};
