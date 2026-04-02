export const batch12b = {
  '12-normalverteilung': {
    story: {
      intro: 'Kai faces the final balancing problem of "Harbor Lights 3D": The loot drops need to feel fair, yet still be exciting. If every boss drops exactly the same amount of gold, it\'s boring — too much variance and players complain about unfairness. "I need a distribution that looks natural — many values near the average, few extremes," Kai tells his colleague Priya. The answer from their statistics lecture: the normal distribution with its perfect bell curve.',
      challenge: 'Kai needs to calibrate the loot and performance system of "Harbor Lights 3D" so that rewards are fairly distributed and frame times stay below the critical threshold — the normal distribution and its sigma rules provide the tools.',
      outro: 'With the normal distribution, Kai has built an elegant balancing system: Loot drops follow a bell curve around the target value, and the sigma rules guarantee that outliers are extremely rare. "The beauty is: I can now calculate exactly what percentage of players experience a certain drop value," he tells the team. And with the $z$-transformation, he compares completely different metrics — frame times, damage distributions, player session lengths — on a unified scale. The bell curve is everywhere.',
    },
    objectives: {
      bell_curve: 'Understand the normal distribution $N(\\mu, \\sigma^2)$ as a continuous distribution with a bell curve and interpret its parameters',
      sigma_rules: 'Apply the sigma rules ($68{,}3\\%$, $95{,}4\\%$, $99{,}7\\%$) for quick probability estimates',
      z_transformation: 'Perform the $z$-transformation and calculate probabilities using the standard normal distribution $\\Phi(z)$',
      central_limit_theorem: 'Know the Central Limit Theorem and explain why the normal distribution appears everywhere',
    },
    explanation: {
      intro: 'The normal distribution is the most important continuous distribution in statistics — and you encounter it everywhere: body heights, measurements, frame times, exam scores. Its density has the iconic bell shape, symmetric around the expected value $\\mu$. The standard deviation $\\sigma$ determines how wide or narrow the bell is: small $\\sigma$ = narrow, tall bell (little spread), large $\\sigma$ = wide, flat bell (much spread). The density function is:',
      sigma_rules: 'The sigma rules are your quick tool: They instantly tell you what percentage of all values lie in a certain range around $\\mu$ — without a table, without a calculator. Within $\\pm 1\\sigma$, about $68{,}3\\%$ lie, within $\\pm 2\\sigma$ about $95{,}4\\%$, and within $\\pm 3\\sigma$ almost everything — $99{,}7\\%$. This means: Values beyond $3\\sigma$ are extremely rare!',
      kai_tip: 'In game development, I use the sigma rules for balancing every day. If I want 95% of loot drops between 30 and 70 gold, I set $\\mu = 50$ and $2\\sigma = 20$, so $\\sigma = 10$. Done! The rules instantly give me the distribution without having to integrate anything.',
      z_transformation: 'But what if you need an exact probability — not just the sigma rules? Then the $z$-transformation comes in: You convert your value $x$ to a standardized $z$-value and look it up in the standard normal distribution table $\\Phi(z)$. The $z$-value tells you how many standard deviations $x$ is from the expected value:',
      central_limit: 'Why is the normal distribution so ubiquitous? The Central Limit Theorem provides the answer: If you add enough independent random variables, their sum — regardless of the individual distributions — approaches a normal distribution. That\'s why averages are almost always normally distributed, even when the individual data aren\'t:',
    },
    concepts: {
      normal_distribution: {
        title: 'Normal Distribution $N(\\mu, \\sigma^2)$',
        desc: 'The continuous distribution with a bell-shaped density. $\\mu$ is the expected value (center of the bell), $\\sigma^2$ the variance (width of the bell). The area under the curve is always 1. Symmetric around $\\mu$: Median = Mode = Expected value.',
      },
      sigma_rules: {
        title: 'Sigma Rules',
        desc: 'The three golden rules: $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$, $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$, $P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 99{,}7\\%$. Indispensable for quick estimates.',
      },
      z_transformation: {
        title: '$z$-Transformation',
        desc: 'Transforms any normal distribution into the standard normal distribution $N(0, 1)$: $z = \\frac{x - \\mu}{\\sigma}$. Then read $P(X \\leq x) = \\Phi(z)$ from the table. This makes any normal distributions comparable.',
      },
    },
    examples: {
      loot_balancing: {
        title: 'Loot Drop Probability',
        context: 'In "Harbor Lights 3D," bosses drop gold, normally distributed with $\\mu = 50$ and $\\sigma = 8$. Kai wants to know: How likely is a legendary drop of at least 70 gold?',
        step1: 'Set up the model — gold drops follow a normal distribution:',
        step2: 'Apply the $z$-transformation — how many standard deviations is 70 from 50?',
        step3: 'Look up in the table — read $\\Phi(2{,}5)$:',
        step4: 'Calculate the complement probability — only $0{,}6\\%$ get 70+ gold:',
        kai_comment: 'Perfect! A legendary drop for less than 1% of players — that feels special without being unfair. The normal distribution gives me total control over rarity.',
      },
      frame_times: {
        title: 'Frame Time Analysis',
        context: 'At 60 FPS, each frame must be rendered in $16{,}7\\,\\text{ms}$. Kai\'s profiler shows: Frame times are normally distributed with $\\mu = 16{,}7\\,\\text{ms}$ and $\\sigma = 2{,}1\\,\\text{ms}$. How often does the game lag (frame time $> 20\\,\\text{ms}$)?',
        step1: 'Set up the model — frame times as normal distribution:',
        step2: 'The $z$-transformation for the lag threshold $x = 20$:',
        step3: 'Look up the table value:',
        step4: 'Calculate the complement — about every 17th frame lags:',
        kai_comment: 'Almost 6% lags — that\'s too much for a smooth 3D game. I need to optimize the renderer until $\\sigma$ is smaller. Target: $\\sigma \\leq 1{,}5$, then less than 1.5% of frames are affected.',
      },
    },
    realworld: {
      quality_control: {
        title: 'Quality Control in Industry',
        desc: 'Factories use the $3\\sigma$ rule: If a part deviates more than $3\\sigma$ from the target dimension, it\'s rejected. Six Sigma management goes even further — $6\\sigma$ means at most 3.4 defects per million parts. The normal distribution is the foundation of industrial quality assurance.',
      },
      iq_scores: {
        title: 'IQ Tests and Standardization',
        desc: 'IQ scores are by definition normally distributed with $\\mu = 100$ and $\\sigma = 15$. This means: About $68\\%$ of the population have an IQ between 85 and 115, about $95\\%$ between 70 and 130. An IQ of 145 ($z = 3$) is as rare as a 70-gold loot drop!',
      },
      stock_returns: {
        title: 'Stock Returns and Risk',
        desc: 'Daily stock returns are often modeled as normally distributed — $\\sigma$ is then the risk. Portfolio managers use the $z$-transformation to calculate how likely a crash is. However: In reality, extreme outliers occur more often than the normal distribution predicts ("fat tails").',
      },
    },
    mistakes: {
      sigma_vs_variance: {
        wrong: 'Writing the normal distribution as $N(\\mu, \\sigma)$ — standard deviation instead of variance',
        correct: 'Correct is $N(\\mu, \\sigma^2)$ — the second parameter is always the variance',
        why: 'In the notation $N(\\mu, \\sigma^2)$, the second parameter is the variance $\\sigma^2$, not the standard deviation $\\sigma$. Confusing them leads to completely wrong probabilities — e.g., $N(0, 4)$ is a distribution with $\\sigma = 2$, not $\\sigma = 4$!',
        kai_warning: 'This mistake once completely destroyed my loot balancing. I meant $\\sigma = 8$ but wrote $N(50, 8)$ — that means $\\sigma = \\sqrt{8} \\approx 2{,}83$. The drops were way too uniform! Always remember: $N(\\mu, \\sigma^2)$!',
      },
      z_sign: {
        wrong: 'The $z$-formula reversed: $z = \\frac{\\mu - x}{\\sigma}$',
        correct: 'Correct is $z = \\frac{x - \\mu}{\\sigma}$ — value minus expected value, not the other way around',
        why: 'If you swap numerator and denominator, you get the wrong sign. A value above the mean should give a positive $z$, one below it a negative $z$. With $x = 70$, $\\mu = 50$: $z = +2{,}5$ (above average), not $-2{,}5$.',
      },
    },
  },

  '12-matrizen': {
    story: {
      intro: 'Kai has arrived at the heart of "Harbor Lights 3D": the 3D engine. Every object in the game — every ship, every wave, every lantern at the harbor — needs to be rotated, scaled, and translated. "In 2D, transformations were simple formulas," he recalls from Mia\'s beginnings. "But in 3D, you need a system that chains arbitrary transformations — and those are matrices." Kai opens the shader code and sees matrices everywhere: Model matrix, View matrix, Projection matrix.',
      challenge: 'Kai needs to understand and implement the 3D transformations for his game engine — rotation, scaling, and transition processes, all controlled by matrix multiplication.',
      outro: 'Matrices have become Kai\'s daily tool: Every 3D transformation is a matrix, every animation a sequence of matrix multiplications, every transition behavior a stochastic matrix. "The genius is: No matter how complex the transformation — in the end it\'s always $\\vec{x}\' = M \\cdot \\vec{x}$," he says. The MVP matrix ($M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$) now transforms thousands of Harbor Lights vertices per frame into pixels on screen.',
    },
    objectives: {
      matrix_operations: 'Add and multiply matrices and confidently apply the rules — especially non-commutativity',
      transformation_matrices: 'Set up transformation matrices for rotation, scaling, and reflection and apply them to vectors',
      stochastic_matrices: 'Calculate stochastic matrices and fixed vectors for transition processes',
      inverse_matrix: 'Determine the inverse matrix and understand its meaning as a "reverse transformation"',
    },
    explanation: {
      intro: 'Matrices are rectangular arrays of numbers — but their true power lies in representing mappings. A $2 \\times 2$ matrix transforms 2D vectors, a $3 \\times 3$ matrix transforms 3D vectors. Multiplication means: row times column, then sum. For $C = A \\cdot B$:',
      transformation: 'In 3D graphics, every geometric transformation is a matrix: rotation, scaling, reflection. The rotation matrix around the $z$-axis rotates a point $(x, y, z)$ by angle $\\theta$ — and the $z$-coordinate remains unchanged:',
      kai_tip: 'In my engine, I chain transformations through matrix multiplication: First scale, then rotate, then translate. The order is crucial — matrices are not commutative! First rotating, then translating gives something completely different from first translating, then rotating. That\'s why I always read matrix chains from right to left.',
      stochastic: 'Stochastic matrices describe transition processes: How likely is it to go from one state to another? Each column sums to 1 (for column vectors). When you multiply the state vector $\\vec{v}_n$ by the transition matrix $T$, you get the next state $\\vec{v}_{n+1}$:',
      inverse: 'The inverse matrix $A^{-1}$ is the "undo button": $A \\cdot A^{-1} = I$ (identity matrix). If $A$ is a rotation by $30°$, then $A^{-1}$ is the rotation by $-30°$. Not every matrix has an inverse — only when $\\det(A) \\neq 0$:',
    },
    concepts: {
      matrix_multiplication: {
        title: 'Matrix Multiplication',
        desc: 'Row times column: $(A \\cdot B)_{ij} = \\sum_k a_{ik} \\cdot b_{kj}$. The number of columns in $A$ must equal the number of rows in $B$. Important: $A \\cdot B \\neq B \\cdot A$ in general! Order matters.',
      },
      transformation_matrix: {
        title: 'Transformation Matrix',
        desc: 'Every linear mapping (rotation, scaling, reflection) can be represented as a matrix. The rotation matrix $R(\\theta)$ rotates vectors by angle $\\theta$. Multiple transformations are chained by matrix multiplication — read from right to left.',
      },
      stochastic_matrix: {
        title: 'Stochastic Matrix & Fixed Vector',
        desc: 'A stochastic matrix has column sums of 1 — it describes transition probabilities. The fixed vector $\\vec{v}_{\\text{fix}}$ with $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ is the long-term equilibrium state, regardless of the starting state.',
      },
    },
    examples: {
      '3d_rotation': {
        title: '3D Rotation of a Harbor Light',
        context: 'Kai wants to rotate a lantern in the harbor by $90°$ around the $z$-axis. The lantern sits at point $(3, 0, 5)$. How does he calculate the new position?',
        step1: 'Set up the rotation matrix for $90°$ around the $z$-axis ($\\cos 90° = 0$, $\\sin 90° = 1$):',
        step2: 'Write the position vector of the lantern as a column vector:',
        step3: 'Matrix times vector — multiply row by row:',
        step4: 'Result: The lantern now sits at $(0, 3, 5)$ — rotated $90°$ in the $xy$-plane, $z$ unchanged:',
        kai_comment: 'That\'s exactly how every frame works in my engine: Thousands of vertices are multiplied by the model matrix, then the view matrix (camera position), then the projection matrix (perspective). Three matrix multiplications per vertex — and the GPU does it in milliseconds!',
      },
      player_states: {
        title: 'Player Behavior as a Markov Chain',
        context: 'In "Harbor Lights 3D," players switch between Exploring (E) and Fighting (F). Kai has observed: Those exploring stay exploring 70% of the time and switch to fighting 30%. Those fighting stay fighting 80% and go back to exploring 20%. Currently 60% of players are exploring.',
        step1: 'Set up the transition matrix $T$ and initial vector $\\vec{v}_0$:',
        step2: 'Calculate one step — $\\vec{v}_1 = T \\cdot \\vec{v}_0$:',
        step3: 'Determine the fixed vector — solve the system $T \\cdot \\vec{v} = \\vec{v}$ with $x + y = 1$:',
        step4: 'In the long run, 40% explore and 60% fight — regardless of the start:',
        kai_comment: 'This is gold for my game design! The fixed vector shows me that players fight more than they explore in the long run — no matter how they start. If I want it more balanced, I need to change the transition probabilities. Matrices make player behavior calculable!',
      },
    },
    realworld: {
      computer_graphics: {
        title: 'Computer Graphics & 3D Engines',
        desc: 'Every 3D engine (Unity, Unreal, Godot) is based on matrix multiplication. The MVP pipeline — $M_{\\text{proj}} \\cdot M_{\\text{view}} \\cdot M_{\\text{model}}$ — transforms every 3D point onto the 2D screen. Modern GPUs are at their core massive matrix multiplication machines.',
      },
      google_pagerank: {
        title: 'Google PageRank',
        desc: 'Google\'s original search algorithm models the web as a huge stochastic matrix: Every webpage is a state, every link a transition probability. The fixed vector $\\vec{r} = T \\cdot \\vec{r}$ yields the ranking — the pages with the highest values in the fixed vector rank at the top.',
      },
      robotics: {
        title: 'Robotics & Machine Control',
        desc: 'Robotic arms consist of joints that each perform a rotation. The total position of the hand results from the product of all rotation matrices along the arm. This is called forward kinematics — and the inverse matrix solves the reverse problem: "What joint angles do I need for this hand position?"',
      },
    },
    mistakes: {
      commutative: {
        wrong: 'Treating matrix multiplication like number multiplication: $A \\cdot B = B \\cdot A$',
        correct: 'Matrices are NOT commutative: $A \\cdot B \\neq B \\cdot A$ in general',
        why: 'First rotating then translating gives a different result than first translating then rotating. In 3D graphics, swapped order leads to completely wrong positions. Therefore: Always read transformation chains from right to left!',
        kai_warning: 'I once spent an entire day hunting a bug because I swapped rotation and translation. My ships were rotating around the world origin instead of their own axis! Since then I always read matrix chains from right to left: $M_{\\text{translate}} \\cdot M_{\\text{rotate}} \\cdot \\vec{v}$ — first rotate, then translate.',
      },
      stochastic_rows_cols: {
        wrong: 'Assuming row sums = 1 for stochastic matrices with column vectors',
        correct: 'With column vectors, the column sums must be 1: $\\sum_i t_{ij} = 1$',
        why: 'The convention depends on whether you use row or column vectors. In schools and German universities, column vectors are standard — then the columns of the transition matrix must sum to 1. Each column describes: "From state $j$ — how are the transitions distributed?"',
      },
    },
  },

  '12-abiturvorbereitung': {
    story: {
      intro: 'It\'s release night at Hamburg Harbor. The lights of the Landungsbruecken reflect in the water, and on the big screen at the fish market, the title glows: "Harbor Lights 3D." Kai stands on stage, mic in hand, hardly believing it — three years of development, and now the game is finally finished. In the audience, he spots two familiar faces: Mia, who started it all with her 2D pixel art game, and Amir, whose DataPulse algorithms power the NPC AI. "Remember," Kai says into the mic, "when Mia started with linear functions to move game characters along a line? Then Amir built the data pipeline with derivatives and binomial distributions. And now here we are — with matrices, integrals, and normal distributions, we\'ve created a complete 3D world." The crowd cheers. But before the party really gets going, Kai has one last challenge: the math final exam.',
      challenge: 'The biggest test is coming — the final exam combines analysis, analytic geometry, and stochastics in one paper. Kai needs a strategy that connects all topics, maximizes points, and avoids typical mistakes.',
      outro: 'The release party at the harbor is in full swing, the music plays, and Kai, Mia, and Amir raise their glasses. "Three years of math," says Mia, "from lines to the normal distribution." "From data to neural networks," adds Amir. "From 2D pixels to the 3D engine," concludes Kai. They look out at the Elbe, where the harbor lights dance — each one a vertex, transformed by a matrix, lit by an exponential function, balanced by a normal distribution. Mathematics was never just calculation. It was the language they used to make their ideas reality. The game is released. The exam is coming. And whatever the outcome — the journey was worth it. Every function, every derivative, every integral brought them here. To the harbor. To the goal. And to the beginning of everything still to come.',
    },
    objectives: {
      exam_strategy: 'Develop a clear exam strategy: survey the problems, calculate the points-to-time ratio, tackle easy ones first',
      cross_topic_connections: 'Recognize and leverage connections between analysis, analytic geometry, and stochastics',
      time_management: 'Realistically plan and stick to the time budget per problem',
      error_prevention: 'Recognize typical errors, perform plausibility checks, and interpret results in context',
    },
    explanation: {
      intro: 'The final exam isn\'t a sprint but a strategic game — like an endgame boss with multiple phases. You have about 4 to 5 hours for three major topic blocks. The key isn\'t knowing everything, but prioritizing wisely and working cleanly. Kai learned this with his game: "You can\'t fix every bug at once. You fix the ones with the most impact — and that\'s exactly how you approach the exam."',
      kai_rallying: 'Folks, we\'ve been doing math for three years — not because we had to, but because it was the key to our projects. Mia started with functions, Amir trained his AI with stochastics, and I built a 3D world with matrices. The final exam is just the credits after the final boss. We\'re ready!',
      structure: 'The exam typically consists of three mandatory sections — Analysis (often the largest block), Analytic Geometry, and Stochastics. Points are distributed roughly as follows:',
      time_strategy: 'Plan your time proportional to the points. If a problem is worth 10 out of 100 points, invest about $10\\%$ of your time. And the golden rule: Start with the problems you\'re confident about. Every safe point counts just as much as a hard-fought one!',
      mia_wisdom: 'Remember the basics! Function analysis always follows the same pattern: domain, zeros, extrema, inflection points, behavior for $x \\to \\pm\\infty$. Once you know the pattern, every function is just a variation. I learned this with my game characters — every movement is fundamentally a function.',
      checking: 'After each sub-problem: Plausibility check! Do the units match? Do the signs make sense? Is the result in a realistic range? A probability greater than 1 or a negative area is an instant warning sign — better to recalculate than to move on.',
      amir_data: 'I always check my results against edge cases: What happens for $x = 0$? For very large $x$? Does my solution converge or diverge? This debugging mindset applies equally to the exam. And for stochastics: Always check whether $\\sum P = 1$!',
      confidence: 'The most important thing: You know more than you think. Three years of practice are in your hands. If you briefly get stuck during the exam — take a breath, read the problem again, and start with what you know for sure. Every point counts. And remember: Math isn\'t talent, it\'s a language you\'ve learned. Speak it.',
    },
    concepts: {
      read_then_plan: {
        title: 'Read → Plan → Calculate → Check',
        desc: 'The 4-step approach for every problem: (1) Read the problem completely, highlight information. (2) Plan the solution strategy — what methods do you need? (3) Calculate neatly and clearly. (4) Check the result: units, signs, plausibility, real-world context.',
      },
      point_maximizing: {
        title: 'Point Efficiency',
        desc: 'Not every problem is equally difficult per point. Start with the problems where you earn the most points in the shortest time. The last sub-problems are often the hardest — better to first collect all "easy" points across all problems, then return to the hard ones.',
      },
      plausibility_check: {
        title: 'Plausibility Check',
        desc: 'Four quick checks that prevent careless errors: (1) Units: Does the unit fit the context? (2) Signs: Is negative sensible here? (3) Limits: What happens for $x \\to 0$ or $x \\to \\infty$? (4) Sketch: Does the result match your mental picture?',
      },
    },
    examples: {
      mixed_analysis: {
        title: 'Typical Analysis Problem: Curve Analysis + Integral',
        context: 'Kai models the energy consumption of his 3D engine with $f(x) = (2x - 1) \\cdot e^{-x}$. Determine the extrema and calculate the area between the graph and $x$-axis on $[0;\\, 3]$.',
        step1: 'Function given — already provided:',
        step2: 'Differentiate using the product rule: $u = 2x - 1$, $v = e^{-x}$, so $f\'(x) = u\' \\cdot v + u \\cdot v\'$:',
        step3: 'Find the extremum — set $f\'(x) = 0$ ($e^{-x} > 0$ always, so parentheses = 0):',
        step4: 'Area calculation — find the antiderivative using integration by parts:',
        mia_comment: 'That\'s exactly the pattern I mean: Differentiate with the product rule, find the zero, calculate the integral. The function changes, but the strategy always stays the same. Practice until it runs automatically!',
      },
      mixed_stochastik: {
        title: 'Typical Stochastics Problem: Hypothesis Test',
        context: 'Amir\'s A/B test shows: Normally 8% of 50 users click the new button. After a redesign, he wants to test whether the click rate has increased ($\\alpha = 5\\%$).',
        step1: 'Set up the model — binomial distribution with the parameters:',
        step2: 'Formulate hypotheses — one-sided test (upper tail):',
        step3: 'Search for the critical region — test $k = 8$ ($P$ still too large):',
        step4: 'Determine the rejection region — from $k = 9$, $H_0$ is rejected:',
        amir_comment: 'Hypothesis tests are fundamentally decision logic: You calculate how unlikely your result is under $H_0$. If it\'s less likely than $\\alpha$, you reject $H_0$. That\'s exactly how I make data-driven decisions at DataPulse — just with larger samples!',
      },
    },
    realworld: {
      release_day: {
        title: 'Release Day: When Everything Comes Together',
        desc: 'Releasing a game is like an exam: Months of preparation culminate in a decisive moment. Kai\'s "Harbor Lights 3D" combines 2D fundamentals (Mia), data analysis (Amir), and 3D mathematics (Kai) — just as the final exam combines analysis, geometry, and stochastics. Preparation is everything.',
      },
      project_management: {
        title: 'Project Management & Prioritization',
        desc: 'In software development, you prioritize features by impact and effort — just like exam problems by points and difficulty. The formula $\\text{Efficiency} = \\frac{\\text{Points}}{\\text{Time}}$ applies in your career too: Focus on what makes the biggest difference.',
      },
      lifelong_learning: {
        title: 'Lifelong Learning',
        desc: 'The final exam isn\'t the end but the beginning. Mia studies game design, Amir data science, Kai media informatics — and everywhere they need mathematics. The ability to work into new topics is more valuable than any single formula. Math taught you how to think.',
      },
    },
    mistakes: {
      no_units_context: {
        wrong: 'Writing a result without units or context: "$A = 12{,}5$"',
        correct: 'Always include units and interpretation: "$A = 12{,}5\\,\\text{area units}$, corresponding to $12{,}5\\,\\text{m}^2$"',
        why: 'In the final exam, you get points for interpreting in context! A bare result without units or reference to the problem costs you easy points. Always write an answer sentence: "The area is $12{,}5\\,\\text{m}^2$, which corresponds to the green area of the park."',
        kai_warning: 'In game development, numbers without context have no value. 12.5 — what? Pixels? Seconds? Damage points? Same in the exam: Write the unit and formulate an answer sentence. Those are free points!',
      },
      skip_plausibility: {
        wrong: 'Not questioning an obviously wrong result: $P(X = 5) = 1{,}3$',
        correct: 'Be immediately suspicious: A probability can never be greater than 1!',
        why: 'Plausibility checks cost 10 seconds but can save entire problems. Probabilities always lie between 0 and 1, areas are never negative, $e^x > 0$ for all $x$. If your result violates these basic rules, there\'s a calculation error.',
        mia_warning: 'I found exactly this kind of error in my last exam: My integral was negative even though the function was positive throughout the interval. Quick check, sign error found, corrected — 4 points saved. Always verify!',
      },
    },
  },
};
