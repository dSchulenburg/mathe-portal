export const batch12c = {
  '12-logistisches-wachstum': {
    story: {
      intro: 'Amir is building a forecasting model for the user numbers of a learning app. The first weeks look fantastic: 40 percent more every week. He extrapolates — and for next year he gets more users than there are people with a smartphone. "Your model isn\'t wrong," says his professor, "it\'s just already outside its range of validity. What happens once half of all possible users already have the app?" Amir realizes: he forgot that the world is finite.',
      challenge: 'How do you model growth that has a limit? And how do you tell two kinds of limit apart: one you slow down towards from the very beginning, and one you first accelerate towards and then slow down?',
      outro: 'Amir now works with two models instead of one. Bounded growth, when the increase depends only on the remaining free part — cooling, saturation, charging. Logistic growth, when the increase also needs the existing population — infection, recommendation, populations. And he now knows what the inflection point means: not the end of growth, but its fastest moment.',
    },
    objectives: {
      grenzen: 'Recognize when an exponential model reaches its limit — and why it was still correct before that',
      beschraenkt: 'Set up and evaluate bounded growth $N(t) = K - (K - N_0)e^{-kt}$',
      logistisch: 'Determine the logistic model $N(t) = \\frac{K}{1 + a e^{-rt}}$ from capacity and initial value',
      wendepunkt: 'Calculate the inflection point and interpret it as the moment of strongest growth',
    },
    explanation: {
      intro: 'Exponential growth knows no limit. In reality, however, there almost always is one: at some point the pond is full, all possible customers have the product, the cup has reached room temperature. This upper limit is called the capacity $K$. Two models describe how it is reached — and the difference between them is not a detail, but the question of whether the curve has an inflection point.',
      beschraenkt: 'With bounded growth the increase depends only on how much is still missing. At the start the most is missing, so the increase is largest at the start and keeps getting smaller. The curve approaches the limit from below without ever reaching it:',
      amir_tip: 'I tell the two models apart with one single question: does the increase need what is already there? With cooling coffee it doesn\'t — the heat leaves no matter how much is left, only the difference counts. With a viral video it does — without people sharing it, nothing happens at all. The first is bounded, the second logistic.',
      logistisch: 'With logistic growth the population comes in as a second factor. At the start there is plenty of room, but hardly any individuals — growth is slow. At the end there are many individuals, but no room left — slow again. In between lies the maximum. This produces the typical S-shape:',
      dgl: 'The difference is clearest in the differential equation. It reads like a sentence: the increase is proportional to the population **times** the share that is still free. If either of the two factors is missing, growth comes to a standstill:',
      wendepunkt: 'This equation gives the most important key figure of the model. The product of population and free remainder is largest exactly when both are equal — that is, at half the capacity. That is where the inflection point lies, and that is where the growth rate is at its maximum:',
    },
    concepts: {
      kapazitaet: {
        title: 'Capacity $K$',
        desc: 'The upper limit that the population approaches without reaching it. It is the limit for $t \\to \\infty$ and appears as a parameter in both models. Without a sensible capacity, neither of the two models can be applied.',
      },
      beschraenkt: {
        title: 'Bounded growth',
        desc: 'The increase depends only on the remaining free part $K - N$. That is why it is largest right at the start and then decreases steadily. The curve has no inflection point — it is concave from the very beginning. Typical for cooling, charging and saturation.',
      },
      logistisch: {
        title: 'Logistic growth',
        desc: 'The increase depends on the population AND on the free remainder. This creates the S-curve: slow at first, then fast, then slow again. The parameter $a = \\frac{K - N_0}{N_0}$ tells you how many free places there are at the start for each existing individual.',
      },
      wendepunkt: {
        title: 'Inflection point at $K/2$',
        desc: 'Always at half the capacity, regardless of $r$ and $N_0$. There the growth rate is at its maximum, namely $\\frac{rK}{4}$. After that the population keeps growing, but more slowly — the most common mix-up in interpretation tasks.',
      },
    },
    examples: {
      seerosen: {
        title: 'Setting up a logistic model from capacity and initial value',
        context: 'On a pond with room for 500 water lilies, 50 plants are growing at the start.',
        step1: 'First the parameter $a$. It follows directly from capacity and initial value:',
        step2: 'With that, the model is complete. The growth rate $r = 0.4$ per week comes from the series of measurements:',
        step3: 'Check: substitute $t = 0$. If the initial value does not come out here, $a$ is wrong:',
        step4: 'The time of inflection follows from $a\\,e^{-rt} = 1$ — a logarithmic equation:',
        amir_comment: 'I always do the check in step 3. It takes ten seconds and catches the most common mistake: $a = \\frac{K}{N_0}$ instead of $a = \\frac{K - N_0}{N_0}$. For me that would have been 10 instead of 9 — looks harmless, but shifts the whole curve.',
      },
      abkuehlung: {
        title: 'Bounded growth when cooling',
        context: 'Kai leaves a cup of coffee at 80 °C standing in a room at 20 °C.',
        step1: 'The limit here is the room temperature; the difference from it is 60 °C at the start:',
        step2: 'Check at $t = 0$: the initial temperature must come out:',
        step3: 'After ten minutes only about a third of the difference is left:',
        step4: 'In the long run the room temperature remains — mathematically it is never reached:',
        kai_comment: 'With coffee this is everyday knowledge: the first minute does the most, after that it drags on. That is exactly bounded growth. And it is the reason why blowing on it helps at the start and does nothing after ten minutes.',
      },
    },
    realworld: {
      epidemie: {
        title: 'Epidemics',
        desc: 'New infections need infected people (who pass it on) and susceptible people (who can catch it). The inflection point is the day with the most new infections — the total number keeps rising after that, just more slowly.',
      },
      produkt: {
        title: 'Spread of products and apps',
        desc: 'New users usually come through existing users. At the start there aren\'t enough people to recommend it, at the end there aren\'t enough people left who don\'t have it. Marketing departments also call the S-curve the adoption curve.',
      },
      abkuehlung: {
        title: 'Cooling and charging',
        desc: 'Newton\'s law of cooling and the charging curve of a battery are bounded growth. Here only the distance to the final state counts — that is why a battery charges the last few percent so painfully slowly.',
      },
    },
    mistakes: {
      wendepunkt_ende: {
        wrong: 'From the inflection point on, the population decreases',
        correct: 'From the inflection point on, the growth rate decreases, the population keeps rising',
        why: 'The inflection point is the root of the second derivative, not the first. $N\'$ has a maximum there, so it is especially large — and positive. The logistic function is strictly increasing on its entire domain, it never falls. Mixing up population and increase here turns the statement exactly upside down.',
        amir_warning: 'This is the number one interpretation mistake and it costs points in every final exam. My trick: I always phrase the answer with the word "per". What changes per week? The increase. What is there in total? The population. As soon as the word "per" shows up, I am talking about $N\'$.',
      },
      exponentiell_gedeckelt: {
        wrong: 'Logistic growth is exponential growth that is cut off at $K$',
        correct: 'The logistic curve slows down gradually and never reaches $K$ at all',
        why: 'A cut-off exponential model would have a kink — it would not be differentiable at the cut and would reach the limit exactly in finite time. The logistic function, on the other hand, is smooth everywhere and only approaches $K$ asymptotically. The difference is not cosmetic: the cut-off model predicts a specific end time, the logistic one doesn\'t.',
        amir_warning: 'The only correct part of this idea is the initial phase: as long as $N$ is small compared to $K$, the braking factor is almost $1$ and the two curves practically lie on top of each other. At the start, the exponential curve hugs the logistic one like a tangent — that is exactly why my first model fitted the first weeks so well.',
      },
    },
  },
};
