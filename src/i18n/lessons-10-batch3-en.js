export const batch3 = {
  '10-periodisch': {
    story: {
      intro: 'Mia scrolls through the animation list of Harbor Lights and frowns. Lumi\'s breathing animation looks robotic — choppy and unnatural. The waves in the harbor also seem stiff, and the day-night cycle jumps instead of flowing. "Everything that repeats needs an oscillation," says Tim. "Sine and cosine — they\'re made for this." Mia opens her calculator and dives into the world of periodic functions.',
      challenge: 'Breathing animation, wave motion, and day-night cycle should swing naturally instead of jerking.',
      outro: 'Lumi\'s breath now rises and falls gently, the harbor waves roll smoothly to the shore, and the light transitions fluidly from dawn red to midnight blue. "Sine functions are everywhere in nature," says Jule. Mia nods: "And now they\'re in Harbor Lights too."',
    },
    objectives: {
      periodic_functions: 'Recognize periodic functions and distinguish them from non-periodic ones',
      amplitude_period: 'Read amplitude and period from graphs and equations',
      frequency: 'Calculate the frequency and explain its meaning',
      modeling: 'Model real-world phenomena with sine functions',
    },
    explanation: {
      intro: 'Some processes repeat over and over: your heartbeat, the tides, the seasons. In mathematics, we describe such oscillations with periodic functions. The most important one is the sine function:',
      parameters: 'The general sine function has four parameters that you can think of as knobs on a mixing board: $A$ controls the height of the oscillation (amplitude), $b$ affects how quickly the oscillation repeats (period), $c$ shifts the curve left or right, and $d$ shifts it up or down.',
      mia_tip: 'For Lumi\'s breathing animation, I use $A = 3$ pixels and $T = 4$ seconds. That means: Every 4 seconds Lumi breathes in and out once, and the chest moves 3 pixels up and down. Completely natural!',
      graph_reading: 'To read a periodic function from a graph, look for the pattern that repeats. The distance between two identical points is the period $T$. Mathematically, periodicity means:',
      applications: 'Periodic functions are the mathematical tool for everything that oscillates: sound waves, alternating current, pendulums, light waves, and even the orbits of planets. Whenever a process repeats regularly, a sine function (or its relatives) is behind it.',
    },
    concepts: {
      amplitude: {
        title: 'Amplitude',
        desc: 'The amplitude $A$ is the maximum displacement from the midline. It measures how "strong" the oscillation is. On the graph, you read it as half the difference between the highest and lowest points.',
      },
      period: {
        title: 'Period',
        desc: 'The period $T$ is the length of one complete oscillation cycle. After time $T$, everything repeats exactly. The larger $b$, the shorter the period.',
      },
      frequency: {
        title: 'Frequency',
        desc: 'The frequency $f$ indicates how many oscillations occur per time unit. It is the reciprocal of the period. Unit: Hertz (Hz) = oscillations per second.',
      },
    },
    examples: {
      graph_reading: {
        title: 'Reading a sine function from a graph',
        context: 'Mia has a wave effect in the game and wants to find the matching equation.',
        step1: 'Read the highest and lowest points: $y_{\\max} = 3$ and $y_{\\min} = -3$. The amplitude is half the difference — the wave swings 3 units up and down.',
        step2: 'Read the period: One complete cycle takes $4\\pi$ units. From this we calculate $b$ using the formula $b = \\frac{2\\pi}{T}$ — giving $0{,}5$.',
        step3: 'Assemble the equation: Since the midline is at $y = 0$ ($d = 0$) and no phase shift ($c = 0$) is apparent, the function is simply:',
        mia_comment: 'Amplitude 3, period $4\\pi$ — that makes the harbor waves sway nice and slow. For faster waves, I just increase $b$!',
      },
      ferris_wheel: {
        title: 'Modeling a Ferris wheel',
        context: 'A Ferris wheel with 60 m diameter completes one revolution every 10 minutes. The lowest gondola is 5 m above the ground.',
        step1: 'Determine the amplitude: The radius is half the height, so $A = 30\\,\\text{m}$. The midline is at $d = 5 + 30 = 35\\,\\text{m}$ (ground + radius).',
        step2: 'The period is one full revolution: $T = 10\\,\\text{min}$. This gives $b = \\frac{2\\pi}{10} = \\frac{\\pi}{5}$.',
        step3: 'Consider the starting point: Starting at the bottom means we shift the sine by $-\\frac{\\pi}{2}$ (the sine normally starts at the middle, not the bottom).',
        step4: 'Check: After 2.5 minutes (quarter revolution), the gondola should be at mid-height. Substituting: $\\sin(0) = 0$, so $h = 35\\,\\text{m}$. Correct!',
        mia_comment: 'That\'s exactly how the day-night cycle works in Harbor Lights: Sine with $T = 24$ (one game day) and a shift so that it\'s darkest at midnight.',
      },
    },
    realworld: {
      heartbeat: {
        title: 'Your Heartbeat',
        desc: 'Your heart beats about 72 times per minute — that\'s 1.2 beats per second. The electrical signals of your heart (ECG) show a periodic curve. Doctors read amplitude and frequency to detect heart problems.',
      },
      tides: {
        title: 'Ebb and Flow',
        desc: 'At Hamburg Harbor, the water level fluctuates between high and low tide every 12.4 hours. That\'s an almost perfect sine function — caused by the gravitational pull of the moon.',
      },
      temperature: {
        title: 'Annual Temperature',
        desc: 'The average temperature over a year roughly follows a sine curve: warm in summer, cold in winter, with a period of 365 days. Climate researchers use this model as a basis for predictions.',
      },
    },
    mistakes: {
      period_frequency: {
        wrong: 'Confusing period and frequency',
        correct: 'Frequency is the reciprocal of the period',
        why: 'If the period is $T = 2\\,\\text{s}$, it oscillates once every 2 seconds. The frequency is then $f = \\frac{1}{2} = 0{,}5\\,\\text{Hz}$ — not $2\\,\\text{Hz}$! Frequency = "How often per second?", Period = "How long does one cycle take?"',
        mia_warning: 'This mistake made Lumi\'s breathing twice as fast — she looked like she\'d just finished a sprint!',
      },
      b_value: {
        wrong: 'Equating $b$ with the period',
        correct: 'Convert between $b$ and $T$ using the formula',
        why: '$b$ is NOT the period, but is related to it via $T = \\frac{2\\pi}{b}$. If the period is $4\\pi$, then $b = \\frac{2\\pi}{4\\pi} = 0{,}5$ — not $4\\pi$!',
      },
    },
  },

  '10-diff-einfuehrung': {
    story: {
      intro: 'Harbor Lights is running — but it\'s stuttering. Mia opens the performance monitor and sees: In some scenes, the frame rate drops to 15 FPS. "Where exactly does it get slow?" asks Tim. "I don\'t need the average over the whole scene, but the exact spot where performance breaks down." Jule smiles: "That\'s exactly the question that led to the invention of calculus — the instantaneous rate of change."',
      challenge: 'Find the exact spot where the frame rate drops — not just the average.',
      outro: 'Mia found the critical spot: Right at frame 847, the render time explodes because 200 particles spawn simultaneously. "Without the instantaneous rate of change, I would have searched forever," she says. Tim nods: "Newton would have done it the same way — just without a performance monitor."',
    },
    objectives: {
      average_rate: 'Calculate and interpret the average rate of change (secant slope)',
      instantaneous_rate: 'Understand the instantaneous rate of change as a limit',
      limit_concept: 'Follow the transition from secant to tangent',
      derivative_notation: 'Know and apply the different notations for the derivative',
    },
    explanation: {
      intro: 'Imagine you\'re cycling to school. Your speedometer shows 20 km/h — that\'s your instantaneous speed. But how do you calculate it? If you say "I rode 10 km in 30 minutes," that\'s an average. The instantaneous speed at a specific point is something different — and that\'s exactly what differential calculus is about.',
      secant_to_tangent: 'The idea is brilliantly simple: Calculate the average slope between two points, then move the points closer and closer together. In the limit — when the distance approaches zero — you get the slope at a single point. That is the derivative:',
      mia_tip: 'The average frame rate over 10 seconds tells me nothing. I need the instantaneous rate at frame 847! Just like the speedometer: It doesn\'t show the average of the entire trip, but how fast you\'re going RIGHT NOW.',
      derivative_meaning: 'The derivative $f\'(x_0)$ has a clear meaning: It gives the slope of the tangent line to the graph at the point $x_0$. If $f\'(x_0) > 0$, the function is increasing there. If $f\'(x_0) < 0$, it\'s decreasing. If $f\'(x_0) = 0$, the function (possibly) has a local maximum or minimum there. There are different notations:',
      geometric_interpretation: 'Geometrically, here\'s what happens: The secant through two points on the graph rotates as the points move together. In the limit, the secant becomes the tangent — a line that "touches" the graph at exactly one point. The slope of this tangent is the derivative.',
    },
    concepts: {
      difference_quotient: {
        title: 'Difference Quotient',
        desc: 'The average rate of change between two points. It calculates the slope of the secant — a line that intersects the graph at two points.',
      },
      differential_quotient: {
        title: 'Differential Quotient (Derivative)',
        desc: 'The instantaneous rate of change at a point. Arises when $h$ in the difference quotient approaches zero. Gives the tangent slope.',
      },
      derivative_notation: {
        title: 'Derivative Notations',
        desc: 'There are three common notations: $f\'(x)$ (Lagrange, most common in school), $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ (Leibniz, emphasizes the fraction character), and $\\dot{y}$ (Newton, mainly in physics for time derivatives).',
      },
    },
    examples: {
      average_speed: {
        title: 'Average Speed',
        context: 'A ball rolls down a ramp. The distance depends quadratically on time.',
        step1: 'Given is the distance-time function. After 2 seconds, the ball has traveled 2 m; after 4 seconds, 8 m.',
        step2: 'Average speed between $t = 2$ and $t = 4$: We divide the change in distance by the change in time. This gives $3\\,\\text{m/s}$ on average.',
        step3: 'Now we shorten the interval: Between $t = 2$ and $t = 2{,}1$, we get $2{,}05\\,\\text{m/s}$. The shorter the interval, the closer we get to the instantaneous speed at $t = 2$.',
        mia_comment: 'That\'s exactly how my performance monitor works: It measures the frame rate in ever-shorter intervals until I find the exact spot where it stutters.',
      },
      instantaneous_rate: {
        title: 'Calculating the instantaneous rate of change',
        context: 'Determine the derivative of $f(x) = x^2$ at the point $x_0 = 3$.',
        step1: 'We substitute $f(x) = x^2$ and $x_0 = 3$ into the difference quotient. Goal: What happens as $h$ approaches 0?',
        step2: 'Expand the numerator: $(3+h)^2 = 9 + 6h + h^2$. Minus $f(3) = 9$ gives $6h + h^2$ in the numerator.',
        step3: 'Divide by $h$ (we can do this because $h \\neq 0$ in the limit process): This leaves $6 + h$.',
        step4: 'Take the limit: As $h \\to 0$, $6 + h$ becomes $6$. The tangent slope at $x = 3$ is exactly $6$.',
        mia_comment: 'The tangent at $x = 3$ has slope 6. If I do this for every point, I get the derivative function $f\'(x) = 2x$. At $x = 3$: $f\'(3) = 2 \\cdot 3 = 6$. Checks out!',
      },
    },
    realworld: {
      speed_camera: {
        title: 'Speed Cameras & Velocity',
        desc: 'A speed camera doesn\'t measure your instantaneous speed, but your average speed over a short distance (Section Control: over several kilometers). The shorter the measurement distance, the closer to the instantaneous value.',
      },
      stock_trends: {
        title: 'Stock Prices & Trends',
        desc: 'When a stock is "rising," analysts mean the positive derivative of the price. The slope of the tangent to the price curve shows the trend: positive = upward trend, negative = downward trend, zero = turning point.',
      },
      speedometer: {
        title: 'Car Speedometer',
        desc: 'Your speedometer shows the instantaneous speed — mathematically the derivative of the distance function with respect to time. GPS devices calculate it as the limit of very short time intervals.',
      },
    },
    mistakes: {
      average_vs_instant: {
        wrong: 'Average = Instantaneous value',
        correct: 'Distinguish between average and instantaneous values',
        why: 'The average rate of change over an interval $[1;\\,5]$ is NOT equal to the instantaneous rate of change at $x = 3$ (the midpoint). This only holds for linear functions! For curved graphs, both values differ.',
        mia_warning: 'I first calculated the average frame rate and thought everything was fine. But locally there were massive drops! The average had hidden the problem.',
      },
      secant_tangent: {
        wrong: 'Secant slope = Tangent slope',
        correct: 'The tangent is the limiting case of the secant',
        why: 'The secant intersects the graph at two points, the tangent touches it at one. Only when the two points converge ($h \\to 0$) does the secant become the tangent. Without the limit, it\'s only an approximation.',
      },
    },
  },

  '10-funktionsklassen': {
    story: {
      intro: 'Harbor Lights needs a balancing system: How fast should Lumi level up? How strong do enemies get? How much does an upgrade cost? "If everything grows linearly, the game gets boring," says Jule. Tim adds: "And if everything grows exponentially, it gets unfair." Mia realizes: She needs to know different growth types and use them strategically.',
      challenge: 'Find the right growth curves for game balancing — linear, quadratic, exponential, or logarithmic.',
      outro: 'Mia\'s balancing system is complete: Movement speed grows linearly, fall damage quadratically, XP requirement exponentially, and the learning curve logarithmically. "Every curve has its place," she says with satisfaction. The game now feels fair and exciting — from Level 1 to the final boss.',
    },
    objectives: {
      identify_types: 'Recognize the four major function classes (linear, quadratic, exponential, logarithmic) from equations and graphs',
      compare_growth: 'Compare and rank the growth behavior of function classes',
      match_context: 'Choose the appropriate function class for a given situation and explain why',
      graph_recognition: 'Match graphs to the correct function types',
    },
    explanation: {
      intro: 'In mathematics, there are different "families" of functions — each with its own character. Some grow steadily, others ever faster, and others ever slower. The four most important classes for grade 10 are:',
      mia_tip: 'In game design, I use each function class for something different: Linear growth for predictable things (movement speed), quadratic for things that "ramp up" (fall damage), exponential for challenges (XP requirement), and logarithmic for learning effects (skill progression).',
      growth_comparison: 'The crucial question is: How fast does each function class grow for large $x$-values? The order is always the same — no matter what specific numbers you use:',
      choosing_functions: 'Choosing the right function for a problem is a key skill. Ask yourself: Is the change constant (linear)? Does it accelerate steadily (quadratic)? Does the value double at equal intervals (exponential)? Does the increase keep getting smaller (logarithmic)?',
    },
    concepts: {
      linear: {
        title: 'Linear Functions',
        desc: 'Constant rate of change: The same amount is added per step. The graph is a straight line. Slope $m$ and y-intercept $b$ can be read directly.',
      },
      quadratic: {
        title: 'Quadratic Functions',
        desc: 'The rate of change itself changes linearly — more is added faster and faster (or less and less). The graph is a parabola with a vertex.',
      },
      exponential: {
        title: 'Exponential Functions',
        desc: 'Growth by a fixed percentage: The more there is, the more is added. Doubling at equal time intervals. Grows faster in the long run than any power function.',
      },
      logarithmic: {
        title: 'Logarithmic Functions',
        desc: 'The inverse of the exponential function. Grows quickly at first, then ever more slowly. Models saturation effects and learning curves.',
      },
    },
    examples: {
      identify_type: {
        title: 'Identifying function types from data tables',
        context: 'Three data sets are given. Which type fits each?',
        step1: 'Test for linear: Calculate the differences of consecutive $y$-values. If they\'re constant, the function is linear.',
        step2: 'Test for exponential: Calculate the ratios of consecutive $y$-values. If they\'re constant, the function is exponential.',
        step3: 'Test for quadratic: Calculate the second differences (differences of the differences). If these are constant, the function is quadratic.',
        mia_comment: 'That\'s exactly how I test my balancing: I simulate 100 rounds and check whether the values follow the desired growth type. If the second differences drift, something is off.',
      },
      game_mechanics: {
        title: 'Modeling game mechanics',
        context: 'Four different game mechanics in Harbor Lights need different functions.',
        step1: 'Movement speed: Increases by the same amount per level ($+5$ per level). That\'s a constant change — so linear. Fair and predictable.',
        step2: 'Fall damage: From 2 m height, light damage; from 10 m, much more. The damage increase accelerates — quadratic. Makes physical sense (energy = $\\frac{1}{2}mv^2$).',
        step3: 'XP requirement per level: Level 2 needs 150 XP, Level 3 needs 225 XP, Level 4 needs 337 XP. The requirement always grows by 50% — exponential. This keeps higher levels a real challenge.',
        step4: 'Learning curve (Skill): At the beginning you learn quickly, later more and more slowly. After $t$ hours of play time, you master $20 \\cdot \\log_2(t+1)$ percent of the mechanics — logarithmic.',
        mia_comment: 'That\'s the core of game design: The right curve for the right mechanic. Linear XP would be boring, exponential fall damage would be unfair. Each function type has its sweet spot!',
      },
    },
    realworld: {
      app_users: {
        title: 'Viral App Downloads',
        desc: 'When every user invites two friends and they invite two more, downloads double. Barely visible at first, then explosive — typically exponential. TikTok, Instagram, and WhatsApp all grew this way.',
      },
      salary: {
        title: 'Allowance & Salary',
        desc: 'Your allowance increases (hopefully) by the same amount every year — linear growth. Later in your career, your salary often grows similarly: A fixed amount per year of experience.',
      },
      learning_curve: {
        title: 'Learning Progress',
        desc: 'New instrument, new sport, new language: At the beginning, you make huge progress, then it gets harder and harder to improve. That\'s a logarithmic saturation curve — and completely normal!',
      },
    },
    mistakes: {
      exp_vs_quad: {
        wrong: '"Exponential" and "quadratic" are the same thing',
        correct: 'Exponential grows MUCH faster than quadratic',
        why: 'For small numbers, $x^2$ and $2^x$ look similar: $4^2 = 16$ and $2^4 = 16$. But at $x = 10$: $10^2 = 100$ versus $2^{10} = 1024$. Exponential growth overtakes every power function!',
        mia_warning: 'I first made the XP requirement quadratic instead of exponential. Result: From Level 20 on, the game was way too easy because players earned XP faster than the requirement grew.',
      },
      all_curves_linear: {
        wrong: 'All growth is linear',
        correct: 'Check the growth type first',
        why: 'Just because something "doubles" doesn\'t mean it\'s linear! "Twice as many followers every 3 days" is exponential, not linear. Linear would be: "100 new followers every day." The difference: constant increase (linear) vs. constant factor (exponential).',
      },
    },
  },
};
