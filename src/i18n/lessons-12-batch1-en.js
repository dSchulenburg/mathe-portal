export const batch12a = {
  '12-e-funktion-ln': {
    story: {
      intro: 'The particle system of "Harbor Lights 3D" looks spectacular — sparks fly, fog swirls, fire blazes. But Kai has a performance problem: Thousands of particles simultaneously make the GPU sweat. "I need to calculate how quickly particles fade so I can free them from memory in time," he explains to Mia. The answer lies in the $e$-function and its counterpart, the natural logarithm — the tools for everything that grows or decays exponentially.',
      challenge: 'Kai needs to mathematically model particle lifetimes: How quickly does a spark fade? When is a smoke particle so transparent it can be deleted? For this he needs the chain rule for $e$-functions, derivatives of $\\ln$, and solving decay equations.',
      outro: 'With chained $e$-functions and $\\ln$ derivatives, Kai has built a smart particle system: Every spark follows a precise decay curve, every smoke particle is recycled at exactly the moment its opacity drops below the perception threshold. "The chain rule is basically my performance optimizer," Kai grins. "The GPU thanks me with 60 instead of 30 FPS." Mia adds: "And the best part — the same math also describes radioactive decay and capacitor charging curves."',
    },
    objectives: {
      advanced_e_properties: 'Differentiate chained $e$-functions using the chain rule: $(e^{g(x)})\'= g\'(x) \\cdot e^{g(x)}$',
      ln_calculus: 'Master the derivative of $\\ln(g(x))$ and use it for curve analysis',
      composite_exp_functions: 'Analyze products of polynomials and $e$-functions (extrema, inflection points)',
      differential_equations: 'Understand simple differential equations of the type $f\'(t) = k \\cdot f(t)$ and set up decay models',
    },
    explanation: {
      intro: 'In grade 11, you learned the basics of $e^x$ and $\\ln(x)$. Now it gets serious: We differentiate chained $e$-functions, analyze curves with $\\ln$, and solve decay equations. The key is the chain rule — when the exponent contains not just $x$ but an entire function $g(x)$, then the outer derivative produces $e^{g(x)}$ and the inner derivative $g\'(x)$ is added as a factor:',
      ln_derivative: 'Equally elegant: The derivative of $\\ln(g(x))$ using the chain rule. The natural logarithm "inverts the function" — the inner derivative goes in the numerator, the inner function itself in the denominator:',
      kai_tip: 'In my 3D engine, $e$-functions appear everywhere: particle decay, fog density, audio fadeout. The trick is always the same — the chain rule. When I differentiate $e^{-0{,}5t^2}$ for a Gaussian distribution, the inner function is $g(t) = -0{,}5t^2$ and the inner derivative is $g\'(t) = -t$. Substitute, done. Once you\'ve got this pattern down, it runs automatically!',
      integration: 'Integration runs the process in reverse. For simple exponential functions: The factor in the exponent moves to the denominator. And the famous $\\frac{1}{x}$ rule leads directly to $\\ln$:',
      decay_model: 'Exponential decay is THE standard model for processes where the rate of change is proportional to the current value: $f\'(t) = -\\lambda \\cdot f(t)$. The solution is always an $e$-function with a negative exponent. The half-life $t_{1/2}$ tells you after how much time half of the initial value remains:',
    },
    concepts: {
      chain_rule_exp: {
        title: 'Chain Rule for $e$-Functions',
        desc: 'For $f(x) = e^{g(x)}$, the outer function is $e^u$ (derivative: $e^u$) and the inner function is $g(x)$. The result: The $e$-function stays, multiplied by the inner derivative. Example: $(e^{3x^2})\' = 6x \\cdot e^{3x^2}$.',
      },
      ln_derivative: {
        title: 'Derivative of $\\ln(g(x))$',
        desc: 'The chain rule for the logarithm produces a fraction: inner derivative over inner function. This is especially useful when $g(x)$ is a polynomial — e.g., $(\\ln(x^2+1))\' = \\frac{2x}{x^2+1}$. Important: The domain is restricted by $g(x) > 0$.',
      },
      exp_integration: {
        title: 'Logarithmic Integration',
        desc: 'When an integrand has the form $\\frac{f\'(x)}{f(x)}$, the antiderivative is immediately $\\ln|f(x)| + C$. This is the reverse of the $\\ln$ derivative and one of the most important integration tricks. Example: $\\int \\frac{2x}{x^2+1}\\,\\mathrm{d}x = \\ln(x^2+1) + C$.',
      },
    },
    examples: {
      particle_decay: {
        title: 'Modeling particle decay',
        context: 'In Kai\'s particle system, 5000 spark particles start simultaneously. Their number decreases exponentially — Kai wants to calculate the decay rate and half-life.',
        step1: 'Set up the decay model — $N_0 = 5000$ particles, decay constant $\\lambda = 0{,}03\\,\\text{s}^{-1}$:',
        step2: 'Differentiate using the chain rule — inner function $g(t) = -0{,}03t$, inner derivative $g\'(t) = -0{,}03$:',
        step3: 'Calculate the initial rate — at $t = 0$, 150 particles disappear per second:',
        step4: 'Determine the half-life — solve $N(t_{1/2}) = \\frac{N_0}{2}$ using $\\ln$:',
        kai_comment: 'After 23 seconds, half the particles are gone — that means I can already start freeing memory before the next explosion. In the engine, I set the kill threshold at $5\\%$ opacity, which is about $3 \\cdot t_{1/2} \\approx 70\\,\\text{s}$.',
      },
      ln_curve_analysis: {
        title: 'Curve analysis with $e$-function',
        context: 'Kai models the brightness of a light flash: First it rises, then it falls off. The brightness curve has the form $f(x) = x^2 \\cdot e^{-x}$ — a typical "flash" function.',
        step1: 'Function given — product of polynomial and decaying $e$-function:',
        step2: 'Differentiate with the product rule: $(x^2)\' \\cdot e^{-x} + x^2 \\cdot (e^{-x})\'$ — for the second factor we need the chain rule:',
        step3: 'Zeros of the derivative: $e^{-x} > 0$ always, so only $x(2-x) = 0$ matters:',
        step4: 'Determine the maximum — calculate the function value at $x = 2$:',
        kai_comment: 'This "rise-then-fall" curve is perfect for light effects. At $x = 0$ everything is dark, at $x = 2$ maximum brightness, then gentle fading. In my shader, I use exactly this function for muzzle flash and explosion flashes!',
      },
    },
    realworld: {
      particle_systems: {
        title: 'Particle Systems in 3D Engines',
        desc: 'Every spark, every smoke trail, every fire in a video game follows an exponential decay curve $N(t) = N_0 \\cdot e^{-\\lambda t}$. The decay constant $\\lambda$ determines how quickly particles fade. In Unity and Unreal Engine, you set exactly this parameter when configuring "Lifetime" and "Fade."',
      },
      signal_processing: {
        title: 'Audio Processing & Signal Damping',
        desc: 'When you hear a reverb effect in GarageBand or a DJ tool, the sound decays exponentially: $S(t) = A \\cdot e^{-\\alpha t} \\cdot \\sin(\\omega t)$. The $e$-function controls the volume, the $\\sin$ the oscillation. Bluetooth signals and WiFi range also follow this model — that\'s why streaming gets choppy the farther you are from the router.',
      },
      learning_curve: {
        title: 'Learning Curve & Skill Progression',
        desc: 'How quickly do you learn a new game? The learning curve $L(t) = L_{\\max} \\cdot (1 - e^{-kt})$ describes how skills grow quickly at first and then approach a maximum. Game designers use this model to design difficulty curves — and your brain follows exactly this function when learning vocabulary or practicing an instrument.',
      },
    },
    mistakes: {
      chain_rule_forgotten: {
        wrong: 'Forgetting the inner derivative: $(e^{3x})\' = e^{3x}$',
        correct: 'Apply the chain rule: $(e^{3x})\' = 3 \\cdot e^{3x}$',
        why: 'Whenever there\'s more than just $x$ in the exponent, the chain rule is REQUIRED. The inner function here is $g(x) = 3x$ with $g\'(x) = 3$. This factor must not be omitted!',
        kai_warning: 'In my shader, I once differentiated $e^{-0{,}5t^2}$ and forgot the factor $-t$. Result: Particles that never changed — like frozen smoke. Since then I check every time: Is there more than $x$ in the exponent? Then chain rule!',
      },
      ln_negative: {
        wrong: 'Forgetting absolute value bars: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln(x) + C$',
        correct: 'Correct with absolute value: $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\ln|x| + C$',
        why: 'The function $\\frac{1}{x}$ is also defined for negative $x$, but $\\ln(x)$ only for $x > 0$. The absolute value bars ensure the antiderivative is valid on the entire domain. In definite integrals with positive bounds you can omit the bars — for indefinite integrals, never!',
      },
    },
  },

  '12-integralrechnung-vertieft': {
    story: {
      intro: 'For "Harbor Lights 3D," Kai is building a procedural level generator: Bridges, tunnels, and buildings should emerge from mathematical curves rotated around axes. "Imagine I define a profile and rotate it — and I get a column, a dome, or a ship hull," Kai enthuses. But how does he calculate the exact volume of these 3D objects? The answer: Volumes of revolution, integration by parts, and a few elegant integration techniques.',
      challenge: 'Kai needs to calculate volumes of 3D objects created by rotating curves around axes. He also needs integration by parts for complex lighting formulas and must check whether certain integrals converge at all.',
      outro: 'The level generator is running: Kai rotates curve profiles around axes and gets perfect 3D objects with precisely calculated volumes. "Integration by parts was the key for the lighting integrals," he tells Amir, "and improper integrals show me when a light effect has finite total energy — even if it theoretically extends to infinity." Mia nods: "The same math is used by engineers to dimension containers and physicists to calculate wave energy."',
    },
    objectives: {
      integration_techniques: 'Confidently apply integration by parts and substitution',
      rotation_volumes: 'Calculate volumes of revolution around the $x$-axis with $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
      improper_integrals: 'Check improper integrals for convergence and calculate them',
      partial_integration: 'Strategically use integration by parts when products need to be integrated',
    },
    explanation: {
      intro: 'In grade 11, you learned definite integrals as area. Now three new techniques are added. The first is integration by parts — the "reverse" of the product rule. When you need to integrate a product like $x \\cdot e^x$, you decompose it into $u$ and $v\'$:',
      substitution: 'The second technique is substitution — the "reverse" of the chain rule for differentiation. When a function "sits inside another," you replace the inner function with a new variable:',
      kai_tip: 'My trick for integration by parts: "LIATE" — Logarithmic, Inverse Trig, Algebraic, Trigonometric, Exponential. That\'s the order in which you choose $u$. So for $\\int x \\cdot e^x\\,\\mathrm{d}x$, $u = x$ (algebraic) and $v\' = e^x$ (exponential). For $\\int x \\cdot \\ln(x)\\,\\mathrm{d}x$, $u = \\ln(x)$ and $v\' = x$. Works almost every time!',
      rotation_volume: 'Now it gets three-dimensional: When you rotate the graph of $f(x)$ around the $x$-axis, a solid of revolution is created. You calculate its volume by imagining the body as composed of infinitely many thin circular disks — each disk has radius $f(x)$:',
      improper: 'What happens when an integration bound is $\\infty$? Or the integrand becomes unbounded at a point? Then we speak of improper integrals. You replace the problematic point with a limit and check whether a finite value results:',
    },
    concepts: {
      partial_integration: {
        title: 'Integration by Parts',
        desc: 'The reverse of the product rule: You decompose the integrand into $u$ (gets differentiated) and $\\mathrm{d}v$ (gets integrated). Goal: The new integral $\\int v\\,\\mathrm{d}u$ should be simpler than the original. Typical application: Products of polynomial and $e$-function or polynomial and trigonometric function.',
      },
      rotation_volume: {
        title: 'Volume of Revolution',
        desc: 'A function graph rotated around the $x$-axis creates a 3D solid. The volume comes from summing infinitely many circular disks with radius $f(x)$ and thickness $\\mathrm{d}x$. Each disk has volume $\\pi \\cdot [f(x)]^2 \\cdot \\mathrm{d}x$ — summed up (integrated) gives the formula.',
      },
      improper_integral: {
        title: 'Improper Integrals',
        desc: 'Integrals with $\\infty$ as a bound or an unbounded integrand. You replace the problematic point with a variable and take the limit. If the limit exists and is finite, the integral converges — otherwise it diverges. Classic: $\\int_1^\\infty \\frac{1}{x^2}\\,\\mathrm{d}x = 1$ converges, but $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$ diverges.',
      },
    },
    examples: {
      level_geometry: {
        title: 'Solid of revolution for level design',
        context: 'Kai wants to generate a column whose profile follows the curve $f(x) = \\sqrt{x}$. Between $x = 0$ and $x = 4$, the curve rotates around the $x$-axis — what is the volume of the column?',
        step1: 'Define the profile — the square root function on the interval $[0;\\,4]$:',
        step2: 'Set up the volume of revolution formula — square $f(x)$ and put $\\pi$ in front:',
        step3: 'Find the antiderivative and substitute the bounds:',
        step4: 'Result — the column has a volume of $8\\pi$ volume units:',
        kai_comment: 'That\'s exactly the formula my procedural generator uses! I define curve profiles, rotate them, and instantly know the volume — important for physics simulations so objects have the correct weight.',
      },
      partial_int: {
        title: 'Integration by parts for lighting',
        context: 'In Kai\'s light calculation shader, the integral $\\int x \\cdot e^x\\,\\mathrm{d}x$ appears — a product that can\'t be integrated directly.',
        step1: 'Choose the decomposition: $u = x$ (gets simpler when differentiated), $v\' = e^x$ (easy to integrate):',
        step2: 'Determine derivatives and antiderivatives:',
        step3: 'Substitute into the formula — the new integral is now just $\\int e^x\\,\\mathrm{d}x$:',
        step4: 'Simplify — factoring gives an elegant form:',
        kai_comment: 'The moment when the new integral is simpler than the old one — that\'s the "aha" moment with integration by parts. If it gets more complicated, you chose $u$ and $v\'$ wrong. Just swap them!',
      },
    },
    realworld: {
      '3d_printing': {
        title: '3D Printing & CAD Volume Calculation',
        desc: 'Every 3D printer needs to know how much material it requires. For rotationally symmetric parts (vases, tubes, nozzles), the slicer software calculates the volume with exactly this rotation formula. In CAD programs like Fusion 360, integral calculus is also used — when you rotate a cross-section, the software computes $\\pi \\int [r(h)]^2\\,\\mathrm{d}h$.',
      },
      render_falloff: {
        title: 'Light Falloff in Game Engines',
        desc: 'How much total light does a scene receive from a point light source? The intensity decreases as $I(r) = I_0 \\cdot e^{-\\alpha r}$. The improper integral $\\int_0^\\infty I_0 \\cdot e^{-\\alpha r}\\,\\mathrm{d}r = \\frac{I_0}{\\alpha}$ shows: The total energy is finite! That\'s why game engines can simulate lights with limited range without being physically wrong.',
      },
      terrain_volume: {
        title: 'Terrain Generation & Earthworks',
        desc: 'In road construction projects and Minecraft-like games, the volume of hilly landscapes must be calculated. The formula $V = \\iint h(x,y)\\,\\mathrm{d}A$ sums the height over the entire area — a two-dimensional integral. Civil engineers use this to calculate excavation volumes, game developers for the data size of terrain meshes.',
      },
    },
    mistakes: {
      rotation_no_square: {
        wrong: 'Forgetting to square: $V = \\pi \\int_a^b f(x)\\,\\mathrm{d}x$',
        correct: 'Correctly squared: $V = \\pi \\int_a^b [f(x)]^2\\,\\mathrm{d}x$',
        why: 'Each circular disk has area $\\pi r^2$ with $r = f(x)$. Without squaring, you\'re not calculating a circle area but something completely different. Mnemonic: "Pi-r-squared" — the square belongs to the circle formula!',
        kai_warning: 'I once made this mistake at a game jam — my column had only a fraction of the correct volume and collapsed in the physics simulation. Since then I write the formula big on my monitor: $V = \\pi \\int [f(x)]^2$!',
      },
      improper_no_limit: {
        wrong: 'Directly substituting $\\infty$ instead of taking a limit',
        correct: 'Correctly formulate the limit and check convergence',
        why: '$\\infty$ is not a number you can substitute! You must always form the limit $\\lim_{b \\to \\infty}$ and check whether it exists. Otherwise you easily miss that an integral diverges — like $\\int_1^\\infty \\frac{1}{x}\\,\\mathrm{d}x$, which despite its decreasing function has no finite value.',
      },
    },
  },

  '12-analytische-geometrie': {
    story: {
      intro: 'The 3D world of "Harbor Lights 3D" is taking shape: Harbor cranes, building facades, water surfaces — everything consists of triangles, and every triangle lies in a plane. "For realistic lighting, I need to calculate the normal vector for every surface," Kai explains. "And for collision detection, I need intersection points of lines with planes." Welcome to analytic geometry of space — the mathematics behind every 3D engine.',
      challenge: 'Kai needs to set up plane equations from three points, calculate normal vectors via the cross product, find line-plane intersections, and determine distances between objects — all in real time for his game engine.',
      outro: 'Kai\'s collision detection system works flawlessly: Projectiles hit walls, characters stand on floors, and the lighting calculates the perfect light incidence for every surface via normal vectors. "The cross product is my most-used tool," says Kai. "Two direction vectors in, normal vector out — and I know how the surface is oriented in space." Amir adds: "And the distance formula checks whether a player is close enough to an object to pick it up."',
    },
    objectives: {
      plane_equations: 'Set up plane equations in parametric, normal, and coordinate form and convert between them',
      line_plane_intersection: 'Calculate intersection points of lines with planes and determine relative positions',
      distances_3d: 'Calculate distances in space: point-to-plane, point-to-line, and line-to-line',
      cross_product: 'Master the cross product and use it for normal vector calculation',
    },
    explanation: {
      intro: 'You can describe planes in three-dimensional space in different ways. The parametric form starts at a support point $\\vec{a}$ and spans the plane with two direction vectors $\\vec{u}$ and $\\vec{v}$. Every point of the plane can be reached by appropriate values of $r$ and $s$:',
      normal_form: 'Often more elegant is the normal form: A vector $\\vec{n}$ perpendicular to the plane (the normal vector) and a point $\\vec{a}$ in the plane suffice to describe the entire plane. From this, the coordinate form can be derived — a single equation with $x_1$, $x_2$, and $x_3$:',
      kai_tip: 'In my 3D engine, I store every surface in coordinate form — three coefficients and a constant, that\'s it. For rendering, I need the normal vector for lighting ($\\vec{n} \\cdot \\vec{l} = \\cos\\theta$ — the dot product with the light vector gives the brightness value). And for physics, I need intersection points and distances. All three forms are useful — each for a different purpose!',
      cross_product: 'The cross product $\\vec{u} \\times \\vec{v}$ yields a vector perpendicular to both input vectors — perfect for calculating the normal vector from two direction vectors. Caution: The order matters (anti-commutative)!',
      distance_point_plane: 'The distance of a point $P$ from a plane $E$ can be elegantly calculated using the Hessian normal form. You substitute the point into the coordinate equation, take the absolute value, and divide by the length of the normal vector:',
    },
    concepts: {
      plane_equation: {
        title: 'Plane Equation in Coordinate Form',
        desc: 'The most compact representation of a plane: $n_1 x_1 + n_2 x_2 + n_3 x_3 = d$. The coefficients $n_1, n_2, n_3$ are the components of the normal vector, $d$ is obtained by substituting a known point of the plane. Every point $(x_1, x_2, x_3)$ satisfying the equation lies in the plane.',
      },
      cross_product: {
        title: 'Cross Product',
        desc: 'The cross product of two vectors $\\vec{u}$ and $\\vec{v}$ yields a new vector $\\vec{n}$ perpendicular to both. Its magnitude $|\\vec{u} \\times \\vec{v}|$ equals the area of the spanned parallelogram. Important: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$ — the order determines the direction!',
      },
      distance_formula: {
        title: 'Point-to-Plane Distance',
        desc: 'The shortest distance from a point $P$ to a plane is the length of the perpendicular from $P$ to the plane. The formula $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$ computes this distance directly from the coordinate form. The absolute value in the numerator is crucial — without it, a negative "distance" could result.',
      },
    },
    examples: {
      game_world_plane: {
        title: 'Plane from three corner points',
        context: 'Kai has a triangle in his game world with vertices $A(1|0|2)$, $B(3|1|0)$, and $C(0|4|1)$. He needs the plane equation for lighting and collision detection.',
        step1: 'Three points given — form two direction vectors from them:',
        step2: 'Calculate direction vectors $\\vec{u} = \\overrightarrow{AB}$ and $\\vec{v} = \\overrightarrow{AC}$:',
        step3: 'Calculate the cross product $\\vec{n} = \\vec{u} \\times \\vec{v}$ in detail — component by component using the formula:',
        step4: 'Set up the coordinate form — normal vector as coefficients, $d$ by substituting $A$: $7 \\cdot 1 + 4 \\cdot 0 + 9 \\cdot 2 = 25$:',
        kai_comment: 'In the engine, exactly this happens for every triangle: three vertices in, cross product calculated, plane stored. The normal vector simultaneously determines which direction the surface "faces" — crucial for lighting and backface culling!',
      },
      collision_detection: {
        title: 'Line-plane intersection (Raycast)',
        context: 'A projectile flies in a straight line through space. Kai needs to check whether and where it hits a wall — that\'s a raycast: line-plane intersection.',
        step1: 'Line (trajectory) and plane (wall) given:',
        step2: 'Substitute the line into the plane equation — the components of $\\vec{x}(t)$ for $x_1, x_2, x_3$:',
        step3: 'Solve for $t$ — combine and simplify:',
        step4: 'Calculate the intersection point — substitute $t = 0$ into the line equation:',
        kai_comment: 'At $t = 0$, the line immediately meets the plane — so the projectile starts right at the wall. In the engine, I additionally check $t > 0$ (forward direction) and $0 \\leq t \\leq t_{\\max}$ (range). This filters out hits behind the player or beyond range.',
      },
    },
    realworld: {
      '3d_rendering': {
        title: '3D Rendering & Lighting',
        desc: 'Every 3D engine calculates lighting via the dot product of normal vector and light direction: $\\vec{n} \\cdot \\vec{l} = \\cos(\\theta)$. The smaller the angle between light and surface normal, the brighter the surface. This is the Lambert lighting model — the foundation for realistic light in games, films, and AR apps.',
      },
      architecture: {
        title: 'Architecture & BIM Software',
        desc: 'In architecture programs like AutoCAD or Revit, roof surfaces, walls, and ramps are modeled as planes. The coordinate form describes their position in space, the normal vector shows their orientation. Structural engineers use plane equations to calculate how forces act on inclined surfaces — from roofs to bridge decks.',
      },
      gps_navigation: {
        title: 'GPS & Drone Navigation',
        desc: 'GPS coordinates are three-dimensional (longitude, latitude, altitude). Drones navigate along straight lines in 3D space and must detect obstacles — modeled as planes. The point-to-plane distance determines whether a drone is getting too close to a building facade. Self-driving cars use the same math for LIDAR analysis.',
      },
    },
    mistakes: {
      cross_product_order: {
        wrong: 'Ignoring the order: $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$',
        correct: 'Anti-commutative: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$',
        why: 'The cross product is NOT commutative — the order determines the direction of the result vector (right-hand rule). Swapping changes the sign. This can cause normal vectors to point in the wrong direction, inverting the entire lighting.',
        kai_warning: 'You spot this bug immediately: Surfaces lit "from the inside" while the outside is dark. Happens when the normal vector points in the wrong direction. Always be consistent with the order — $\\overrightarrow{AB} \\times \\overrightarrow{AC}$, never the other way!',
      },
      distance_abs_forgotten: {
        wrong: 'Forgetting the absolute value in the numerator: $d = \\frac{\\vec{n} \\cdot \\vec{p} - d}{|\\vec{n}|}$',
        correct: 'With absolute value: $d = \\frac{|\\vec{n} \\cdot \\vec{p} - d|}{|\\vec{n}|}$',
        why: 'Distances are always positive! Without the absolute value in the numerator, a negative value can result when the point is on the "other side" of the plane. In an exam, that\'s a point deduction; in a game engine, it leads to objects falling through walls.',
      },
    },
  },

  '12-hypothesentests': {
    story: {
      intro: 'Before the release of "Harbor Lights 3D," the big playtest is here: 200 testers play for a week and Kai has to make tough decisions. Is the balancing fair? Is the crash rate acceptable? "Gut feeling isn\'t enough," says Mia. "You need a statistical test that tells you whether an observed effect is real — or just chance." Welcome to hypothesis testing: the mathematics behind data-driven decisions.',
      challenge: 'Kai needs to decide whether observed differences in the playtest are statistically significant. Is Hero A really weaker than Hero B, or was he just unlucky? Has the new crash rate really increased? For this he needs null hypotheses, significance levels, and handling error types.',
      outro: 'The playtest is evaluated: Kai has statistically proven that Hero A is too weak ($p = 0{,}028 < 0{,}05$), and the crash rate in the new build has significantly increased. "Without hypothesis tests, I might have ignored these problems," he admits. Mia adds: "The beauty is: You now know exactly how confident your decision is — the significance level quantifies your risk of being wrong."',
    },
    objectives: {
      null_hypothesis: 'Correctly formulate null and alternative hypotheses and distinguish between one-sided and two-sided tests',
      significance_level: 'Understand the significance level $\\alpha$ and interpret it as the probability of a Type I error',
      test_decision: 'Determine rejection regions and systematically carry out test decisions',
      error_types: 'Distinguish Type I and Type II errors and understand the trade-off between $\\alpha$ and $\\beta$',
    },
    explanation: {
      intro: 'A hypothesis test is a structured procedure for making a decision based on data. You start with an assumption (null hypothesis $H_0$), collect data, and check whether the data speak against $H_0$. The alternative hypothesis $H_1$ describes what you actually suspect:',
      significance: 'The significance level $\\alpha$ is the maximum probability of wrongly rejecting $H_0$ (Type I error). Typical values are $\\alpha = 0{,}05$ (5\\%) or $\\alpha = 0{,}01$ (1\\%). The smaller $\\alpha$, the stricter the test — but the more likely you are to miss real effects:',
      kai_tip: 'Think of hypothesis tests like an anti-cheat system: $H_0$ means "The player is NOT cheating." $\\alpha = 0{,}05$ means: Only in 5% of cases do I ban an honest player. I want to keep $\\alpha$ small to protect the innocent — but if I make it too small, real cheaters slip through. That\'s the alpha-beta trade-off!',
      rejection_region: 'The rejection region contains all test results that are so extreme that we reject $H_0$. For a left-sided test ($H_1\\colon p < p_0$), the rejection region is on the left — you calculate the largest number $k$ for which $P(X \\leq k) \\leq \\alpha$:',
      error_types: 'Two errors can occur: Type I error ($\\alpha$) — you reject $H_0$ even though it\'s true ("false alarm"). Type II error ($\\beta$) — you keep $H_0$ even though $H_1$ is true ("missed effect"). With a fixed sample size $n$: If you decrease $\\alpha$, $\\beta$ increases — and vice versa:',
    },
    concepts: {
      hypotheses: {
        title: 'Null and Alternative Hypothesis',
        desc: '$H_0$ is the "status quo" assumption that holds until the data speak against it. $H_1$ is what you actually want to show. Left-sided test: $H_1\\colon p < p_0$. Right-sided test: $H_1\\colon p > p_0$. Two-sided test: $H_1\\colon p \\neq p_0$. Important: You never "prove" $H_1$ — you can only reject or retain $H_0$.',
      },
      significance_level: {
        title: 'Significance Level $\\alpha$',
        desc: 'The upper bound for the probability of a Type I error. At $\\alpha = 0{,}05$, you accept a 5% risk of wrongly rejecting $H_0$. Common values: $0{,}10$ (exploratory), $0{,}05$ (standard), $0{,}01$ (strict). $\\alpha$ is set BEFORE the test — never adjusted afterward!',
      },
      error_types: {
        title: 'Type I and Type II Errors',
        desc: 'Type I error ($\\alpha$): $H_0$ is rejected even though it\'s true — a "false alarm." Type II error ($\\beta$): $H_0$ is retained even though $H_1$ is true — a "missed effect." With fixed $n$, $\\alpha$ and $\\beta$ are inversely related: Smaller $\\alpha$ means larger $\\beta$. The solution: Larger sample size $n$.',
      },
    },
    examples: {
      playtest_balance: {
        title: 'Balance test: Is Hero A too weak?',
        context: 'In 100 matches between Hero A and Hero B, Hero A wins only 40 times. Kai suspects Hero A is disadvantaged. With fair balancing, $p = 0{,}5$ should hold.',
        step1: 'Set hypotheses and significance level — left-sided, because Kai suspects A is too weak:',
        step2: 'Experimental setup: $n = 100$ matches, $X$ = number of Hero A wins, binomially distributed:',
        step3: 'Calculate the probability of $X \\leq 40$ under $H_0$ (cumulative binomial distribution):',
        step4: 'Test decision: $p$-value $0{,}028 < \\alpha = 0{,}05$ — $H_0$ is rejected. Hero A is significantly too weak:',
        kai_comment: 'That was the statistical proof I needed for the balance team. 40 out of 100 looks "almost okay," but the test shows: With fair balancing, you\'d see such an extreme result only 2.8% of the time. That\'s enough for a nerf update!',
      },
      crash_rate: {
        title: 'Checking crash rate after update',
        context: 'After a patch, the crash rate should be at most 2%. In 200 test sessions, the game crashes 8 times. Is that too many?',
        step1: 'Formulate hypotheses — right-sided, because Kai wants to check if the rate is ABOVE 2%:',
        step2: 'Data: $n = 200$ sessions, $X = 8$ crashes (observed: $\\hat{p} = 4\\%$):',
        step3: 'Calculate the probability of $X \\geq 8$ under $H_0$ — this is the $p$-value:',
        step4: 'Test decision: $p$-value $0{,}042 < \\alpha = 0{,}05$ — the crash rate has significantly increased:',
        kai_comment: 'Without the test, I might have said "8 crashes in 200 sessions, that\'s fine." But the hypothesis test shows: The probability of seeing this many crashes at a true 2% rate is below 5%. The patch needs reworking.',
      },
    },
    realworld: {
      ab_testing: {
        title: 'A/B Testing for Apps & Websites',
        desc: 'Every time Netflix changes its "Play Now" button or Spotify tests a new playlist view, a hypothesis test runs. Version A vs. Version B: Which gets more clicks? The $p$-value decides whether the difference is real or just random fluctuation. TikTok, YouTube, and Instagram also use A/B tests — every feature you see has passed a significance test.',
      },
      quality_assurance: {
        title: 'Quality Control in Manufacturing',
        desc: 'Factories constantly test: Is the reject rate below the threshold? Does the weight of the chip bag match the printed value? Hypothesis tests protect consumers — and companies from expensive recalls. Behind every sample inspection is the same mathematics you\'re learning here.',
      },
      clinical_trials: {
        title: 'Clinical Trials & Medications',
        desc: 'Before a medication is approved, it must pass a hypothesis test: $H_0$ says "The medication works no better than a placebo." Only if the $p$-value falls below $\\alpha = 0{,}05$ is the efficacy considered proven. The strict rules ($\\alpha = 0{,}05$, $\\beta \\leq 0{,}20$) protect patients from ineffective medications — but also from premature rejection of effective therapies.',
      },
    },
    mistakes: {
      accept_h0: {
        wrong: '$H_0$ "proven": $p > \\alpha$ means $H_0$ is true',
        correct: 'Correctly stated: $p > \\alpha$ means $H_0$ cannot be rejected',
        why: 'A hypothesis test can never prove $H_0$ — only reject or retain it. "Not rejected" means: The data are insufficient to refute $H_0$. Perhaps the effect is too small, perhaps the sample is too small. That\'s why we say "retained" or "not rejected," never "accepted" or "proven."',
        kai_warning: 'It\'s like the presumption of innocence in court: "Not guilty" doesn\'t mean "innocent" — it just means the evidence isn\'t sufficient. Same with $H_0$: If I can\'t prove Hero A is weaker, that doesn\'t automatically mean he\'s perfectly balanced!',
      },
      alpha_beta_confused: {
        wrong: 'Assumption: Smaller $\\alpha$ automatically improves everything',
        correct: 'Reality: Smaller $\\alpha$ leads to larger $\\beta$ with fixed $n$',
        why: 'If you make the test stricter (smaller $\\alpha$), you need more extreme data to reject $H_0$. This increases the probability of missing a real effect ($\\beta$ increases). The only way out: Larger sample size $n$ — that lets you keep both $\\alpha$ and $\\beta$ small.',
      },
    },
  },
};
