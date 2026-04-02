export const batch11a = {
  '11-ableitungsregeln': {
    story: {
      intro: 'Amir\'s ML model for DataPulse delivers decent song recommendations — but training takes forever. "Gradient descent is basically nothing more than derivatives," his math professor explains. "If you understand how differentiation rules work, you\'ll understand why your model learns." Amir decides to work through the rules systematically.',
      challenge: 'Amir wants to understand how his ML model internally differentiates the loss function — for that he needs the power rule, sum rule, product rule, and chain rule.',
      outro: 'Amir now has a solid foundation: the power rule for simple terms, the sum and constant factor rules for combined expressions, the product rule for multiplications, and the chain rule for nested functions. "Now I finally understand what PyTorch does behind the scenes with Autograd," he says with satisfaction.',
    },
    objectives: {
      power_rule: 'Confidently apply the power rule: differentiate $f(x) = x^n$',
      constant_sum_rule: 'Master the constant factor and sum rules: differentiate terms individually and keep factors',
      product_quotient_rule: 'Correctly apply the product and quotient rules',
      chain_rule: 'Confidently use the chain rule for nested functions',
    },
    explanation: {
      intro: 'The power rule is the most important basic rule: You bring the exponent down as a factor and reduce the exponent by 1. This lets you differentiate any power function in an instant:',
      constant_factor: 'Constant factors are preserved when differentiating, and sums can be differentiated term by term. This keeps composite terms manageable:',
      amir_tip: 'In my ML code, sums and factors are everywhere — the loss function is a huge sum over all data points. The fact that I can differentiate each term individually is what makes backpropagation possible in the first place!',
      product_rule: 'When two functions are multiplied, you must NOT simply differentiate each one separately. Instead, the product rule applies — "first times derivative of second plus second times derivative of first":',
      quotient_rule: 'For quotients of functions, there is the quotient rule. Mnemonic: "Lo d-Hi minus Hi d-Lo over Lo Lo" (Lo = denominator, Hi = numerator, d = derivative):',
      chain_rule: 'For nested functions — a function inside a function — you need the chain rule. You differentiate "from outside to inside" and multiply by the inner derivative:',
    },
    concepts: {
      power_rule: {
        title: 'Power Rule',
        desc: 'The basic rule: Exponent becomes a factor, exponent decreases by 1. Also works for negative and fractional exponents, e.g., $\\frac{1}{x} = x^{-1}$.',
      },
      sum_rule: {
        title: 'Sum and Constant Factor Rule',
        desc: 'Sums are differentiated term by term, constant factors are preserved. This lets you break any polynomial into simple individual parts.',
      },
      product_rule: {
        title: 'Product Rule',
        desc: 'For the product of two functions: Derivative of first times second plus first times derivative of second. Indispensable whenever two variable expressions are multiplied.',
      },
      chain_rule: {
        title: 'Chain Rule',
        desc: 'Differentiate the outer function, leave the inner one as is, then multiply by the derivative of the inner function. The heart of backpropagation in neural networks.',
      },
    },
    examples: {
      power_sum: {
        title: 'Differentiating a polynomial with power and sum rules',
        context: 'Amir simplifies a term from his cost function.',
        step1: 'Given is the polynomial — we differentiate each term individually:',
        step2: 'Apply the power rule to each term: Exponent as factor, exponent minus 1. The constant $-7$ drops out:',
        step3: 'Combining gives the derivative function:',
        amir_comment: 'That\'s exactly what the gradient of my polynomial features looks like. Each term contributes to the slope — and PyTorch does this automatically for thousands of parameters simultaneously.',
      },
      chain_rule: {
        title: 'Nested function with the chain rule',
        context: 'Amir differentiates an activation function that contains a composition.',
        step1: 'Given is a nested power function:',
        step2: 'Decompose into outer function $f(u) = u^3$ and inner function $g(x) = 2x^2 + 1$:',
        step3: 'Differentiate the outer (power rule on $u^3$), leave the inner, times inner derivative ($4x$):',
        step4: 'Cleaned up — factor $4x$ pulled to the front:',
        amir_comment: 'The chain rule is literally backpropagation! Each layer in a neural network is a nested function, and the chain rule chains the gradients from layer to layer.',
      },
    },
    realworld: {
      gradient_descent: {
        title: 'Gradient Descent in Machine Learning',
        desc: 'Every ML model minimizes a loss function through differentiation. The gradient points in the direction of steepest ascent — we go in the opposite direction to find the minimum.',
      },
      marginal_cost: {
        title: 'Marginal Cost in Economics',
        desc: 'The derivative of the cost function $K(x)$ gives the marginal cost: What does one more produced unit cost? Companies use this daily for pricing.',
      },
      acceleration: {
        title: 'Acceleration in Physics',
        desc: 'Velocity is the derivative of position, acceleration the derivative of velocity. Your phone\'s sensor measures exactly this: $a(t) = v\'(t) = s\'\'(t)$.',
      },
    },
    mistakes: {
      power_rule_constant: {
        wrong: 'The derivative of a constant is the constant itself',
        correct: 'The derivative of a constant is always zero',
        why: 'A constant has no slope — it doesn\'t change. Think of $f(x) = 5$: It\'s a horizontal line, so the slope is everywhere 0. This holds for any number without $x$.',
        amir_warning: 'The bias term in my model is a constant — its derivative with respect to $x$ is 0. If you forget this, your gradient gets a wrong offset and training diverges.',
      },
      chain_rule_forgotten: {
        wrong: 'Forgetting the inner derivative for nested functions',
        correct: 'Always multiply by the inner derivative',
        why: 'For $[(3x+1)^4]\'$, it\'s not enough to just bring down the exponent. You MUST multiply by the derivative of the inner term $(3x+1)\' = 3$. Without the inner derivative, the factor 3 is missing.',
        amir_warning: 'Imagine forgetting the inner derivative for one layer in a neural network — the gradient would be completely wrong and the model learns nonsense. The chain rule is not optional!',
      },
    },
  },

  '11-kurvendiskussion': {
    story: {
      intro: 'Amir\'s recommendation algorithm produces results — but are they really optimal? "You need to fully analyze the loss function," says his professor. "Where are the minima? Where are the inflection points?" Amir realizes: A complete curve analysis shows him whether his model really found the global minimum or is stuck in a local minimum.',
      challenge: 'Amir analyzes the loss landscape of his model: systematically determine zeros, extrema, inflection points, and monotonicity of a function.',
      outro: 'Amir can now completely characterize any polynomial function: find zeros, determine maxima and minima, calculate inflection points, and read off monotonicity. "When I draw the loss landscape like this, I can immediately see whether my optimizer landed in the right valley," he says.',
    },
    objectives: {
      zeros_extrema: 'Systematically determine zeros and extreme points of a function',
      inflection_points: 'Calculate inflection points and understand their significance for the curve shape',
      monotonicity_symmetry: 'Analyze monotonicity and symmetry of a function',
    },
    explanation: {
      intro: 'A curve analysis is the complete analysis of a function. We begin with the zeros — the points where the graph crosses the $x$-axis:',
      extrema: 'You find extreme points (maxima and minima) where the first derivative equals zero. But careful: Not every zero of $f\'$ is automatically an extremum! You need the second derivative to confirm:',
      amir_tip: 'The loss landscape of my model has many local minima. With curve analysis, I can check whether a critical point is really a minimum — or just a saddle point where the optimizer gets stuck.',
      inflection: 'Inflection points mark the transition between concave up and concave down. Here the curvature behavior changes — the second derivative changes sign:',
      monotonicity: 'Monotonicity tells you where the function is increasing and where it\'s decreasing. You read it directly from the sign of the first derivative:',
    },
    concepts: {
      extrema: {
        title: 'Extreme Points (Maxima/Minima)',
        desc: 'Necessary condition: $f\'(x_0) = 0$. Sufficient: $f\'\'(x_0) < 0$ gives a maximum, $f\'\'(x_0) > 0$ gives a minimum. Both conditions together make it certain.',
      },
      inflection: {
        title: 'Inflection Points',
        desc: 'Where the curvature changes: $f\'\'(x_0) = 0$ AND $f\'\'\'(x_0) \\neq 0$. In normal distributions, inflection points mark the standard deviation.',
      },
      symmetry: {
        title: 'Symmetry',
        desc: 'Axis symmetry about the $y$-axis when $f(-x) = f(x)$ (only even exponents). Point symmetry about the origin when $f(-x) = -f(x)$ (only odd exponents). Saves computation!',
      },
    },
    examples: {
      complete_analysis: {
        title: 'Complete Curve Analysis',
        context: 'Amir examines a cubic function — similar to loss functions with multiple extrema.',
        step1: 'The function is given — we analyze it completely:',
        step2: 'Form the first derivative and find its zeros (necessary condition for extrema):',
        step3: 'Evaluate the second derivative at the critical points (sufficient condition): Negative value = maximum, positive value = minimum:',
        step4: 'Determine the inflection point via $f\'\' = 0$ and confirm with the third derivative:',
        amir_comment: 'That\'s exactly how I analyze the loss landscape: First find critical points, then check whether they\'re minima or saddle points. For high-dimensional functions, my optimizer does this numerically — but the principle is identical.',
      },
      graph_properties: {
        title: 'Using symmetry and extrema',
        context: 'A symmetric function — half the work is eliminated by symmetry.',
        step1: 'Given is a degree-4 function — we first check for symmetry:',
        step2: 'Substitute $-x$: All exponents are even, so $f(-x) = f(x)$ — axis-symmetric! Extrema occur symmetrically:',
        step3: 'Set the first derivative to zero — due to symmetry, it suffices to find the positive solutions:',
        step4: 'Calculate function values — thanks to symmetry, $f(\\sqrt{2}) = f(-\\sqrt{2})$:',
        amir_comment: 'Symmetry in data is gold: If I know my loss function is symmetric, I only need to search half the parameter space. That halves the training time!',
      },
    },
    realworld: {
      data_distribution: {
        title: 'Analyzing Data Distributions',
        desc: 'The normal distribution has inflection points at $\\mu \\pm \\sigma$. Curve analysis reveals where most data points concentrate and where the spread begins.',
      },
      profit_analysis: {
        title: 'Profit Maximization',
        desc: 'The profit function $G(x)$ has a maximum — the optimal production quantity. Curve analysis shows exactly at what quantity profit is maximized.',
      },
      population_growth: {
        title: 'Population Growth',
        desc: 'The inflection point of a growth curve marks the moment when growth begins to slow. Epidemiologists use exactly this analysis for infection curves.',
      },
    },
    mistakes: {
      extrema_without_check: {
        wrong: 'Every zero of $f\'$ is automatically an extreme point',
        correct: 'Zero of $f\'$ PLUS sign change or $f\'\' \\neq 0$ must be verified',
        why: 'For $f(x) = x^3$, $f\'(0) = 0$, but there\'s no extremum — it\'s a saddle point! You MUST verify the sufficient condition ($f\'\' \\neq 0$ or sign change of $f\'$).',
        amir_warning: 'In higher dimensions, such points are called "saddle points" — the optimizer gets stuck there thinking it found a minimum. Always check the second derivative!',
      },
      inflection_second_only: {
        wrong: '$f\'\'(x_0) = 0$ is sufficient for an inflection point',
        correct: '$f\'\'(x_0) = 0$ AND $f\'\'\'(x_0) \\neq 0$ together confirm the inflection point',
        why: 'For $f(x) = x^4$, $f\'\'(0) = 0$, but there\'s no inflection point — the curvature doesn\'t change! The third derivative must be non-zero to guarantee the change in curvature.',
        amir_warning: 'Same trap as with extrema: The necessary condition alone is never enough. Always verify the sufficient condition — otherwise you\'re trusting a false result.',
      },
    },
  },

  '11-extremwertaufgaben': {
    story: {
      intro: 'DataPulse should run on phones — but Amir\'s model uses too much memory. "You need to optimize the network architecture," says his teammate Sara. "Maximum accuracy with minimum memory usage." Amir recognizes: This is a classic optimization problem — optimize one quantity while another is constrained.',
      challenge: 'Amir wants to find the best model architecture: maximum prediction quality subject to the constraint of limited computing resources.',
      outro: 'Amir has understood the principle: Set up the objective function, substitute the constraint, reduce to one variable, differentiate, set to zero, verify. "Whether it\'s can dimensions or model parameters — the approach is always the same," he realizes. His model now fits in 50 MB.',
    },
    objectives: {
      setup_equations: 'Set up objective function and constraint from a real-world context',
      optimize_constraints: 'Create a single-variable function by substituting the constraint and optimize it',
      verify_extremum: 'Use the second derivative to verify whether a maximum or minimum exists, and consider boundary values',
    },
    explanation: {
      intro: 'Optimization problems always involve the same thing: One quantity should be as large or small as possible (objective function), while a restriction applies (constraint):',
      strategy: 'The strategy is always the same: (1) Set up the objective function — what should be optimized? (2) Find the constraint — what restriction applies? (3) Solve the constraint for one variable and substitute into the objective function. (4) Differentiate, set to zero, verify.',
      amir_tip: 'Hyperparameter tuning is exactly this kind of optimization problem: I want to minimize the validation error (objective function), but my GPU memory is limited (constraint). The approach from math class works 1:1!',
      substitution: 'After substituting the constraint, the objective function depends on only one variable. Now differentiate normally and check the critical point:',
      domain_check: 'Don\'t forget the domain! In real problems, there are often limits (e.g., $r > 0$ for a radius). Compare the function value at the critical point with the boundary values — sometimes the optimum is at the boundary.',
    },
    concepts: {
      target_function: {
        title: 'Objective Function',
        desc: 'The quantity to be optimized — maximum profit, minimum surface area, best accuracy. Initially often depends on two variables.',
      },
      constraint: {
        title: 'Constraint',
        desc: 'The restriction that applies — fixed volume, limited budget, limited parameters. Allows one variable to be eliminated, reducing the objective function to one variable.',
      },
      boundary_check: {
        title: 'Boundary Check',
        desc: 'The optimum can also be at the boundary of the domain. Always compare $f(x_{opt})$ with the function values at the boundaries $f(a)$ and $f(b)$.',
      },
    },
    examples: {
      can_volume: {
        title: 'Can with minimum material usage',
        context: 'A cylindrical can should hold 330 ml — using as little tin as possible.',
        step1: 'Constraint: The volume is fixed. Solve for $h$ to eliminate one variable:',
        step2: 'Set up the objective function (surface area) and substitute $h$ — now everything depends only on $r$:',
        step3: 'Differentiate, set to zero, and solve for $r$ — this is the optimal radius:',
        step4: 'Check the second derivative: Positive means minimum — we\'ve indeed found the most efficient can:',
        amir_comment: 'This is exactly like model compression: Fixed accuracy (constraint), minimum parameter count (objective function). I replace $r$ with "layer width" and $h$ with "depth" — same principle!',
      },
      profit_max: {
        title: 'Maximum Profit',
        context: 'A startup wants to find the optimal price for its subscription model.',
        step1: 'Set up the profit function: Revenue minus costs — here already in one variable:',
        step2: 'Set the derivative to zero — the optimal quantity:',
        step3: 'The second derivative is negative — so it\'s a maximum. Profit is indeed maximized here:',
        step4: 'Calculate the maximum profit by substituting:',
        amir_comment: 'Price optimization is a classic in data science. At DataPulse, we could calculate the optimal subscription tier the same way — maximize profit under the condition that users don\'t churn.',
      },
    },
    realworld: {
      hyperparameter: {
        title: 'Hyperparameter Optimization',
        desc: 'The learning rate $\\alpha$ in gradient descent must be optimally chosen: Too large = divergence, too small = painfully slow. The optimal $\\alpha$ minimizes the validation error.',
      },
      packaging: {
        title: 'Packaging Design',
        desc: 'Minimum material usage at fixed volume — that\'s exactly what engineers solve daily. Every beverage can, every carton is the result of an optimization problem.',
      },
      solar_panel: {
        title: 'Solar Panel Alignment',
        desc: 'The tilt angle of a solar panel determines energy yield. Finding the optimal angle is an optimization problem with the sun\'s position as the constraint.',
      },
    },
    mistakes: {
      no_constraint: {
        wrong: 'Differentiating the objective function directly with two variables',
        correct: 'First substitute the constraint, then differentiate',
        why: 'With two variables, you can\'t just differentiate with respect to $x$ — $y$ changes too! You MUST use the constraint to express $y$ in terms of $x$. Only then does everything depend on one variable.',
        amir_warning: 'This is like an ML model with too many free parameters: Without constraints, no meaningful optimum. The constraint reduces the degrees of freedom — exactly like regularization.',
      },
      no_boundary: {
        wrong: 'Assuming the critical point is the global optimum',
        correct: 'Compare the critical point with boundary values',
        why: 'On a bounded interval $[a, b]$, the optimum can be at the boundary! $f\'(x_0) = 0$ only yields local candidates. You must compare $f(x_0)$, $f(a)$, and $f(b)$.',
        amir_warning: 'In practice, every parameter has an allowed range. My learning rate can\'t be negative, the batch size can\'t exceed GPU memory. Checking boundary values is mandatory!',
      },
    },
  },

  '11-integralrechnung': {
    story: {
      intro: 'DataPulse is running — but Amir needs a new metric: How many songs do users listen to in total per week? He has the listening rate $r(t)$ as a function of time, but he needs the total count. "Rate times time gives quantity — but the rate keeps changing," Amir ponders. His buddy Kai grins: "Sounds like an integral."',
      challenge: 'Amir wants to calculate the total number of songs listened to from the time-dependent listening rate $r(t)$ — this leads him to integral calculus.',
      outro: 'Amir can now find antiderivatives, compute definite integrals, and determine areas between curves. "Integration is the reverse of differentiation — and in practice, I use it to accumulate continuous data," he summarizes. His weekly listening metric is ready.',
    },
    objectives: {
      antiderivative: 'Find antiderivatives using the reverse power rule and understand the constant of integration $C$',
      definite_integral: 'Calculate definite integrals using the fundamental theorem: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
      fundamental_theorem: 'Understand the fundamental theorem of calculus and apply it to area calculations',
    },
    explanation: {
      intro: 'Integration is the reverse of differentiation: If $F\'(x) = f(x)$, then $F(x)$ is an antiderivative of $f(x)$. The general antiderivative always includes the constant $C$:',
      power_rule_integral: 'The power rule in reverse: Increase the exponent by 1 and divide by the new exponent. This works for all $n \\neq -1$:',
      amir_tip: 'Integration is like aggregation in databases: The derivative gives the instantaneous rate of change, integration sums everything up. If I know the downloads per hour, the integral gives me the total downloads over a time period.',
      definite_integral: 'The definite integral calculates the "total effect" between two bounds. The fundamental theorem makes it simple: Antiderivative at the upper bound minus antiderivative at the lower bound:',
      area_interpretation: 'Geometrically, the definite integral is the area between the curve and the $x$-axis. Caution: Areas below the $x$-axis count as negative! For the actual area, you need the absolute value:',
    },
    concepts: {
      antiderivative: {
        title: 'Antiderivative',
        desc: 'A function $F(x)$ with $F\'(x) = f(x)$. The constant $+C$ is important because different antiderivatives differ only by a constant.',
      },
      definite_integral: {
        title: 'Definite Integral',
        desc: 'Calculates the signed area between $f(x)$ and the $x$-axis from $a$ to $b$. Substitute the upper bound minus the lower bound.',
      },
      fundamental_theorem: {
        title: 'Fundamental Theorem of Calculus',
        desc: 'Connects derivatives and integrals: Differentiation and integration are inverse operations. The definite integral can be calculated via the antiderivative.',
      },
    },
    examples: {
      area_calculation: {
        title: 'Area between a parabola and the $x$-axis',
        context: 'Amir visualizes the distribution of listening time as the area under a curve.',
        step1: 'Determine the function and its zeros — these are our integration bounds:',
        step2: 'Find the antiderivative using the reverse power rule:',
        step3: 'Compute the definite integral: Substitute upper bound minus lower bound:',
        step4: 'The integral is negative because the parabola lies below the $x$-axis. For the area, take the absolute value:',
        amir_comment: 'Negative integrals make total sense in data analysis: If $f(x)$ is the deviation from the average, a negative integral shows that values were overall below the mean.',
      },
      distance_from_velocity: {
        title: 'Distance from velocity',
        context: 'How far does an autonomous car travel in 4 seconds?',
        step1: 'Given is the velocity function:',
        step2: 'The total distance is the integral of velocity over time:',
        step3: 'Find the antiderivative — integrate each term individually:',
        step4: 'Substitute the bounds and calculate the difference:',
        amir_comment: 'Sensor data comes in as rates — velocity, data throughput, requests per second. The integral turns that into the total quantity. My dashboard shows exactly that: $\\int_0^T r(t)\\,dt$ = total streams.',
      },
    },
    realworld: {
      data_aggregation: {
        title: 'Data Aggregation Over Time',
        desc: 'If the data rate $r(t)$ is known, the integral gives the total quantity over a time period. That\'s how streaming services calculate monthly listening minutes from per-second data.',
      },
      energy_consumption: {
        title: 'Energy Consumption',
        desc: 'Power $P(t)$ in watts times time gives energy in joules — but only at constant power. With fluctuating power, you need the integral: $E = \\int P(t)\\,dt$.',
      },
      probability: {
        title: 'Probabilities',
        desc: 'The probability that a random variable falls between $a$ and $b$ is the area under the density function — that is, a definite integral. The foundation of all statistics.',
      },
    },
    mistakes: {
      constant_forgotten: {
        wrong: 'Forgetting the constant of integration $C$ for indefinite integrals',
        correct: 'Always append $+ C$ for indefinite integrals',
        why: 'If $F\'(x) = 2x$, then both $x^2$ and $x^2 + 7$ are antiderivatives. The $+C$ represents all possible antiderivatives. For definite integrals, $C$ cancels out — there you can omit it.',
        amir_warning: 'In practice, $C$ is the initial condition: How many songs had the user already listened to before we started measuring? Without $C$, your calculation starts at zero instead of the actual value.',
      },
      negative_area: {
        wrong: 'Interpreting the integral directly as area, even when negative',
        correct: 'For actual areas, take the absolute value of integral values',
        why: 'The integral $\\int_a^b f(x)\\,dx$ can be negative when $f(x) < 0$. That\'s correct as a signed area. If you need the geometric area, you must integrate $|f(x)|$ or calculate partial areas separately.',
        amir_warning: 'Imagine calculating total listening time and getting a negative result — that would be obviously wrong. For area problems, always check whether the function changes sign and calculate subintervals separately!',
      },
    },
  },
};
