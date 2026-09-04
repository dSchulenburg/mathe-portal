export const batch11c = {
  '11-rationale-funktionen': {
    story: {
      intro: 'Amir is building a new recommendation filter at DataPulse. The formula: "relevance per listener divided by number of listeners". Sounds clean — until Yara asks: "What happens when a track has zero listeners?" Amir stares at the code: division by zero. Crash. Poles, removable gaps, asymptotes — the whole family of rational functions suddenly shows up in his notebook, and he has to understand them properly.',
      challenge: 'Amir has to make his filter safe so that it doesn\'t crash at poles — and at the same time recognize when an apparent crash is in truth only a removable gap that can be cancelled away.',
      outro: 'Three tools got Amir through: check the domain (where does the denominator become zero?), distinguish between a pole and a removable gap (is the numerator zero there too?), and determine the asymptotes (behaviour for large $|x|$). His filter now runs cleanly — and Prof. Nguyen approves: "That is proper numerical hygiene."',
    },
    objectives: {
      definition: 'Recognize a rational function and determine its domain',
      poles: 'Find poles — roots of the denominator where the numerator is not zero',
      removable_gaps: 'Recognize removable gaps, eliminate them by cancelling and state the continuous extension',
      asymptotes: 'Derive vertical and horizontal asymptotes from the function term',
    },
    explanation: {
      intro: 'A rational function is a fraction of two polynomials — numerator $p(x)$ divided by denominator $q(x)$. The decisive point: the denominator must never become zero, otherwise the function is undefined at that place.',
      domain: 'The domain $D_f$ consists of all real numbers except the roots of the denominator. Factorize the denominator or calculate its roots — those are the gaps in $D_f$.',
      amir_tip: 'My first reflex with every rational function: where does the denominator become zero? I write those $x$-values at the top of the page. Only then do I deal with the rest. Skip that and you overlook poles — and in code the program then crashes.',
      poles: 'You have a pole when the denominator becomes zero but the numerator does not. There the function value shoots off to infinity (positive or negative) — the graph has a vertical asymptote.',
      removable: 'If the numerator becomes zero at the same place, you can cancel the common factor. What remains is a so-called "removable gap": the graph merely has a hole there, which you could fill with a sensible definition.',
      asymptotes: 'You read the behaviour for large $|x|$ off the degrees of the polynomials: if the numerator degree is smaller than the denominator degree, $f(x) \\to 0$ — the x-axis is a horizontal asymptote. If the degrees are equal, the ratio of the leading coefficients gives the horizontal asymptote.',
    },
    concepts: {
      definition: {
        title: 'Rational function',
        desc: 'Quotient of two polynomials $p(x)$ and $q(x)$. Defined everywhere with $q(x) \\neq 0$. Examples: $\\frac{1}{x}$, $\\frac{x^2-1}{x-1}$, $\\frac{2x+3}{x^2-4}$.',
      },
      pole: {
        title: 'Pole',
        desc: 'A place $x_0$ with $q(x_0) = 0$ and $p(x_0) \\neq 0$. The graph shoots off to $\\pm\\infty$ — vertical asymptote at $x = x_0$. Even pole order ⇒ no sign change, odd ⇒ sign change.',
      },
      removable_gap: {
        title: 'Removable gap',
        desc: 'A place $x_0$ with $p(x_0) = q(x_0) = 0$. Cancel the common factor, then compute the limit — that is the "continuous extension". The graph merely has an open hole there.',
      },
      asymptote: {
        title: 'Horizontal asymptote',
        desc: 'The limit for $x \\to \\pm\\infty$. For $\\deg p < \\deg q$ it is $y = 0$, for $\\deg p = \\deg q$ it is the ratio of the leading coefficients. For $\\deg p > \\deg q$ there is a slant or curved asymptote instead.',
      },
    },
    examples: {
      simple_pole: {
        title: 'Investigating a simple pole',
        context: 'Amir checks the simplest rational function in his filter: $f(x) = \\frac{1}{x-2}$. Where is it undefined, and how does it behave?',
        step1: 'Write down the function term — numerator $p(x) = 1$, denominator $q(x) = x - 2$:',
        step2: 'Look for the root of the denominator: $q(x) = 0$ gives a critical place:',
        step3: 'Evaluate the numerator there: $p(2) = 1 \\neq 0$. So not a removable gap, but a genuine pole:',
        step4: 'Behaviour at infinity: $\\frac{1}{x-2} \\to 0$ for $x \\to \\pm\\infty$. The x-axis is a horizontal asymptote:',
        amir_comment: 'A classic case: vertical asymptote at $x = 2$, horizontal asymptote at $y = 0$. So in code I have to catch $x = 2$ explicitly — otherwise NaN. That was exactly Yara\'s question.',
      },
      removable: {
        title: 'Finding a removable gap by cancelling',
        context: 'While testing, Amir runs into $f(x) = \\frac{x^2 - 1}{x - 1}$. At $x = 1$ the denominator becomes zero — a crash? Or maybe not?',
        step1: 'Write down the function term — the numerator is a difference of squares:',
        step2: 'At $x = 1$ the numerator AND the denominator are zero. That is the indicator of a removable gap:',
        step3: 'Factorize the numerator $(x^2 - 1) = (x-1)(x+1)$, then cancel the common factor $(x-1)$:',
        step4: 'So the graph is the line $y = x + 1$ — with a hole exactly at $x = 1$, because the original $f$ is undefined there:',
        amir_comment: 'Important: despite the cancelling I must not add $x = 1$ to $D_f$. The original function stays undefined there. In code I solve it with an if-check and return the limit $f(1) := 2$ — a clean continuous extension.',
      },
    },
    realworld: {
      unit_cost: {
        title: 'Unit costs in production',
        desc: 'Fixed costs $F$ spread over $x$ units produced plus variable costs $v$ per unit: $k(x) = \\frac{F + v \\cdot x}{x} = v + \\frac{F}{x}$. For $x \\to \\infty$ the unit costs approach $v$ — a horizontal asymptote in real life.',
      },
      light_intensity: {
        title: 'Light intensity and the inverse square',
        desc: 'A lamp with power $P$ produces the light intensity $I(r) = \\frac{P}{4\\pi r^2}$ at distance $r$. At $r \\to 0$ there is a pole (theoretically infinitely bright right at the source), at $r \\to \\infty$ we get $I \\to 0$. A classic law of nature.',
      },
      dilution: {
        title: 'Concentration when diluting',
        desc: 'A juice with concentration $c_0$ and volume $V_0$ is diluted with a volume $V$ of water: $c(V) = \\frac{c_0 \\cdot V_0}{V_0 + V}$. Here there is no pole ($V_0 + V > 0$), but for $V \\to \\infty$ the concentration tends to zero — horizontal asymptote $c = 0$.',
      },
    },
    mistakes: {
      pole_vs_zero: {
        wrong: 'Confusing a pole with a root',
        correct: 'Root: numerator zero. Pole: denominator zero and numerator not zero',
        why: 'For $f(x) = \\frac{x-3}{x+2}$ the root is at $x = 3$ (there $p(x) = 0$, so $f = 0$) and the pole is at $x = -2$ (there $q(x) = 0$). Swap the roles and you draw the graph completely wrong — hole and pole in the wrong places.',
        amir_warning: 'My mnemonic: the root is where $f$ "yields zero". The pole is where $f$ "explodes". Both follow directly from the numerator or the denominator — never mix them up.',
      },
      dont_cancel: {
        wrong: 'Overlooking a common factor and assuming a pole',
        correct: 'First factorize numerator and denominator, then cancel common factors',
        why: 'For $f(x) = \\frac{x^2-4}{x-2}$, $x = 2$ appears to be a pole. But factorize the numerator and $\\frac{(x-2)(x+2)}{x-2} = x+2$ — so it is only a removable gap. Whoever does not factorize claims a pole that does not exist at all.',
      },
    },
  },

  '11-lgs-gauss': {
    story: {
      intro: 'At DataPulse Amir is training a simple linear model: three features (tempo, loudness, danceability), from which the model estimates a listener rating. Three known examples give three equations with three unknowns — the weights of the features. "That will never work by hand," says Finn. Amir grins: "It will, with Gauss." Systems of linear equations, a classic that sits behind every piece of ML code.',
      challenge: 'From three training examples Amir has to determine the three feature weights $a$, $b$, $c$. Three equations, three unknowns — Gauss.',
      outro: 'With Gaussian elimination Amir systematically brings the augmented coefficient matrix into row echelon form. The lower left region becomes zeros step by step, then he reads off the solutions backwards. "That is exactly what numpy.linalg.solve does under the hood," he explains to Finn — "only now I finally understand why."',
    },
    objectives: {
      solve_2x2: 'Solve systems of linear equations with two unknowns by substitution, equating or addition',
      gauss_3x3: 'Systematically bring a system with three unknowns into row echelon form using the Gauss algorithm',
      solution_types: 'Distinguish the three solution types — unique, no solution, infinitely many',
      matrix_form: 'Write a system in matrix form $A\\vec{x} = \\vec{b}$ and set up the augmented matrix correctly',
    },
    explanation: {
      intro: 'A system of linear equations is a collection of several equations with the same unknowns. A solution of the system is a set of values that satisfies ALL equations simultaneously. Already familiar from grade 9 — typically two equations, two unknowns:',
      methods: 'For 2×2 systems the classic methods are enough: substitution, equating or the addition method. With 3×3 or larger this quickly gets confusing — hence the Gauss algorithm, which runs mechanically and always the same way.',
      amir_tip: 'My workflow for 3×3: write down the augmented matrix, then be PURPOSEFUL. First make the left column below the pivot zero, then the middle column below the second pivot. Row echelon form. Solve backwards. Sounds mechanical — it is mechanical, and that is precisely the advantage.',
      gauss: 'In Gaussian elimination you write the system as an augmented matrix $(A | \\vec{b})$. With three row operations — multiply a row by a number, add/subtract rows, swap rows — you transform the matrix into row echelon form. This does not change the solution set.',
      solution_types: 'From the row echelon form you read the solution type directly: no contradictory zero row at the bottom ⇒ unique solution. A row $0 = c$ with $c \\neq 0$ ⇒ no solution. A row $0 = 0$ ⇒ introduce a parameter, infinitely many solutions.',
    },
    concepts: {
      lgs: {
        title: 'System of linear equations',
        desc: 'A collection of linear equations with shared unknowns. In matrix form: $A \\vec{x} = \\vec{b}$, where $A$ is the coefficient matrix and $\\vec{b}$ the vector of right-hand sides.',
      },
      gauss: {
        title: 'Gauss algorithm',
        desc: 'The standard solution method. Transform the augmented matrix into row echelon form, then solve backwards. Three permitted operations that do not change the solution set: multiply a row by a scalar, add multiples of rows, swap rows.',
      },
      solution_types: {
        title: 'Three solution types',
        desc: 'Unique solution (as many pivots as unknowns), no solution (contradictory row $0 = c$), infinitely many solutions (at least one $0=0$ row, introduce free parameters).',
      },
      matrix: {
        title: 'Augmented coefficient matrix',
        desc: 'The notation $(A | \\vec{b})$. The coefficients of the unknowns on the left, the right-hand side on the right (separated by a bar). Saves constantly writing out the variable names.',
      },
    },
    examples: {
      simple_2x2: {
        title: 'A simple 2×2 system by addition',
        context: 'Amir has two example equations from training data. He is looking for $x$ (weight for tempo) and $y$ (weight for loudness).',
        step1: 'Write down the system of equations:',
        step2: 'Add both equations — the $y$-terms cancel out and $x$ is solved immediately:',
        step3: 'Substitute $x = 3$ into one of the original equations, here the second:',
        step4: 'Solution set — state it as a tuple $(x, y)$:',
        amir_comment: 'The classic addition method: if I am lucky, variables drop out straight away. If not, I first have to multiply one equation by a suitable number — e.g. by 2, so that the coefficients match.',
      },
      gauss_3x3: {
        title: 'Solving a 3×3 system with Gauss',
        context: 'Amir has a mini training set: three listener ratings, three feature weights $x, y, z$. Three equations — Gaussian elimination in the augmented matrix.',
        step1: 'Set up the augmented matrix — coefficients on the left, right-hand sides to the right of the bar:',
        step2: 'Row 2 minus 2 times row 1 — the entry $a_{21} = 2$ becomes zero:',
        step3: 'Row 3 minus row 1 — the entry $a_{31} = 1$ becomes zero. The left column below the pivot 1 is now clean:',
        step4: 'Continue to row echelon form, then solve backwards: $z$ from the last row, substitute upwards for $y$, then $x$. Solution: $z = 1$, $y = \\tfrac{8}{3}$, $x = \\tfrac{7}{3}$:',
        amir_comment: 'Gauss is bookkeeping: note every row operation cleanly. Whoever carries out an operation only halfway — e.g. transforms only the pivot column — gets garbage. Discipline beats genius here.',
      },
    },
    realworld: {
      mischung: {
        title: 'Mixture problems',
        desc: 'A pharmacist mixes two solutions with concentrations $a$ and $b$ into a mixture with total mass $m$ and total active ingredient $w$. Two equations, two unknowns — a system of linear equations right away.',
      },
      preise: {
        title: 'Reconstructing prices',
        desc: 'Three customers, three receipts each with quantities and a total price — from these, work back to the individual prices. Three equations, three unknown unit prices. Gauss solves it in a few steps.',
      },
      network: {
        title: 'Electrical circuits (Kirchhoff)',
        desc: 'In a network of resistors every node equation (current in = current out) and every loop equation (sum of voltages = 0) supplies one linear condition. With $n$ unknowns that gives an $n \\times n$ system — the standard method in electrical engineering.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Transforming only the pivot column during a row operation',
        correct: 'Transform every column of the row (including the right-hand side) — all at once',
        why: 'A row operation applies to the WHOLE row. Whoever transforms only the pivot entry in $Z_2 - 2Z_1$ and forgets the other columns destroys the equation. The consequence: the row echelon form looks right but the solutions are wrong — and the mistake is hard to find afterwards.',
        amir_warning: 'This exact mistake cost me a full mark in a practice exam. Since then I write out the complete new row — every entry including the right-hand side — neatly underneath the old one. Visually comparable.',
      },
      no_solution: {
        wrong: 'Reading a contradictory row $0 = c$ as $x = c$',
        correct: 'A row $0 = c$ with $c \\neq 0$ means: the system has NO solution',
        why: 'If $0 = 5$ comes out at the end, that is a contradiction — no value of $x, y, z$ can satisfy it. The solution set is empty. Whoever reads it as $x = 5$ states a solution that the system does not satisfy.',
      },
    },
  },
};
