// Uebersetzung (en) von portal-batch1.js — Quelle: scripts/extract-portal-strings.mjs
export const portalBatch1 = {
  "topics": {
    "10-quad-funktionen": {
      "title": "Quadratic Functions"
    },
    "10-quad-gleichungen": {
      "title": "Quadratic Equations"
    },
    "10-trigonometrie": {
      "title": "Trigonometry"
    },
    "10-exp-wachstum": {
      "title": "Exponential Growth"
    },
    "10-wahrscheinlichkeit": {
      "title": "Probability"
    },
    "10-pythagoras": {
      "title": "Pythagorean Theorem"
    },
    "10-koerper": {
      "title": "Solids: Pyramid, Cone, Sphere"
    },
    "10-potenzgesetze": {
      "title": "Laws of Exponents"
    },
    "10-aehnlichkeit": {
      "title": "Similarity & Intercept Theorems"
    },
    "10-periodisch": {
      "title": "Periodic Processes"
    },
    "10-diff-einfuehrung": {
      "title": "Introduction to Differential Calculus"
    },
    "10-stetigkeit": {
      "title": "Continuity"
    },
    "10-funktionsklassen": {
      "title": "Types of Functions (Overview)"
    },
    "10-lineare-funktionen": {
      "title": "Linear Functions"
    },
    "10-kreis": {
      "title": "Circle (Circumference, Area, Radians)"
    },
    "11-ableitungsregeln": {
      "title": "Differentiation Rules"
    },
    "11-kurvendiskussion": {
      "title": "Curve Analysis"
    },
    "11-extremwertaufgaben": {
      "title": "Optimization Problems"
    },
    "11-integralrechnung": {
      "title": "Integral Calculus (Introduction)"
    },
    "11-exp-log": {
      "title": "Exponential & Logarithmic Functions"
    },
    "11-binomialverteilung": {
      "title": "Binomial Distribution"
    },
    "11-bedingte-wahrscheinlichkeit": {
      "title": "Conditional Probability"
    },
    "11-vektorrechnung": {
      "title": "Vectors (Introduction)"
    },
    "11-rationale-funktionen": {
      "title": "Rational Functions (Asymptotes, Poles)"
    },
    "11-lgs-gauss": {
      "title": "Systems of Linear Equations & Gaussian Elimination"
    },
    "12-e-funktion-ln": {
      "title": "e-Function & ln (Advanced)"
    },
    "12-integralrechnung-vertieft": {
      "title": "Integral Calculus (Advanced)"
    },
    "12-analytische-geometrie": {
      "title": "Analytic Geometry"
    },
    "12-hypothesentests": {
      "title": "Hypothesis Testing"
    },
    "12-normalverteilung": {
      "title": "Normal Distribution"
    },
    "12-matrizen": {
      "title": "Matrices & Transition Processes"
    },
    "12-logistisches-wachstum": {
      "title": "Bounded & Logistic Growth"
    },
    "12-abiturvorbereitung": {
      "title": "Final Exam Preparation"
    }
  },
  "topicView": {
    "back": "← Back",
    "backAria": "Back to topic overview"
  },
  "relations": {
    "baut-auf": "builds on",
    "fuehrt-zu": "leads to",
    "verwandt": "related to",
    "anwendung": "applied in"
  },
  "connectionsSection": {
    "title": "Bridges to other topics",
    "subtitle": "Where the same idea shows up again"
  },
  "bridges": {
    "10-quad-funktionen": {
      "0": "Every question about where a graph crosses the x-axis is a quadratic equation in disguise. $f(x) = 0$ isn't a new problem, it's the same one seen from the other side.",
      "1": "With a straight line, the slope was the same everywhere. With a parabola, it isn't anymore — and that's exactly why it becomes your way into calculus. The derivative $f'(x) = 2x$ tells you: left of the vertex the graph goes down, right of it the graph goes up, and at the vertex the slope is zero.",
      "2": "Highest point of a throw, largest area, lowest cost: if there's a parabola behind it, the answer is the vertex. You're already optimizing here, it just isn't called that yet.",
      "3": "Shift, stretch, reflect: what you understand about $f(x) = a(x-d)^2 + e$ you'll later carry over to sine, exponential and square root functions. Vertex form is the blueprint for every type of function that comes after."
    },
    "10-quad-gleichungen": {
      "0": "Solving $x^2 - 5x + 6 = 0$ and finding the zeros of $f(x) = x^2 - 5x + 6$ are the same question in two languages. The pq formula gives you the points where the parabola crosses the x-axis. If the discriminant is negative, the equation has no solution — and the parabola has no crossing point. The same “no”, said twice.",
      "1": "In curve analysis you set $f(x) = 0$ and $f'(x) = 0$. For a cubic function, $f'$ is quadratic — so you end up right back here. The pq formula isn't just a grade 10 topic, it's a tool you'll use all the way to your final exams.",
      "2": "Solving $a^2 + b^2 = c^2$ for $a$ means solving $a^2 = c^2 - b^2$ — a quadratic equation without a linear term. That's why there's a square root, and that's why you throw away the negative solution: a side length is never negative. Algebraically there are two solutions, geometrically only one.",
      "3": "For the largest rectangle along a fixed fence, the objective function is quadratic. You can take the derivative — or find the vertex and you're done. Both paths lead to $x = -\\frac{p}{2}$. The derivative is more powerful, completing the square is faster."
    },
    "10-trigonometrie": {
      "0": "Sine, cosine, tangent — they're nothing more than ratios of sides. And because similar triangles have the same ratios, the value depends only on the angle. The intercept theorem and trig are the same idea in two different outfits.",
      "1": "If a point on the unit circle sits at (cos α | sin α), its distance from the origin is 1. Pythagoras: cos²(α) + sin²(α) = 1². The most important identity in trigonometry is just Pythagoras in a new costume.",
      "2": "Every oscillation — tides, heartbeat, alternating current — is described with sine and cosine. That's the direct application of what you're learning here.",
      "3": "In grade 11 you'll see how the angle between two vectors is expressed using cos(α). Embeddings in AI work exactly the same way — trig reaches far beyond the triangle."
    },
    "10-exp-wachstum": {
      "0": "Everything you learn here is true — for a while. No pond fills up forever, no video gets watched by more people than exist. In grade 12 the model gets a capacity limit $K$ and turns into an S-curve. The nice part: at the start, the two curves are hard to tell apart. Your exponential function is how the logistic curve starts out — it was never wrong, just only valid for a while.",
      "1": "$1{,}05^3$ is not $3 \\cdot 1{,}05$. Skip the laws of exponents and you'll reliably get this wrong — the most common mistake is simply adding up the percentage each year.",
      "2": "As long as you ask “how much after 5 years?”, plugging in is enough. As soon as you ask “after how many years is it twice as much?”, the $x$ sits in the exponent: $1{,}05^x = 2$. For that you need a tool that brings it down. That tool is the logarithm.",
      "3": "Interest paid yearly, monthly, daily, hourly: the values go up, but not to infinity. They approach $e \\approx 2{,}718$. Euler's number isn't an invention, it's the limit of your own calculation.",
      "4": "The whole difference is in one word: plus or times. Linear growth adds the same number at each step, exponential growth multiplies by the same factor. In the long run, times always wins, no matter how small the factor."
    },
    "10-wahrscheinlichkeit": {
      "0": "Here you calculated probabilities without new information getting in the way. In grade 11, that's what it's all about: if I know that A has happened — how does $P(B)$ change? Bayes is the math of learning something new along the way.",
      "1": "If you flip the same coin 100 times and ask “How likely is exactly 60 heads?” — you don't need to draw 100 paths. The binomial formula does it in one line. But the idea is the same as here with the tree.",
      "2": "Dice and coins are discrete — a limited number of outcomes, clear fractions. In grade 12 you'll meet continuous distributions, above all the bell curve. The bars turn into a smooth area, $\\sum$ turns into $\\int$."
    },
    "10-pythagoras": {
      "0": "When you meet sine and cosine in a moment, take another look at $\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$. That's nothing more than $a^2 + b^2 = c^2$ — except the hypotenuse is 1 and the point lies on a circle. Pythagoras in disguise.",
      "1": "With vectors you'll write $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$ — and won't even notice you're treating three-dimensional Pythagoras as obvious. If you understand the theorem here, you understand it in 4, 5 or 1000 dimensions too.",
      "2": "As soon as you cut a pyramid open, another right triangle is waiting for you: $h^2 + (a/2)^2 = s^2$. Pythagoras is the tool that makes 3D solids measurable.",
      "3": "The triple (3, 4, 5) keeps its right angle when you multiply it by 2, 7 or $\\pi$ — giving (6, 8, 10), (21, 28, 35) and so on. Similarity passes the right angle on. A small but deep symmetry of geometry."
    },
    "10-koerper": {
      "0": "As soon as you cut a pyramid open, a right triangle appears: height, half the base edge, slant height. The formula $s^2 = h^2 + (a/2)^2$ is nothing more than $a^2 + b^2 = c^2$ — Pythagoras is just as reliable in space as in the plane.",
      "1": "If you fill a cone-shaped glass with water up to half its height, the height is half as big — but the water volume is only one eighth ($k^3 = 0{,}5^3 = 0{,}125$). In 3D, similarity works three times over: lengths $\\cdot k$, areas $\\cdot k^2$, volume $\\cdot k^3$.",
      "2": "Look at $V_{\\text{cone}} = \\frac{1}{3} \\pi r^2 h$ — the base is nothing more than the circle from the last topic, times height, times $\\frac{1}{3}$. In many cases, 3D solids are 2D shapes with a third dimension.",
      "3": "The formula $V = \\frac{1}{3} \\pi r^2 h$ — where does the factor $\\frac{1}{3}$ actually come from? In grade 11 you'll derive it with integrals: a cone is a stack of smaller and smaller circular discs. Volume becomes the sum of infinitely many slices."
    },
    "10-potenzgesetze": {
      "0": "Remember $a^{m+n} = a^m \\cdot a^n$ well. When something soon “grows by 5 % per year”, this exact law is behind it: two years in a row is not $2 \\cdot 1{,}05$, but $1{,}05^2$. Add here, and you'll get the rest of upper school math wrong.",
      "1": "You're learning three rules here that you'll meet again in grade 11 — just mirrored. $a^m \\cdot a^n = a^{m+n}$ becomes $\\log(x \\cdot y) = \\log x + \\log y$. The logarithm turns times into plus, because the power turned plus into times. One rule, seen from two directions.",
      "2": "The derivative rule $\\frac{d}{dx} x^n = n \\cdot x^{n-1}$ looks harmless until $\\sqrt{x}$ or $\\frac{1}{x^2}$ shows up. Then the only thing that saves you is knowing you can write $\\sqrt{x} = x^{1/2}$ and $\\frac{1}{x^2} = x^{-2}$. That's exactly what you're practicing here.",
      "3": "A cube with twice the edge length doesn't have twice the volume, but eight times: $2^3 = 8$. Areas grow with $k^2$, volume with $k^3$. That's not a quirk of geometry, that's the laws of exponents at life size."
    },
    "10-aehnlichkeit": {
      "0": "Why is $\\sin(30°)$ always $0{,}5$ — no matter how big the triangle is? Precisely because of similarity. All right triangles with the same angle are similar, so they have the same side ratios. Trigonometry is the intercept theorem with different vocabulary.",
      "1": "If you double all measurements of a pyramid, its volume becomes eight times as big ($2^3 = 8$). This cubic scaling is why small animals are relatively stronger than large ones — geometry is everywhere.",
      "2": "(3, 4, 5) scales with $k=2$ to (6, 8, 10), with $k=7$ to (21, 28, 35) — and all of them keep their right angle. Similarity passes the right angle on, because the relationship $a^2 + b^2 = c^2$ doesn't change when you stretch."
    },
    "10-periodisch": {
      "0": "In the right triangle, $\\sin(\\alpha)$ was a ratio of two sides. On the unit circle it becomes a height that changes with the angle — and when the angle keeps going, it repeats. That's exactly where the wave is born.",
      "1": "Only in radians does the period become $2\\pi$ instead of $360°$, and only then can you take derivatives later. The circumference $2\\pi r$ is the reason a full turn is called exactly $2\\pi$.",
      "2": "$\\frac{d}{dx}\\sin(x) = \\cos(x)$ looks like a rule to memorize. But you can actually see it: where the sine curve climbs most steeply, cosine reaches its maximum. Four derivatives later, you're back at sine.",
      "3": "$f(x) = a \\cdot \\sin(b(x-d)) + e$ — compare this with vertex form. $a$ stretches, $d$ shifts horizontally, $e$ vertically. The only new one is $b$, and it squeezes the period. You're not learning new grammar here, just one new word."
    },
    "10-diff-einfuehrung": {
      "0": "Here you built the limit to get a slope. The same tool answers another, more basic question: does the function approach exactly the value it takes at a point? If yes, it's called continuous there. And there's a one-way street worth remembering: where you can draw a tangent, there can't be a jump — but not every place without a jump has a tangent. $f(x) = |x|$ is the proof.",
      "1": "What you work out the hard way here with the h-limit takes one line in grade 11: $f(x) = x^2 \\Rightarrow f'(x) = 2x$. The rule doesn't come out of nowhere — it's exactly the limit calculation you're practicing now, done once and for all.",
      "2": "You use $f(x) = x^2$ as a practice function — and not by accident. Parabolas are the simplest curves where the slope changes. A straight line would have the same slope everywhere — nothing to discover there.",
      "3": "What's the point of calculating the tangent slope? In grade 11 you'll see: exactly where $f'(x) = 0$ — where the tangent is horizontal — you find the maxima and minima. The limit becomes a tool for optimization.",
      "4": "Here you break a motion down into instantaneous speeds. In grade 11 you'll do the reverse: build up the distance traveled from the speed. Differentiation and integration are two directions of the same idea."
    },
    "10-stetigkeit": {
      "0": "You met the limit to get the tangent slope. Now you use the same tool for a different question: does the limit match the function value? $\\lim_{x \\to x_0} f(x) = f(x_0)$ — that's all continuity is. And the one-way street applies: differentiable $\\Rightarrow$ continuous, but not the other way round. $f(x) = |x|$ is continuous at $0$ and still has no tangent there.",
      "1": "Here you tell a hole from a pole for the first time. In grade 11 this exact difference gets a name and a rule: if the factor in the denominator cancels out, it's a removable discontinuity; if it stays, it's a pole with an asymptote. The exam question “Show that the discontinuity is removable” then takes you two lines.",
      "2": "When you integrate later, every theorem contains the same phrase: “let $f$ be continuous on $[a;b]$”. That's not just a formality. At a jump, the link between area and antiderivative breaks down. Continuity is your ticket into integral calculus.",
      "3": "Good news first: polynomial functions, $\\sin$, $\\cos$ and $e^x$ are continuous on all of $\\mathbb{R}$. So you don't have to search everywhere. Only two kinds are suspicious: fractions at the zeros of the denominator, and piecewise functions at the points where the pieces meet."
    },
    "10-funktionsklassen": {
      "0": "The straight line is the simplest case and therefore the yardstick for all the others: constant change per step. Quadratic means the change itself changes; exponential means it changes by a percentage. If you can read $m$ and $b$ confidently, you'll recognize the other types by how they differ from the line.",
      "1": "You've already seen parabolas — here you see where they stand in the family portrait of all functions. Linear, quadratic, exponential, logarithmic — four relatives with very different personalities.",
      "2": "Exponential growth overtakes every polynomial function — in the long run. Compare for yourself: at x = 10, 2ˣ = 1024, but x² is only 100.",
      "3": "In grade 11 you'll see: every type of function has its own derivative rule. Linear → constant, quadratic → linear, exponential → stays exponential. The shape is preserved."
    },
    "10-lineare-funktionen": {
      "0": "Linear functions are the simplest family of functions. With just one extra x² term you'll soon be drawing parabolas — the logic stays the same: understand the term, interpret the graph.",
      "1": "The slope m of a straight line is the same everywhere. For curved functions the slope changes — and that's exactly what the derivative measures. Linear functions are the special case where f′(x) = m is constant.",
      "2": "In grade 11 you'll write lines as g: x⃗ = a⃗ + t·u⃗. The direction vector u⃗ is the slope generalized to space — same basic idea, new language."
    },
    "10-kreis": {
      "0": "Radians are the natural language of trig — sin and cos like working in radians best. 360° is a convention; 2π is a measure given by nature.",
      "1": "Volume of a sphere = $\\tfrac{4}{3}\\pi r^3$, volume of a cone = $\\tfrac{1}{3}\\pi r^2 h$. The circle is hidden in both — as a cross-section or as the base.",
      "2": "When the sine function repeats every 2π, the full circle is hidden inside. One turn around the unit circle = one complete period of the wave."
    },
    "11-ableitungsregeln": {
      "0": "In grade 10 you let the difference quotient run towards zero — step by step. That was the honest way. Now you get the shortcut: $f(x) = x^n \\Rightarrow f'(x) = n \\cdot x^{n-1}$. But under the hood, the same limit is still running.",
      "1": "What you're learning here as a set of rules, you'll need right away: $f'(x) = 0$ reveals extreme points, $f''(x) = 0$ reveals inflection points. No rules, no curve analysis — and no curve analysis, no final exam.",
      "2": "The chain rule and the quotient rule become bread-and-butter tools in optimization problems — every optimization starts with the derivative of the objective function. If you're confident with the rules, you can focus on the modeling.",
      "3": "With the derivative rules you come across something amazing: $\\left(e^x\\right)' = e^x$. That's no minor detail — it's exactly what makes $e$ the natural base and why the e-function shows up everywhere in grade 12."
    },
    "11-kurvendiskussion": {
      "0": "This is where every evening you spent practicing derivative rules pays off. f', f'', sometimes f''' — the rules are the tools, the curve analysis is the workshop. If the rules still feel shaky, go back once more.",
      "1": "What's abstract here — finding an extreme point — soon gets practical: best can size, maximum profit, shortest route. The method stays the same: set $f'(x) = 0$, check with $f''$.",
      "2": "So far you had polynomials — they have neither poles nor horizontal asymptotes. With rational functions, these features come in. The method of curve analysis stays, it just gets two new chapters.",
      "3": "Every final exam contains a complete curve analysis — usually with an e-function or a polynomial. Once you've really learned the routine “zeros, extrema, inflection points, symmetry, sketch”, 30-40% of the calculus points are in the bag."
    },
    "11-extremwertaufgaben": {
      "0": "Mathematically, nothing new happens here: $f'(x) = 0$ and check with $f''$. What's different is the way there: first you have to build a function out of a real-life situation. Modeling is the real art.",
      "1": "If your objective function turns out to be a parabola, you don't need a derivative at all — you already know the vertex from grade 10. Quadratic optimization is finding the extreme value “with the naked eye”.",
      "2": "In grade 12 you'll look for extrema of e-functions — when is the drug concentration highest, when is energy use lowest. The method stays, only the type of function gets richer."
    },
    "11-integralrechnung": {
      "0": "Every derivative rule you know is an antiderivative rule backwards. $\\frac{d}{dx}x^3 = 3x^2$ becomes $\\int 3x^2\\,dx = x^3 + C$. The $+C$ is the price for the derivative swallowing the added constant.",
      "1": "In grade 10 it was about the slope at a point, here it's about the area under a curve. That these are the same topic is the most surprising statement in calculus: $\\int_a^b f'(x)\\,dx = f(b) - f(a)$.",
      "2": "What you practice here with power functions becomes a tool for products and nested functions in grade 12. The idea stays the same, the functions just fight back harder.",
      "3": "$V = \\pi \\int_a^b [f(x)]^2\\,dx$ — rotate a curve around the x-axis and you get a solid whose volume is an integral. The cone formula $V = \\frac{1}{3}\\pi r^2 h$, which you simply accepted in grade 10, now comes out of your own calculation instead of falling from the sky."
    },
    "11-exp-log": {
      "0": "You don't need to memorize $\\log_a(x \\cdot y) = \\log_a x + \\log_a y$ if you know $a^{m+n} = a^m \\cdot a^n$. The logarithm is the inverse function, so it turns every rule around: times becomes plus, power becomes times.",
      "1": "In grade 10 you could work out how much there is after $n$ steps. The reverse question “after how many steps is it twice as much?” stayed open. The logarithm is exactly the answer to that.",
      "2": "$\\ln x = \\log_e x$. No new concept, just a particularly handy base — handy because $e^x$ is the only function that is its own derivative. All the rules you learn here still apply there unchanged.",
      "3": "$a^x = e^{x \\ln a}$ looks like playing around, but it's the trick that makes $\\frac{d}{dx} a^x = a^x \\ln a$ possible in the first place. Without changing the base, every base would be its own special case."
    },
    "11-binomialverteilung": {
      "0": "Remember the path rule? It's hidden right inside $\\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$: $p^k$ is the probability of one path with k successes, and $\\binom{n}{k}$ counts how many such paths there are.",
      "1": "Imagine moving the n slider: at n=10 you still see individual bars, at n=100 they turn into a bell curve. That's the central limit theorem — maybe the most beautiful result in all of probability. In grade 12 you'll see it formally.",
      "2": "If you want to know whether a die is loaded or an ad campaign works, you need exactly this distribution. You ask: “Would the observed result still be plausible with p = 0.5?” Hypothesis tests are the binomial distribution put to work."
    },
    "11-bedingte-wahrscheinlichkeit": {
      "0": "You've seen the tree before. What's new: the same tree can be read in two directions. $P(B \\mid A)$ reads downwards, $P(A \\mid B)$ reads upwards. Bayes is the art of turning the tree upside down.",
      "1": "When you see a transition matrix in grade 12, look into every cell: there's a $P(\\text{new} \\mid \\text{old})$ in it — exactly what you're learning here. Markov is conditional probability in motion.",
      "2": "The idea of independence that you learn precisely here — $P(A \\cap B) = P(A) \\cdot P(B)$ — is exactly the condition under which the binomial formula works at all. If the draws depend on each other in any way, the model breaks."
    },
    "11-vektorrechnung": {
      "0": "Take another look at $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — that's the Pythagorean theorem, once for the floor diagonal and then again for the space diagonal, packed into a single square root. You can keep this going as far as you like.",
      "1": "The cosine you met in the triangle comes back here: $\\cos(\\alpha) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}|\\,|\\vec{b}|}$. That's how you measure angles between vectors — and exactly how an AI measures how similar two words are.",
      "2": "Vectors are points and directions. In grade 12 you'll get to know matrices — the tools that move, rotate and stretch these points. A vector becomes $M \\cdot \\vec{v}$, and suddenly the whole game world rotates.",
      "3": "A single vector is just an arrow. Two vectors span a plane, three span a space. In grade 12 you'll use them to build equations of lines, equations of planes and intersection points — all of analytic geometry is vectors put to work."
    },
    "11-rationale-funktionen": {
      "0": "You already know the question “hole or pole?” from grade 10. The only new thing is that you decide it from the term instead of the graph: if the critical factor cancels out of the denominator, the hole is removable and you can fill in the missing point. If it stays, it's a pole with a vertical asymptote — and there's nothing to rescue.",
      "1": "In curve analysis you looked at extrema, inflection points and symmetry. With rational functions, poles and asymptotes come in — suddenly the graph has edges where it shoots off to infinity.",
      "2": "The simplest rational function, 1/x, integrates to ln(|x|). That's the bridge between algebra (rational functions) and calculus (logarithms).",
      "3": "A typical final exam question is: “Show that the discontinuity is removable and give the continuous extension.” If you're prepared here, that's an easy win in the exam."
    },
    "11-lgs-gauss": {
      "0": "When you write a system of linear equations in matrix form, you've already made the jump to working with matrices. In grade 12 you'll build Markov chains and eigenvectors on the same foundation.",
      "1": "When two lines in 3D space are supposed to intersect, you get a system of 3 equations with the parameters as unknowns. Systems of linear equations are the tool.",
      "2": "In 3D, the linear system becomes the standard tool: line meets plane, plane meets plane, mirror point — there's always a 3×3 system behind it. Master Gaussian elimination, and 80 % of analytic geometry is already solved."
    },
    "12-e-funktion-ln": {
      "0": "Here you have the tool, over there is the construction site. Both growth models are made of nothing but $e^{-kt}$ — and if you want to know when an S-curve has its inflection point, you solve a logarithmic equation: $a\\,e^{-rt} = 1 \\Rightarrow t_W = \\frac{\\ln(a)}{r}$. Without $\\ln$ you can't get to that number.",
      "1": "Everything you know about $a^x$ and $\\log_a$ still holds here. The only special thing about $e$ is: $\\frac{d}{dx}e^x = e^x$. The function that is its own derivative — that's why calculus picks this base and no other.",
      "2": "The rule $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}$ fails for $n = -1$, because you can't divide by zero. That's exactly where $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$ steps in. The absolute value bars aren't decoration: $\\ln$ only exists for positive numbers, but the antiderivative should also work to the left of zero.",
      "3": "$\\varphi(x) = \\frac{1}{\\sqrt{2\\pi}}e^{-x^2/2}$. The minus makes it drop off on both sides, the square makes it symmetric. If you understand $e^x$, you can see the bell curve's shape straight from the formula.",
      "4": "$\\frac{d}{dx}e^{kx} = k \\cdot e^{kx}$ is the chain rule at its friendliest: the outer derivative changes nothing, the inner one falls out as a factor. That's why $k$ in growth models is directly the growth rate."
    },
    "12-integralrechnung-vertieft": {
      "0": "The fundamental theorem is still the ground everything stands on. The only new things are the tools you use to reshape a function until a familiar antiderivative shows up.",
      "1": "$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$ is the exception the power rule leaves open. And $\\int e^x\\,dx = e^x + C$ is the most convenient antiderivative there is.",
      "2": "$P(a \\leq X \\leq b) = \\int_a^b \\varphi(x)\\,dx$. That's why $P(X = a) = 0$ for continuous random variables: an area with no width is zero. That's not a calculation trick, that's the definition.",
      "3": "$\\bar{f} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$ is the average over an interval. In optimization problems you looked for the single best point; here the integral sums up the whole interval."
    },
    "12-analytische-geometrie": {
      "0": "$\\vec{x} = \\vec{p} + t\\vec{u}$ isn't a new idea, just a position vector plus a direction vector that you stretch as much as you like. Everything you know about adding and multiplying vectors turns into geometry here.",
      "1": "Whether two lines intersect is the question of whether a linear system has a solution. No solution means parallel or skew, exactly one means an intersection point, infinitely many mean identical. Geometry questions, answered by Gauss.",
      "2": "$|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$. Every distance calculation in space, every length, every normalization goes back to $a^2 + b^2 = c^2$. The theorem from grade 10 carries you all the way to the final exam.",
      "3": "What you learn here about planes and normal vectors, a matrix describes as a mapping. The same geometry, written in a way a computer understands."
    },
    "12-hypothesentests": {
      "0": "You keep calculating $P(X \\leq k)$ as usual. The only new thing is that you set a limit beforehand and make a decision afterwards. The calculation is old, the question is new.",
      "1": "From $\\sigma > 3$ on, the bell curve is close enough to the binomial distribution to replace it. That's not laziness, it's the reason tests with a thousand respondents can be calculated at all.",
      "2": "$\\alpha = P(\\text{reject} \\mid H_0 \\text{ true})$: the type I error is a conditional probability, not an absolute one. Miss the vertical bar, and you mix up “5 % of tests are wrong” with “5 % of claims are false”. That's the most common thinking mistake in all of probability.",
      "3": "$P(X > k) = 1 - P(X \\leq k)$ is the calculation you'll need all the time here. The complementary event from grade 10 isn't a beginner's trick, it's the shortcut without which you couldn't find any rejection region."
    },
    "12-normalverteilung": {
      "0": "Picture the bar chart of the binomial distribution — at n=20 you still see steps, at n=200 you don't. The bell curve here is the limiting case. $\\mu = np$ and $\\sigma = \\sqrt{np(1-p)}$ — the old formulas still apply, just without bars.",
      "1": "For large samples, $P(X \\leq k)$ would be a pain to calculate with the binomial distribution. With the normal distribution it becomes a z-transformation and a look at the Φ table. That's what makes hypothesis tests usable in practice.",
      "2": "Look closely at the density: $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\cdot e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}$. The e-function creates the soft drop-off in both directions. No e, no bell."
    },
    "12-matrizen": {
      "0": "Take another look at $M \\cdot \\vec{v}$: each row of M gets a dot product with $\\vec{v}$ — you already did that in grade 11. A matrix is nothing more than a bundle of vectors let loose on another vector all at once.",
      "1": "Every entry $t_{ij}$ in a transition matrix is a conditional probability: $P(\\text{new state} = i \\mid \\text{current state} = j)$. Markov chains turn Bayes knowledge into motion — TikTok's recommendations, Google's PageRank, all Markov.",
      "2": "The rotation matrix $R(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$ is trigonometry in action. What you got to know on the unit circle as the point $(\\cos\\alpha \\mid \\sin\\alpha)$ rotates whole images here.",
      "3": "In the final exam, a transition matrix often shows up with a question about the fixed vector. If you can confidently solve $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ here, you're already halfway there."
    },
    "12-logistisches-wachstum": {
      "0": "In grade 10 you learned that bacteria grow exponentially. That's true — for a while. As long as $N$ is small compared to $K$, the braking factor $\\left(1 - \\tfrac{N}{K}\\right)$ is almost $1$, and the logistic curve is hard to tell apart from the exponential one. The exponential model was never wrong, it was just the tangent at the start.",
      "1": "Nothing works here without $e$ and $\\ln$. The capacity limit sits in the denominator as $e^{-rt}$, and if you want to know when the curve has its inflection point, you have to solve $a\\,e^{-rt} = 1$ for $t$ — that's a logarithmic equation: $t_W = \\frac{\\ln(a)}{r}$.",
      "2": "This is where curve analysis pays off. The inflection point isn't just a spot with $N'' = 0$ — it's the moment when the growth was fastest and after which it slows down again. In an epidemic, that's the day new infections peak. The number of infected people keeps rising after that, just more slowly.",
      "3": "Where does this strange formula with the fraction even come from? It doesn't fall from the sky: you solve the differential equation $N' = rN\\left(1 - \\tfrac{N}{K}\\right)$ by separating the variables and integrating both sides. For the final exam you need to know and apply the result — but it's good to know there's an integration underneath."
    },
    "12-abiturvorbereitung": {
      "0": "If you take just one thing from grade 11: the curve analysis routine. Zeros, extrema, inflection points, symmetry, sketch — in every final exam, that's 30-40% of the calculus points at stake.",
      "1": "Derivatives with the product rule of $f(x) = (ax+b) \\cdot e^{cx}$ — this comes up almost every year. If you're confident here, you save yourself stress on the big day.",
      "2": "Substitution, integration by parts, area between two curves — those are the typical tasks. Plus the modeling: what does the integral stand for in the real-life context? That question separates 12 points from 15 points.",
      "3": "If you see a Markov chain in the algebra part, go straight for the fixed vector — that's usually where the points pile up. $T \\cdot \\vec{v}_{\\text{fix}} = \\vec{v}_{\\text{fix}}$ is the key equation.",
      "4": "Left-tailed, right-tailed, two-tailed — a clear routine that reliably earns points in the final exam. Watch out for the α error and for switching to the normal distribution when n is large."
    }
  }
};
