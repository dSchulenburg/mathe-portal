import { batch1 } from '../lessons-10-batch1-ru';
import { batch2 } from '../lessons-10-batch2-ru';
import { batch3 } from '../lessons-10-batch3-ru';
import { batch11a } from '../lessons-11-batch1-ru';
import { batch11b } from '../lessons-11-batch2-ru';
import { batch12a } from '../lessons-12-batch1-ru';
import { batch12b } from '../lessons-12-batch2-ru';

export default {
  portal: {
    title: '∫nfinity',
    subtitle: '∫nfinity',
    oerBadge: 'Открытые образовательные ресурсы',
    progress: 'Твой прогресс',
    comingSoon: 'Скоро',
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
    next: 'Далее',
    check: 'Проверить',
    hint: 'Подсказка',
    hints: 'Подсказки',
    stars: '{count} звезды',
    xp: '{count} XP',
    streak: '{count} дни',
    level: 'Уровень {n}',
    exercise: 'Упражнение {n}',
    exerciseOf: 'Упражнение {current}/{total}',
    correct: 'Совершенно верно! Отличная работа!',
    incorrect: 'Не совсем. Попробуй ещё раз.',
    almostCorrect: 'Почти! Вот подсказка...',
    levelComplete: 'Ты освоил(а) уровень {n}! Продолжай!',
    allComplete: 'Все упражнения выполнены — фантастично!',
    start: 'Начать!',
    reset: 'Сбросить прогресс',
    confirmReset: 'Действительно сбросить всё?',
    yes: 'Да',
    no: 'Нет',
    badges: 'Открытия',
    profile: 'Профиль',
    locked: 'Ещё заблокировано',
    earned: 'Получено!',
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
      1: { icon: '📐', text: 'Добро пожаловать в Математический Портал! Квадратичные функции встречаются везде — от траектории брошенного мяча до формы спутниковой тарелки. Открой, как работают параболы!', motivation: 'Готов(а) к первой параболе?' },
      2: { icon: '🔄', text: 'Каждая квадратичная функция имеет разные лица. Стандартная форма, вершинная форма — разные записи, та же кривая. Научись переключаться между ними!', motivation: 'Давай расшифруем формы!' },
      3: { icon: '🧮', text: 'Где парабола пересекает ось x? Дискриминант даёт ответ. Инструмент, который ты не забудешь никогда!', motivation: 'Нули ждут тебя!' },
      4: { icon: '✂️', text: 'Факторизация означает разложить функцию на составляющие. Формулы Виета помогут — элегантно и эффективно.', motivation: 'Время разложить!' },
      5: { icon: '🎯', text: 'Теперь ты знаешь много инструментов. Какой подходит когда? Здесь ты научишься выбирать правильный метод для каждой задачи.', motivation: 'Объедини свои знания!' },
      6: { icon: '📝', text: 'Математика живёт не только на бумаге. Здесь ты встретишь квадратичные функции в реальной жизни — при строительстве мостов, садоводстве и оптимизации.', motivation: 'Математика встречает реальность!' },
    },
    differentialrechnung: {
      1: { icon: '🔭', text: 'Ты стоишь на мосту и наблюдаешь за лодкой. Как быстро она движется СЕЙЧАС? Не в среднем — именно в этот момент. Это вопрос, который Ньютон и Лейбниц задавали 350 лет назад...', motivation: 'Открой мгновенную скорость изменения!' },
      2: { icon: '🧩', text: 'Каждый раз вычислять предел? Это было бы как вычислять 7×8 путём сложения. К счастью, есть сокращения — правила дифференцирования...', motivation: 'Выучи сокращения!' },
      3: { icon: '🚀', text: 'Базовые правила — это как научиться ходить. Теперь ты учишься прыгать. Когда функции умножаются, делятся или вкладываются, нужны новые инструменты...', motivation: 'Готов(а) к следующему шагу?' },
      4: { icon: '🔬', text: 'Предприниматель(ница) спрашивает: "При каком количестве моя прибыль наибольшая?" Биолог спрашивает: "Когда популяция растёт быстрее всего?" Ответ лежит в производной...', motivation: 'Найди экстремальные точки!' },
    },
  },
  badges: {
    'first-solve': { name: 'Первое решение', description: 'Решено первое упражнение' },
    'parabel-pro': { name: 'Исследователь парабол', description: 'Освоен уровень 1' },
    'pq-meister': { name: 'Эксперт формул', description: 'Освоен уровень 3' },
    'faktor-fuchs': { name: 'Эксперт факторизации', description: 'Освоен уровень 4' },
    'textaufgaben-koenig': { name: 'Эксперт текстовых задач', description: 'Освоен уровень 6' },
    'perfect-score': { name: 'Перфекционист(ка)', description: '3 звезды в одном упражнении' },
    'streak-3': { name: '3-дневная серия', description: '3 дня подряд занимался(лась)' },
    vollstaendig: { name: 'Выпускник(ца) модуля', description: 'Выполнены все упражнения модуля' },
    'erste-ableitung': { name: 'Первое открытие', description: 'Решено первое упражнение по исчислению' },
    'grenzwert-versteher': { name: 'Исследователь пределов', description: 'Освоен уровень 1' },
    regelmeister: { name: 'Эксперт правил', description: 'Освоены уровни 2 и 3' },
    'kurvendiskussion-I': { name: 'Исследователь кривых', description: 'Освоен уровень 4' },
    'diff-starter': { name: 'На пути', description: 'Выполнены все 16 упражнений' },
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
    objectives: 'Цели обучения',
    objectivesSubtitle: '∫nfinity',
    explanation: 'Объяснение',
    concepts: 'Ключевые понятия',
    examples: 'Примеры решений',
    examplesSubtitle: '∫nfinity',
    realWorld: 'Где ты это встретишь?',
    mistakes: 'Типичные ошибки',
    mistakesSubtitle: '∫nfinity',
    prerequisites: 'Предварительные знания',
    prerequisitesSubtitle: '∫nfinity',
    collapseLesson: 'Свернуть урок',
    expandLesson: 'Показать урок',
    skipToExercises: 'Перейти к упражнениям →',
    storyOutro: 'Как продолжается история?',
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
        intro: 'Mia сидит в своём маленьком офисе у Гамбургской гавани и смотрит на экран. Lumi, её игровой персонаж в "Hafenlichter", должен элегантно прыгать через ящики и контейнеры — но кривая прыжка выглядит неправильно. "Физика не сходится", бормочет она. Чтобы запрограммировать реалистичную траекторию прыжка, Mia нужны квадратичные функции.',
        challenge: 'Lumi должен прыгать через ящики — но кривая прыжка выглядит неестественно.',
        outro: 'С вершинной формой Mia запрограммировала идеальную кривую прыжка! Lumi теперь летит элегантной дугой над гамбургскими контейнерами. "Наконец выглядит реалистично", говорит Тим и даёт пять.',
      },
      objectives: { recognize: 'Распознавать квадратичные функции и описывать их свойства', vertex_form: 'Уверенно преобразовывать между нормальной и вершинной формой', pq_formula: 'Вычислять нули по формуле', graph_properties: 'Считывать направление открытия, вершину и ось симметрии из уравнения' },
      explanation: { intro: 'Представь, что бросаешь баскетбольный мяч. Мяч летит дугой вверх, достигает высшей точки и падает. Эта траектория — парабола:', opening: 'Число $a$ определяет, открыта ли парабола вверх ($a > 0$) или вниз ($a < 0$).', mia_tip: 'В моей игре $a$ отрицательное, потому что прыжок идёт вверх и вниз — как перевёрнутая U!', vertex_form: 'Вершинная форма сразу показывает высшую (или низшую) точку. Вершина $S(d \\mid e)$:', conversion: 'Для перехода из нормальной в вершинную форму используй выделение полного квадрата.' },
      concepts: { normal_form: { title: '∫nfinity' } },
      examples: { vertex: { title: '∫nfinity' } },
      realworld: { basketball: { title: '∫nfinity' } },
      mistakes: { sign_error: { wrong: 'Ошибка знака', correct: 'Учесть знаки', why: 'В $(x - d)^2$ стоит минус. $(x - 3)^2$ имеет вершину при $d = +3$!', mia_warning: 'Эта ошибка стоила мне 3 часа дебага!' }, pq_wrong: { wrong: 'Формула без деления', correct: 'Сначала разделить на $a$', why: 'Формула работает только при коэффициенте 1 перед $x^2$.' } },
    },
  },

  footer: {
    createdBy: 'Создано Дирком Шуленбургом',
    license: 'Лицензировано под CC BY-SA 4.0',
    consulting: 'Семинары и консультации',
  },
};
