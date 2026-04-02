export const batch11b = {
  '11-exp-log': {
    story: {
      intro: 'Amir\'s music recommendation algorithm has a problem: The popularity of new songs skyrockets at first — but exactly how fast? And when does the hype fade? "I need a function that describes extremely rapid growth while remaining calculable," Amir tells Yara. The answer: the exponential function with Euler\'s number $e$ — and its counterpart, the natural logarithm.',
      challenge: 'Amir needs to model the growth curve of song streams and predict when a track reaches its peak — for this he needs exponential equations and logarithms.',
      outro: 'With the $e$-function and $\\ln$, Amir can now calculate when a song reaches its peak and how quickly interest fades afterward. "The cool thing is: the natural logarithm makes every exponential equation solvable," he explains to Finn. DataPulse now predicts song trends with remarkable precision.',
    },
    objectives: {
      e_function: 'Understand and apply the $e$-function as the natural growth function',
      natural_log: 'Master the natural logarithm as the inverse function of $e^x$',
      log_rules: 'Confidently apply logarithm laws (product, quotient, and power rules)',
      solve_exp_equations: 'Solve exponential equations by taking logarithms',
    },
    explanation: {
      intro: 'Euler\'s number $e \\approx 2{,}718$ is the most important constant for growth processes. Why exactly $e$? Because the function $f(x) = e^x$ has a unique property: Its derivative is itself — $f\'(x) = e^x$. This means: The growth rate is always proportional to the current value. Perfect for natural growth!',
      natural_log: 'The natural logarithm $\\ln(x)$ is the inverse function of $e^x$. When you want to know what exponent you need to reach a certain value — then $\\ln$ is your tool. The two functions cancel each other out:',
      amir_tip: 'In my ML code, $\\ln$ appears everywhere — in the loss function, in normalization, in the softmax formula. The reason: $\\ln$ transforms multiplication into addition and makes huge numbers manageable. That\'s why we often work with "log-likelihood" instead of probabilities directly!',
      log_rules: 'The three logarithm laws are extremely useful — they transform complex expressions into simpler ones. The basic idea: Logarithms turn multiplication into addition, division into subtraction, and powers into multiplication:',
      solving: 'To solve an exponential equation for $x$, apply $\\ln$ to both sides. The logarithm "brings the exponent down" — that\'s the key step:',
    },
    concepts: {
      e_function: {
        title: '$e$-Function',
        desc: 'The general form $f(x) = a \\cdot e^{kx}$: $a$ is the initial value, $k$ determines the growth speed. With $k > 0$ the function grows, with $k < 0$ it decays (exponential decay). The $e$-function is its own derivative — that\'s why it perfectly models natural growth.',
      },
      natural_log: {
        title: 'Natural Logarithm',
        desc: 'The inverse function of $e^x$: $\\ln(x)$ answers the question "What power of $e$ gives $x$?". Defined only for $x > 0$. Important: $\\ln(1) = 0$ and $\\ln(e) = 1$.',
      },
      log_rules: {
        title: 'Logarithm Laws',
        desc: 'Three rules that simplify everything: Product rule ($\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$), Quotient rule ($\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$), and Power rule ($\\ln(a^r) = r \\cdot \\ln(a)$). The power rule is the key to solving exponential equations.',
      },
    },
    examples: {
      solve_exp: {
        title: 'Solving an exponential equation',
        context: 'Amir wants to calculate after how many days a song has 5 times as many streams as at the start. The growth model is: $S(x) = 3 \\cdot e^{2x}$.',
        step1: 'Set up the equation — when do streams reach the value 15?',
        step2: 'Divide by 3 to isolate $e^{2x}$:',
        step3: 'Apply $\\ln$ to both sides — the exponent "comes down":',
        step4: 'Solve for $x$ — divide by the coefficient 2:',
        amir_comment: 'That\'s the pattern I use constantly: Isolate, take the logarithm, solve. Works for every exponential equation!',
      },
      half_life: {
        title: 'Calculating the half-life',
        context: 'After the peak, a viral song loses listeners daily. Amir models the decline with $N(t) = 1000 \\cdot e^{-0{,}1t}$.',
        step1: 'The model: 1000 active listeners at time $t = 0$, exponential decline:',
        step2: 'Half-life means: When are there still 500 listeners?',
        step3: 'Isolate and take the logarithm — $\\ln$ on both sides:',
        step4: 'Solve for $t$ — after about 6.93 days, the listener count has halved:',
        amir_comment: 'The half-life is constant! Whether 1000, 500, or 250 listeners — it always takes about 6.93 days until the next halving. That\'s the magic of exponential decay.',
      },
    },
    realworld: {
      user_retention: {
        title: 'User Retention in Apps',
        desc: 'How many users remain active after one week? For most apps, retention falls exponentially: $R(t) = R_0 \\cdot e^{-\\lambda t}$. DataPulse uses this model to predict how many users will still be active after 30 days — and when to send targeted push notifications.',
      },
      compound_interest: {
        title: 'Continuous Compounding',
        desc: 'Banks calculate with annual interest, but in theory there\'s also continuous compounding: $K(t) = K_0 \\cdot e^{rt}$. The more frequently you calculate interest (daily, hourly, by the second...), the closer you get to $e^{rt}$. That\'s the limit!',
      },
      decibel: {
        title: 'Decibel Scale',
        desc: 'Volume is measured logarithmically: $L = 10 \\cdot \\log_{10}(I/I_0)$. If the sound intensity doubles, the level only increases by about $3\\,\\text{dB}$. That\'s why 10 guitars don\'t sound 10 times as loud as one — our hearing works logarithmically!',
      },
    },
    mistakes: {
      ln_sum: {
        wrong: '$\\ln(a + b) = \\ln(a) + \\ln(b)$ — splitting the sum',
        correct: '$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$ — only products can be split',
        why: 'The product rule applies ONLY to multiplication, not to addition! There is no simple formula for $\\ln(a + b)$. This is one of the most common errors of all.',
        amir_warning: 'This bug once cost me two hours of debugging. My likelihood calculation was completely wrong because I used $\\ln(p_1 + p_2)$ instead of $\\ln(p_1 \\cdot p_2)$. Logarithms split products — not sums!',
      },
      ln_cancel: {
        wrong: '$\\ln(e^x) = e \\cdot x$ — incorrectly resolving the logarithm',
        correct: '$\\ln(e^x) = x$ — the logarithm cancels the exponential',
        why: '$\\ln$ and $e^x$ are inverse functions — they cancel each other out. The result is simply the exponent $x$, with no factor $e$ in front.',
      },
    },
  },

  '11-binomialverteilung': {
    story: {
      intro: 'DataPulse has launched a new feature, and Amir wants to know: How likely is it that at least 15 out of 100 test users click the new button? Each user clicks or doesn\'t click — a classic yes/no experiment repeated $n$ times. "That\'s no longer just chance, that\'s the binomial distribution," says Prof. Nguyen in the seminar.',
      challenge: 'Amir needs the probability of a specific number of clicks from $n$ independent trials — the binomial distribution provides the exact answer.',
      outro: 'Amir now has a statistical framework for A/B tests. He can calculate whether a result is significant or just occurred by chance. "The binomial distribution is the foundation for almost every statistical test in practice," he explains to Yara. DataPulse now makes data-driven decisions instead of going with gut feelings.',
    },
    objectives: {
      bernoulli: 'Recognize Bernoulli experiments and determine the success probability $p$',
      binomial_formula: 'Apply the binomial formula to calculate $P(X = k)$',
      expected_value: 'Calculate and interpret the expected value $E(X) = n \\cdot p$',
      standard_deviation: 'Determine the standard deviation $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ and use it as a measure of spread',
    },
    explanation: {
      intro: 'Imagine repeating an experiment $n$ times, and each time there are only two outcomes: Success (probability $p$) or Failure (probability $1-p$). The binomial distribution tells you how likely exactly $k$ successes in $n$ trials are:',
      bernoulli: 'The basis is the Bernoulli experiment — a single trial with exactly two outcomes. Three conditions must hold: (1) only two outcomes, (2) the probability $p$ stays the same for each trial, (3) the trials are independent. The binomial coefficient counts the possible arrangements:',
      amir_tip: 'The binomial coefficient $\\binom{n}{k}$ counts how many ways you can distribute $k$ successes among $n$ trials. In my code, that\'s the function scipy.special.comb(n, k). For large $n$, I prefer to compute the cumulative distribution — summing individual probabilities would be far too slow!',
      expected_value: 'The expected value $E(X) = n \\cdot p$ tells you how many successes you expect "on average." With 100 trials and $p = 0{,}15$, you expect $E(X) = 15$ successes. But that doesn\'t mean it\'s exactly 15 every time! How much the results fluctuate is measured by the standard deviation:',
      standard_deviation: 'The standard deviation $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ shows the typical spread around the expected value. Rules of thumb: About 68% of results lie within $E(X) \\pm \\sigma$, about 95% within $E(X) \\pm 2\\sigma$. The larger $n$, the narrower the distribution relative to the expected value.',
    },
    concepts: {
      bernoulli: {
        title: 'Bernoulli Experiment',
        desc: 'A random experiment with exactly two outcomes: Success (probability $p$) or Failure ($1-p$). Examples: Coin flip, click/no-click, goal/no-goal. The binomial distribution arises from $n$-fold independent repetition.',
      },
      binomial_formula: {
        title: 'Binomial Formula',
        desc: 'The formula $P(X=k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$ consists of three parts: $\\binom{n}{k}$ counts the arrangements, $p^k$ is the probability of $k$ successes, $(1-p)^{n-k}$ for $n-k$ failures.',
      },
      expected_value: {
        title: 'Expected Value & Standard Deviation',
        desc: 'The expected value $E(X) = n \\cdot p$ is the mean over many repetitions. The standard deviation $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ measures the typical deviation from it. Together they describe the location and spread of the distribution.',
      },
    },
    examples: {
      coin_flips: {
        title: 'Coin flip: exactly 7 out of 10 times heads',
        context: 'Amir tests his random number generator: With 10 fair coin flips — how likely is exactly 7 heads?',
        step1: 'Determine the parameters: $n = 10$ flips, $p = 0{,}5$ (fair coin), wanted: $k = 7$ heads.',
        step2: 'Calculate the binomial coefficient — how many ways can 7 heads be distributed among 10 flips?',
        step3: 'Substitute into the binomial formula: Arrangements $\\times$ successes $\\times$ failures:',
        step4: 'Calculate — the probability is about 11.7%, so rather unlikely:',
        amir_comment: 'Only 11.7% — this shows: Even with a fair coin, 7 out of 10 heads isn\'t particularly surprising, but it\'s also not the norm. My random generator seems to be working fine!',
      },
      quality_control: {
        title: 'Quality control in manufacturing',
        context: 'A factory has a defect rate of 2%. Amir calculates: How likely is it that in a sample of 20 pieces, not a single one is defective?',
        step1: 'Parameters: $n = 20$ pieces, defect rate $p = 0{,}02$, wanted: $k = 0$ defective parts.',
        step2: 'Substitute: $\\binom{20}{0} = 1$, and $0{,}02^0 = 1$ — only the failures remain:',
        step3: 'Simplify — what remains is $0{,}98^{20}$:',
        step4: 'Result: With about 66.8% probability, no part is defective — not as certain as you\'d think!',
        amir_comment: 'Only a two-thirds chance of zero defects at a 2% defect rate! This shows: Even small probabilities add up over many trials. At $n = 100$, $P(X = 0) \\approx 13{,}3\\%$ — you\'d almost certainly find a defect.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'A/B Testing at DataPulse',
        desc: 'Amir tests two versions of the app: Version A has a click rate of 12%, Version B of 15%. Using the binomial distribution, he calculates whether the difference is statistically significant — or whether it could have occurred by chance. This is the foundation of every A/B test.',
      },
      medicine: {
        title: 'Medical Studies',
        desc: 'In drug trials, you count: How many patients recover? Is the recovery rate significantly better than with placebo? The binomial distribution provides the answer — and protects against hasty conclusions with samples that are too small.',
      },
      surveys: {
        title: 'Opinion Polls & Margin of Error',
        desc: 'When 52% vote "Yes" in a poll — is that really a majority? The standard deviation $\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ shows how wide the confidence interval is. At $n = 100$, $\\sigma \\approx 5\\%$ — so the result could also be 47% or 57%.',
      },
    },
    mistakes: {
      forget_binomial_coeff: {
        wrong: 'Forgetting the binomial coefficient: $P(X=k) = p^k \\cdot (1-p)^{n-k}$',
        correct: 'Complete formula with $\\binom{n}{k}$',
        why: 'Without $\\binom{n}{k}$, the formula counts only ONE specific order — e.g., first $k$ successes, then $n-k$ failures. But the successes can occur at different positions! The binomial coefficient counts all possible arrangements.',
        amir_warning: 'Imagine rolling a die 3 times and wanting exactly 2 sixes. There are 3 possibilities: 6-6-X, 6-X-6, X-6-6. The binomial coefficient $\\binom{3}{2} = 3$ counts exactly that. Without it, you get only a third of the correct probability!',
      },
      variance_vs_sigma: {
        wrong: 'Confusing variance and standard deviation',
        correct: '$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$ — don\'t forget the square root!',
        why: 'The variance is $\\text{Var}(X) = n \\cdot p \\cdot (1-p)$, the standard deviation is $\\sigma = \\sqrt{\\text{Var}(X)}$. Without the square root, the result has the wrong unit and is far too large. $\\sigma$ has the same unit as $X$ — the variance has it squared.',
      },
    },
  },

  '11-bedingte-wk': {
    story: {
      intro: 'DataPulse recommends songs based on past listening behavior. But Amir notices: Not every correlation is equally strong. Someone who listens to rock might also like metal — but does it work the other way around? "The probability that someone likes rock GIVEN that they listen to metal is not the same as the reverse," explains Prof. Nguyen. Welcome to conditional probability.',
      challenge: 'Amir needs to improve the recommendation logic: How likely is it that a user likes genre $A$, GIVEN that they listen to genre $B$? And how do you reverse this direction?',
      outro: 'With Bayes\' theorem, Amir can now reverse the recommendation direction: From "Those who listen to metal also listen to rock 60% of the time" becomes "Those who listen to rock also listen to metal 35% of the time." "Bayes is like reverse engineering for probabilities," he grins. DataPulse now delivers significantly more precise recommendations.',
    },
    objectives: {
      conditional_prob: 'Calculate and interpret conditional probabilities',
      bayes_theorem: 'Apply Bayes\' theorem to reverse the direction of a conditional probability',
      independence: 'Check for stochastic independence and distinguish it from dependence',
      tree_diagrams: 'Use tree diagrams and contingency tables as tools',
    },
    explanation: {
      intro: 'The conditional probability $P(A \\mid B)$ answers the question: "How likely is $A$, if we already know that $B$ has occurred?" The knowledge about $B$ changes the probability — the sample space shrinks to the cases where $B$ holds:',
      multiplication_rule: 'The multiplication rule follows directly from the definition: If you want to calculate the probability of "$A$ and $B$ simultaneously," you multiply $P(B)$ by the conditional probability $P(A \\mid B)$:',
      amir_tip: 'In my recommendation code, I use conditional probabilities constantly: $P(\\text{like}_Y \\mid \\text{like}_X)$ — the probability that a user likes song $Y$, given they liked song $X$. That\'s the heart of every collaborative filter!',
      bayes: 'Bayes\' theorem is the magic: It reverses the direction. If you know $P(B \\mid A)$ but need $P(A \\mid B)$, Bayes provides the solution. The formula looks complicated, but the core is simple: You weight with the base probability (prior):',
      total_probability: 'For the denominator in Bayes\' theorem, you often need the total probability. It decomposes $P(B)$ into all possible paths by which $B$ can occur — via $A$ or via $\\bar{A}$ (not-$A$):',
      independence: 'Two events are stochastically independent when knowing about one doesn\'t change the probability of the other. Formally: $P(A \\mid B) = P(A)$ — the occurrence of $B$ has no influence on $A$. Equivalently:',
    },
    concepts: {
      conditional_prob: {
        title: 'Conditional Probability',
        desc: '$P(A \\mid B)$ is the probability of $A$ given $B$. You "zoom into" the part of the probability space where $B$ holds, and then ask about $A$. Important: $P(A \\mid B) \\neq P(B \\mid A)$ — the direction matters!',
      },
      bayes: {
        title: 'Bayes\' Theorem',
        desc: 'The formula for reversing direction: $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$. $P(A)$ is the prior (prior knowledge), $P(A \\mid B)$ the posterior (updated estimate after observing $B$). Bayesian statistics is the foundation of spam filters and diagnostic systems.',
      },
      independence: {
        title: 'Stochastic Independence',
        desc: '$A$ and $B$ are independent if $P(A \\cap B) = P(A) \\cdot P(B)$. This means: The occurrence of $B$ changes nothing about the probability of $A$. Caution: Independence is NOT the same as "no overlap" (disjoint)!',
      },
    },
    examples: {
      medical_test: {
        title: 'Medical Test — Base Rate Fallacy',
        context: 'A disease test is 99% accurate. The disease affects 1% of the population. If the test is positive — how likely are you really sick?',
        step1: 'Given: $P(K) = 0{,}01$ (disease), $P(+ \\mid K) = 0{,}99$ (sensitivity), $P(+ \\mid \\bar{K}) = 0{,}05$ (false positive rate).',
        step2: 'Calculate the total probability of a positive result — both paths (sick + healthy):',
        step3: 'Apply Bayes\' theorem — $P(K \\mid +)$ is what we\'re looking for:',
        step4: 'Result: Only 16.7% probability of actually being sick — despite 99% test accuracy!',
        amir_comment: 'That\'s the base rate fallacy! The test is super accurate, but because the disease is so rare ($P(K) = 1\\%$), most positive tests are false positives. In the ML world, this means: Precision and recall are not the same thing!',
      },
      spam_filter: {
        title: 'Spam Filter with Bayes',
        context: 'Amir\'s email filter should learn: If an email contains the word "winner" — is it spam?',
        step1: 'Given data: 30% of all emails are spam, 80% of spam emails contain "winner," but also 10% of normal emails:',
        step2: 'Total probability that an email contains "winner":',
        step3: 'Bayes: How likely is spam when "winner" appears?',
        step4: 'Result: 77.4% — an email with "winner" is very likely spam:',
        amir_comment: 'That\'s exactly how a Naive Bayes classifier works! The more words you add, the more precise the filter becomes. DataPulse uses the same principle: Instead of words, we analyze listening patterns; instead of spam/not-spam, we classify genre preferences.',
      },
    },
    realworld: {
      recommendation: {
        title: 'Music Recommendations at DataPulse',
        desc: 'Collaborative filtering is based on conditional probabilities: $P(\\text{like}_Y \\mid \\text{like}_X)$ — "Those who like song X, with what probability do they also like song Y?" Spotify, Netflix, and DataPulse compute millions of such conditional probabilities in real time.',
      },
      weather: {
        title: 'Weather Forecasting',
        desc: 'Meteorologists constantly update their forecasts with Bayes: $P(\\text{Rain} \\mid \\text{Clouds, Pressure, Wind})$. Each new measurement refines the prediction. That\'s why the rain probability changes throughout the day — that\'s Bayes in action!',
      },
      fraud_detection: {
        title: 'Fraud Detection',
        desc: 'Amir\'s payment system detects suspicious transactions with Bayes: When an alert triggers — how likely is real fraud? Just like the medical test: The base rate is decisive! At a fraud rate of 0.1%, most alerts are false alarms.',
      },
    },
    mistakes: {
      confuse_direction: {
        wrong: '$P(A \\mid B) = P(B \\mid A)$ — confusing the direction',
        correct: 'Reversing the direction requires Bayes!',
        why: '$P(A \\mid B)$ and $P(B \\mid A)$ are completely different values. Example: $P(\\text{wet} \\mid \\text{rain}) = 0{,}99$, but $P(\\text{rain} \\mid \\text{wet}) \\ll 0{,}99$ — you could also be wet from a sprinkler. You need Bayes\' theorem to reverse the direction.',
        amir_warning: 'I see this error in code reviews all the time! Someone calculates $P(\\text{click} \\mid \\text{bought})$ and uses it as $P(\\text{bought} \\mid \\text{click})$. That can completely ruin the recommendation algorithm. Bayes is mandatory!',
      },
      ignore_base_rate: {
        wrong: 'Ignoring the base rate (Base Rate Fallacy)',
        correct: 'Always consider $P(A)$ — the prior probability',
        why: 'A 99% accurate test sounds impressive, but if the disease only affects 1%, then $P(K \\mid +) \\approx 16{,}7\\%$. The low base rate $P(K) = 0{,}01$ dominates the result. Without the prior, you get a completely distorted estimate.',
      },
    },
  },

  '11-vektorrechnung': {
    story: {
      intro: 'Finn is building the backend for DataPulse\'s new feature: finding similar songs. But how do you measure "similarity" between songs when each song is described by dozens of properties — tempo, energy, mood, instrumentation? "Think of each song as a point in space," says Amir. "The closer two points are, the more similar the songs." Welcome to the world of vectors.',
      challenge: 'Amir needs to represent song features as vectors and calculate their similarity — using the dot product and the angle between vectors.',
      outro: 'DataPulse\'s recommendation engine now uses cosine similarity: The smaller the angle between two song vectors, the more similar the songs. "In the ML world, vectors are everywhere — word embeddings, feature spaces, neural networks. Everything is linear algebra," Amir tells Yara enthusiastically.',
    },
    objectives: {
      vectors_2d_3d: 'Write vectors in $\\mathbb{R}^2$ and $\\mathbb{R}^3$ as column vectors and interpret them geometrically',
      vector_operations: 'Master vector addition and scalar multiplication',
      scalar_product: 'Calculate the dot product and interpret it geometrically',
      angle_between_vectors: 'Determine the angle between two vectors using the cosine formula',
    },
    explanation: {
      intro: 'A vector describes a displacement in space — or more generally: an ordered list of numbers. In $\\mathbb{R}^3$, a vector has three components written as a column. In data analysis, vectors can have 50 or 500 dimensions — the principle stays the same:',
      addition: 'You add vectors component by component — each row separately. Geometrically, you place the second vector at the tip of the first (tip-to-tail method). The result is the direct path from start to finish:',
      amir_tip: 'In my Python code, vectors are simply numpy arrays. The addition $\\vec{a} + \\vec{b}$ is automatically performed element-wise — np.array([3,4]) + np.array([-1,2]) gives np.array([2,6]). Exactly the same as in math!',
      scalar_product: 'The dot product (also: inner product) of two vectors yields a single number — not a vector! You multiply the components pairwise and add everything up. The result tells you how much the vectors "point in the same direction":',
      length: 'The length (magnitude) of a vector is calculated using the Pythagorean theorem — extended to three dimensions. In 2D it\'s the familiar $\\sqrt{x^2 + y^2}$, in 3D $z^2$ is added:',
      angle: 'The most important application of the dot product: The angle between two vectors. The formula connects the algebraic dot product with the geometric interpretation. This angle is known in the ML world as "cosine similarity" — the standard measure for similarity:',
    },
    concepts: {
      vector: {
        title: 'Vector',
        desc: 'An ordered list of numbers written as a column. In $\\mathbb{R}^2$ a vector has 2 components, in $\\mathbb{R}^3$ three. Geometrically it\'s an arrow with direction and length. In data analysis, a vector represents an object with its properties — e.g., a song with tempo, energy, and mood.',
      },
      scalar_product: {
        title: 'Dot Product',
        desc: 'Two vectors in, one number out: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Geometrically: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\alpha)$. When the dot product is zero, the vectors are perpendicular (orthogonal).',
      },
      vector_length: {
        title: 'Magnitude of a Vector',
        desc: 'The length $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — generalized Pythagorean theorem. A vector with magnitude 1 is called a unit vector. In the ML world, vectors are often normalized to length 1 to compare only the direction.',
      },
    },
    examples: {
      force_addition: {
        title: 'Adding forces as vectors',
        context: 'Two forces act on an object — Amir calculates the resulting total force.',
        step1: 'The two forces given as 2D vectors:',
        step2: 'Add component by component — each row individually:',
        step3: 'Calculate the magnitude of the total force (Pythagorean theorem):',
        step4: 'Compute — the total force is about $6{,}32\\,\\text{N}$:',
        amir_comment: 'We use the same principle at DataPulse: Instead of forces, we add feature vectors. When a user likes two genres, the combined taste vector is the sum — that helps us find songs matching both genres!',
      },
      angle_vectors: {
        title: 'Angle between song vectors',
        context: 'Amir compares two songs: Song A has feature vector $(1, 2, 3)$ and Song B $(4, -1, 2)$. How similar are they?',
        step1: 'The feature vectors of both songs:',
        step2: 'Calculate the dot product — multiply components pairwise and add up:',
        step3: 'Calculate the magnitudes of both vectors:',
        step4: 'Apply the cosine formula — the angle is about $62{,}2°$:',
        amir_comment: 'An angle of $62{,}2°$ means: The songs are partially similar, but not extremely. At $0°$ they\'d be identical (same proportions), at $90°$ completely different. In my code: similarity = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))',
      },
    },
    realworld: {
      embeddings: {
        title: 'Word Embeddings & Song Embeddings',
        desc: 'In the ML world, words, songs, and images are represented as high-dimensional vectors (embeddings). Cosine similarity $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$ measures their similarity. A famous example: "King" $-$ "Man" $+$ "Woman" $\\approx$ "Queen" — vector arithmetic with word meanings!',
      },
      navigation: {
        title: 'Navigation & Robotics',
        desc: 'Navigation systems and robots use vectors for position and movement. The position vector says "Where am I?", the velocity vector "Where to and how fast?" Vector addition calculates the new position after a movement.',
      },
      game_physics: {
        title: 'Game Physics & Simulations',
        desc: 'In games like Fortnite or Minecraft, physics is calculated with vectors: $\\vec{v}_{\\text{new}} = \\vec{v} + \\vec{a} \\cdot \\Delta t$. Velocity, acceleration, and gravity — all vectors! Without vector math, no ball would fly correctly.',
      },
    },
    mistakes: {
      scalar_vs_cross: {
        wrong: 'The dot product yields a vector',
        correct: 'The dot product yields a NUMBER ($\\in \\mathbb{R}$)',
        why: 'With the dot product, you multiply component by component and ADD — the result is a single number, not a vector. Don\'t confuse it with the cross product (which does yield a vector, but comes later).',
        amir_warning: 'In numpy: np.dot(a, b) returns a number, np.cross(a, b) returns a vector. If your similarity score is suddenly an array instead of a number, you used the wrong product!',
      },
      length_sum: {
        wrong: '$|\\vec{a}| = a_1 + a_2 + a_3$ — simply adding the components',
        correct: '$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — apply the Pythagorean theorem!',
        why: 'The length of a vector is the Euclidean distance from the origin — and that follows the Pythagorean theorem. Simply adding the components would be the Manhattan distance (also useful, but something different!).',
      },
    },
  },
};
