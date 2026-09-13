export const batch5 = {
  '10-stetigkeit': {
    story: {
      intro: 'Mia is building a car park mini-game for "Harbor Lights": Lumi parks the delivery van and has to pay when picking it up. Mia programs the fee — €2.00 for up to one hour, €3.50 after that. While testing, Tim notices something: "If you come back one second too late, it suddenly costs €1.50 more. Is that a bug?" Mia looks at the graph. It isn\'t broken — it jumps. And exactly this jumping has a name.',
      challenge: 'When does a function have a real jump, when is it just a single missing hole, and when does it shoot off to infinity? Mia has to tell the three cases apart reliably in order to decide which fees she is even allowed to build this way.',
      outro: 'Mia can now check at any suspicious point whether a function is continuous: limit from the left, limit from the right, function value — if all three match, everything is fine. And she knows which gaps she can repair and which she can\'t. The car park fee, by the way, stays discontinuous. That is not a bug, that is a business decision.',
    },
    objectives: {
      anschaulich: 'Recognize continuity intuitively — and know why "drawing without lifting the pen" is not enough as a definition',
      definition: 'Check continuity at a point using the limit: $\\lim_{x \\to x_0} f(x) = f(x_0)$',
      arten: 'Reliably distinguish between a removable gap, a jump discontinuity and a pole',
      zwischenwertsatz: 'Use the intermediate value theorem to prove that a root exists',
    },
    explanation: {
      intro: 'Intuitively, continuous means: you can draw the graph without lifting your pen. That is a good first idea — but it is not a definition you can calculate with. What about a function that is missing exactly one single point? You practically don\'t lift the pen, and yet the function is not continuous there. For a solid definition you need the limit from differential calculus.',
      definition: 'A function $f$ is called continuous at the point $x_0$ if the function value and the limit at this point do not contradict each other:',
      drei_bedingungen: 'This one line contains three requirements. All three must be met — in every counterexample exactly one of them fails:',
      mia_tip: 'I always check it in this order: First, is the point in the domain at all? If not, it can\'t be continuous there anyway. Second, do I approach the same value from the left and from the right? Third, is that value the one the function actually takes there? Three ticks, done.',
      einseitig: 'With piecewise defined functions you have to look at the seam from both sides separately. The left-hand and the right-hand limit must not differ, and both must hit the function value:',
      arten: 'There are exactly three ways continuity can break — and they are not equally bad. With a removable gap only one point is missing; you can fill it in and everything is repaired. With a jump discontinuity both one-sided limits exist but are different — filling in won\'t help here. With a pole the limits run off to infinity; there is no value at all to fill in:',
      zwischenwertsatz: 'Continuity is not just a property you check — it is a tool. The intermediate value theorem says: a continuous function that starts below zero and ends above zero must hit zero along the way. It cannot jump over it, because jumping is exactly what it is not allowed to do:',
    },
    concepts: {
      stetig_an_stelle: {
        title: 'Continuity at a point',
        desc: 'The limit at the point matches the function value. Three conditions in one equation: the function value exists, the limit exists, and they are equal. If one of them fails, the function is discontinuous there.',
      },
      einseitig: {
        title: 'One-sided limits',
        desc: 'At the seams of piecewise defined functions you check left and right separately. If the two values differ, there is a jump — and the height of the jump is exactly their difference.',
      },
      arten: {
        title: 'The three types of discontinuity',
        desc: 'Removable gap: the limit exists, the function value is missing — repairable. Jump discontinuity: both one-sided limits exist but are different — not repairable. Pole: the limits run off to infinity — even less repairable.',
      },
      zwischenwertsatz: {
        title: 'Intermediate value theorem',
        desc: 'If $f$ is continuous on $[a;b]$ and changes sign at the endpoints, then there is at least one root in between. The theorem guarantees existence — not uniqueness, and not where exactly the root lies.',
      },
    },
    examples: {
      luecke: {
        title: 'Closing a removable gap',
        context: 'Mia comes across a term that turns into $\\frac{0}{0}$ at $x = 1$.',
        step1: 'The denominator becomes zero at $x = 1$ — the point is missing from the domain:',
        step2: 'Factorize the numerator and cancel. This is allowed as long as $x \\neq 1$:',
        step3: 'The simplified term can be evaluated at $x = 1$ without any problem — that is the limit:',
        step4: 'Now you fill in the missing point. The extended function is called the continuous extension:',
        mia_comment: 'The $\\frac{0}{0}$ scared me at first — I thought something was broken. But it isn\'t. It just means: cancel first, ask later. Broken would be $\\frac{1}{0}$, where a real zero sits alone in the denominator.',
      },
      sprung: {
        title: 'Measuring a jump discontinuity',
        context: 'The car park fee from Mia\'s mini-game — and the question of how expensive one second can be.',
        step1: 'The fee is defined piecewise, the seam is at one hour:',
        step2: 'Approach the seam from the left and from the right and compare the values:',
        step3: 'Both limits exist but are different — that is the definition of a jump discontinuity:',
        step4: 'The height of the jump is their difference. Here it is not a glitch, it is the fee itself:',
        kai_comment: 'Jumps like these are exactly why mobile plans and postage rates annoy people. Mathematically there is nothing wrong with them — but if you are one second late, you simply pay the full next level. Continuous fees charge to the exact second. That is a decision, not a formula.',
      },
    },
    realworld: {
      parkhaus: {
        title: 'Tiered pricing',
        desc: 'Car park, postage, mobile contract: wherever you are charged per started unit, the price function is discontinuous. Every tier is a jump discontinuity — and each one is a deliberate decision by the provider.',
      },
      temperatur: {
        title: 'Physical quantities',
        desc: 'Temperature, position, velocity: these quantities cannot jump, because a jump would mean an infinite amount of energy in zero time. That is why physical models are almost always continuous functions.',
      },
      nullstelle: {
        title: 'Finding roots numerically',
        desc: 'Every calculator uses the intermediate value theorem: it looks for an interval with a sign change and keeps halving it. Without continuity this method would be worthless — the root could simply be jumped over.',
      },
    },
    mistakes: {
      definiert_gleich_stetig: {
        wrong: 'If $f(x_0)$ exists, $f$ is also continuous there',
        correct: 'The function value must also match the limit',
        why: 'A step function is defined at its jump — it has a perfectly normal function value there. It is still discontinuous, because the limit from one side gives something else. Being defined is only the first of three conditions, not the answer itself.',
        mia_warning: 'That happened to me with the car park. At exactly one hour the price is defined, namely €2.00. I thought that meant everything was smooth. The graph jumps anyway — just one second later.',
      },
      pol_ist_hebbar: {
        wrong: 'Every gap in the domain can be closed with a suitable value',
        correct: 'Only if the two-sided limit exists and is finite',
        why: 'For $\\frac{1}{x}$ the function goes to $-\\infty$ on the left and to $+\\infty$ on the right. There is no number you could insert — whichever you choose, the graph shoots off to infinity right next to it. The rule of thumb for fractions: if the critical factor cancels out, the gap is removable; if it stays in the denominator, it is a pole.',
        mia_warning: 'I now always check this with two numbers: insert $0.001$ and $-0.001$. If two similar values come out, the gap is removable. If $1000$ and $-1000$ come out, it is a pole — and there is nothing you can do about it.',
      },
    },
  },
};
