#!/usr/bin/env python3
"""Generate Amir (Kl.11) + Kai (Kl.12) audio clips via ElevenLabs API.
Uses eleven_multilingual_v2 for German pronunciation.
Style: Jugendsprache, energisch, etwas schneller als normal.
"""

import json
import os
import sys
from pathlib import Path

try:
    import requests
except ImportError:
    print("Installing requests...")
    os.system(f"{sys.executable} -m pip install requests -q")
    import requests

# --- Config ---
API_KEY = os.environ.get("ELEVENLABS_API_KEY", "")
if not API_KEY:
    env_path = Path(r"C:\Users\mail\entwicklung\docker\.env")
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            if line.startswith("ELEVENLABS_API_KEY="):
                API_KEY = line.split("=", 1)[1].strip()
                break

if not API_KEY:
    print("ERROR: ELEVENLABS_API_KEY not found in env or .env file")
    sys.exit(1)

MODEL = "eleven_multilingual_v2"
BASE_DIR = Path(r"C:\Users\mail\entwicklung\docker\mathe-portal\assets")

# Voice IDs
VOICE_AMIR = "TX3LPaxmHKxFdv7VOQHJ"   # Liam - Energetic, young
VOICE_KAI = "IKne3meq5aSn9XLyUdCD"     # Charlie - Deep, confident, young


def generate(voice_id: str, output_path: Path, text: str,
             stability: float = 0.40, similarity: float = 0.75, style: float = 0.5):
    """Generate a single audio clip."""
    output_path.parent.mkdir(parents=True, exist_ok=True)
    print(f"  Generating: {output_path.name} ({len(text)} chars)...", end=" ", flush=True)

    resp = requests.post(
        f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}",
        headers={
            "xi-api-key": API_KEY,
            "Content-Type": "application/json",
        },
        json={
            "text": text,
            "model_id": MODEL,
            "voice_settings": {
                "stability": stability,
                "similarity_boost": similarity,
                "style": style,
                "use_speaker_boost": True,
            },
        },
        timeout=120,
    )

    if resp.status_code != 200:
        print(f"FAILED ({resp.status_code}: {resp.text[:200]})")
        return False

    output_path.write_bytes(resp.content)
    size_kb = len(resp.content) / 1024
    print(f"{size_kb:.0f} KB")
    return True


# =============================================
# AMIR YILMAZ — Klasse 11 — DataPulse
# =============================================

AMIR_CLIPS = [
    ("sec00-willkommen.mp3",
     "Hey! Ich bin Amir, 22, Informatik-Student in Hamburg. "
     "Ich mach gerade ein Praktikum bei einem Fintech-Startup und baue einen "
     "Machine-Learning-Algorithmus namens DataPulse. Klingt krass, oder? "
     "Aber im Kern ist das einfach Mathe. Ableitungen fürs Optimieren, "
     "Integrale fürs Aufsummieren, Wahrscheinlichkeit fürs Vorhersagen. "
     "Ich hab auf einer GameJam Mia kennengelernt — die mit ihrem Indie-Game "
     "Hafenlichter. Sie hat mir gezeigt, dass Mathe überall steckt. "
     "Und jetzt zeig ich dir, dass Daten die gleiche Sprache sprechen. "
     "In den nächsten acht Kapiteln lösen wir zusammen echte Data-Science-Probleme. "
     "Jedes Mathe-Thema macht DataPulse ein Stück besser. "
     "Mein Motto: Die Daten lügen nicht — aber man muss die richtige Frage stellen. "
     "Let's go!"),

    ("sec01-ableitungsregeln.mp3",
     "Erster Tag im Praktikum und direkt ein fettes Problem. "
     "Mein Mentor zeigt mir die Kostenfunktion von DataPulse und sagt: "
     "Die konvergiert nicht. Wir brauchen Gradient Descent. "
     "Und ich so: Okay, was genau ist das? "
     "Stellt sich raus: Gradient Descent heißt einfach, du folgst der Ableitung "
     "bergab bis zum Minimum. Kettenregel, Produktregel, Quotientenregel — "
     "alles was du brauchst, um komplexe Funktionen abzuleiten. "
     "Stell dir vor, du stehst auf einem Berg im Nebel und kannst nur die "
     "Steigung unter deinen Füßen spüren. Genau das ist die Ableitung. "
     "Und genau so findet der Algorithmus den besten Weg nach unten. "
     "Heute lernst du die Ableitungsregeln — und damit baust du dir "
     "dein erstes Optimierungs-Tool."),

    ("sec02-kurvendiskussion.mp3",
     "DataPulse sammelt Nutzerdaten und die Engagement-Kurve sieht mega weird aus. "
     "Mein Chef fragt: Wo genau verlieren wir die User? "
     "Ich schau mir die Kurve an und denke: Das ist doch eine klassische "
     "Kurvendiskussion! Extremstellen zeigen, wo das Engagement am höchsten "
     "oder niedrigsten ist. Wendepunkte verraten, wo sich der Trend ändert. "
     "Monotonie sagt mir, ob es bergauf oder bergab geht. "
     "Das sind keine abstrakten Mathe-Konzepte — das sind echte Business-Insights. "
     "f Strich gleich Null heißt: Hier passiert was Wichtiges. "
     "f zwei Strich gleich Null heißt: Hier dreht sich die Dynamik. "
     "Krass, oder? Kurvendiskussion ist quasi die Datenanalyse-Methode Nummer eins."),

    ("sec03-extremwertaufgaben.mp3",
     "Der Chef will, dass DataPulse besser performt — aber es gibt tausend "
     "Stellschrauben: Learning Rate, Batch Size, Regularisierung. "
     "Das Zauberwort heißt Hyperparameter-Tuning, und das ist nichts anderes "
     "als ein Extremwertproblem mit Nebenbedingung. "
     "Du stellst eine Zielfunktion auf, die misst, wie gut dein Modell ist, "
     "und dann suchst du das Maximum oder Minimum. "
     "Nebenbedingung: Der Server hat nur begrenzt RAM. "
     "Randwerte checken nicht vergessen! "
     "Die Mathe dahinter ist exakt die gleiche wie bei der Frage: "
     "Welche Dose hat bei gegebenem Material das größte Volumen? "
     "Nur dass wir hier keine Dosen optimieren, sondern einen KI-Algorithmus."),

    ("sec04-integralrechnung.mp3",
     "Wir tracken die Datennutzung unserer User in Megabyte pro Sekunde. "
     "Mein Chef will wissen: Wie viel Daten hat User X insgesamt verbraucht "
     "letzte Woche? Und ich so: Easy, das ist ein Integral! "
     "Von der Rate zur Gesamtmenge. Stammfunktion bilden, Grenzen einsetzen, fertig. "
     "Das bestimmte Integral gibt dir die Fläche unter der Kurve — und die Fläche "
     "IST der Gesamtverbrauch. Der Hauptsatz der Differential- und Integralrechnung "
     "verbindet Ableitung und Integral. Das ist so elegant — das ist literally "
     "die schönste Formel der Analysis."),

    ("sec05-exp-log.mp3",
     "Unser User-Wachstum geht durch die Decke und ich soll das modellieren. "
     "Exponentielles Wachstum am Anfang, dann flacht es ab. "
     "Und die Retention? Die zerfällt exponentiell. Überall e-Funktionen! "
     "Und der natürliche Logarithmus ist in Machine Learning einfach überall: "
     "Log-Loss, Log-Likelihood, logarithmische Skalen. "
     "Der ln ist quasi das Schweizer Taschenmesser der Data Science. "
     "Wenn du verstehst, wie e hoch x und ln zusammenhängen, "
     "verstehst du die halbe KI-Welt. Kein Witz."),

    ("sec06-binomialverteilung.mp3",
     "Das Marketing-Team will einen A/B-Test fahren: "
     "Neue Landingpage gegen die alte. Klickt der User oder klickt er nicht? "
     "Ja oder nein, Erfolg oder Misserfolg — das ist ein Bernoulli-Experiment! "
     "Und wenn du viele davon zusammenpackst, kriegst du die Binomialverteilung. "
     "Die sagt dir: Wie wahrscheinlich ist es, dass von hundert Usern "
     "mindestens sechzig auf den neuen Button klicken? "
     "Die Sigma-Regeln helfen dir abzuschätzen, ob der Unterschied echt ist "
     "oder nur Zufall. A/B-Testing ist literally angewandte Stochastik. "
     "Jeder Klick ist ein Datenpunkt."),

    ("sec07-bedingte-wk.mp3",
     "DataPulse soll Produkte empfehlen. Die Kernfrage: "
     "Wenn ein User Kategorie X angeschaut hat — wie wahrscheinlich kauft er "
     "Produkt Y? Das ist bedingte Wahrscheinlichkeit: P von A gegeben B. "
     "Und der Satz von Bayes dreht das Ganze um. "
     "Der ist das absolute Herzstück jedes Empfehlungsalgorithmus "
     "und jedes Spam-Filters. Vierfeldertafel, Baumdiagramm, Bayes — "
     "drei Werkzeuge, die die Welt verändern. "
     "Wenn du das verstanden hast, verstehst du, wie Netflix weiß, "
     "was du als Nächstes schauen willst."),

    ("sec08-vektorrechnung.mp3",
     "Das letzte Puzzle-Teil! In DataPulse ist jeder User ein Vektor "
     "in einem hochdimensionalen Raum. Alter, Interessen, Klickverhalten — "
     "alles Koordinaten. Und Ähnlichkeit? Das ist der Winkel zwischen "
     "zwei Vektoren — Cosine Similarity nennt man das. "
     "Kleiner Winkel heißt ähnliche User. Das Skalarprodukt sagt dir, "
     "wie nah sie sind. Vektorrechnung ist literally die Sprache der KI. "
     "Embeddings, Feature-Vektoren, Attention-Mechanismen — alles Vektoren! "
     "DataPulse ist jetzt komplett! Acht Features, acht Mathe-Themen, "
     "ein Algorithmus. Ich ruf Mia an: DataPulse kann jetzt deine "
     "Hafenlichter-Spielerdaten analysieren! Und sie so: Geil! "
     "Und übrigens — Kai baut gerade das 3D-Sequel!"),
]


# =============================================
# KAI OKONKWO — Klasse 12 — Hafenlichter 3D
# =============================================

KAI_CLIPS = [
    ("sec00-willkommen.mp3",
     "Moin! Ich bin Kai, 27, Game-Designer und Gründer von Polygon Harbor — "
     "meinem kleinen Indie-Studio hier in Hamburg. "
     "Wir bauen gerade was Fettes: Hafenlichter 3D, das Sequel zu Mias "
     "2D-Platformer. Mia und ich haben zusammen Mathe studiert. "
     "Ihr Spiel war genial, aber die Spieler wollen mehr: volumetrischer Nebel, "
     "Partikel-Regen, physikbasierte Beleuchtung. "
     "3D-Entwicklung ist hardcore Mathematik. Matrizen für Transformationen, "
     "Vektoren für Kollisionen, Integrale für Partikel, Statistik fürs Balancing. "
     "Jede Zeile Code ist angewandte Mathe. "
     "In den nächsten sieben Kapiteln bauen wir zusammen Hafenlichter 3D. "
     "In Games steckt mehr Mathe als in den meisten Mathe-Büchern — "
     "und ich beweis es dir!"),

    ("sec01-e-funktion-ln.mp3",
     "Erstes Feature: Feuer und Nebel! "
     "Das Fackelflackern folgt einer exponentiellen Zerfallskurve: "
     "f von t gleich A mal e hoch minus Lambda t. "
     "Die Flamme wird schwächer, dann flackert sie wieder auf. "
     "Und der Nebel? Löst sich auf mit einer e-Funktion. "
     "Der natürliche Logarithmus hilft mir zu berechnen, wann der Nebel "
     "nur noch zehn Prozent Dichte hat. "
     "e-Funktion und ln sind in der Spieleentwicklung einfach überall: "
     "Lichtabnahme, Sound-Decay, Partikellebensdauer. "
     "Wenn du die e-Funktion verstehst, verstehst du, "
     "wie die Welt zerfällt und sich erneuert. "
     "Klingt dramatisch — ist aber einfach Mathe!"),

    ("sec02-integralrechnung-v.mp3",
     "Es regnet in der Hafenwelt und ich brauch ein Partikel-System. "
     "Wie viel Wasser trifft pro Sekunde auf den Boden? "
     "Das ist das Integral der Partikeldichte-Funktion! "
     "Und die Regentropfen selbst? Rotationskörper! "
     "Du nimmst das Tropfenprofil und drehst es um die Achse — "
     "integrierst — und hast das Volumen. "
     "Fläche zwischen Kurven brauch ich für überlappende Effekte: "
     "Wo überschneiden sich Regen und Nebel? "
     "Uneigentliche Integrale für Effekte, die theoretisch unendlich weit reichen, "
     "aber in der Praxis irgendwann vernachlässigbar werden. "
     "Integralrechnung vertieft ist das Fundament jeder Partikel-Engine."),

    ("sec03-analytische-geo.mp3",
     "Level-Design in 3D heißt: Wände sind Ebenen, der Boden ist eine Ebene, "
     "der Leuchtturmstrahl ist eine Gerade. "
     "Und die große Frage: Trifft Lumis Pfad die Wand? "
     "Das ist eine Gerade-Ebene-Schnittberechnung! "
     "Wenn der Parameter t zwischen null und eins liegt, gibt's einen Crash. "
     "Kollisionserkennung ist literally analytische Geometrie. "
     "Abstandsberechnungen sagen dir, wann ein Objekt nah genug ist "
     "für eine Interaktion. Ebenengleichungen in Normalenform, Parameterform, "
     "Koordinatenform — alles Werkzeuge für den 3D-Level-Designer. "
     "Der Hamburger Hafen in Hafenlichter 3D besteht aus hunderten von "
     "Ebenen und Geraden."),

    ("sec04-hypothesentests.mp3",
     "Die Playtester sagen: Level 5 ist zu schwer! "
     "73 Prozent scheitern. Aber stimmt das wirklich — oder hatten die einfach Pech? "
     "Ich mach einen Hypothesentest. "
     "H null: Die Durchfallquote ist höchstens 50 Prozent, also fair. "
     "H eins: Sie ist höher. Signifikanzniveau: fünf Prozent. "
     "Ich rechne — und ja, H null wird verworfen. "
     "Level 5 IST zu schwer, statistisch signifikant. "
     "Also redesignen wir es. Playtesting IST Hypothesentesten. "
     "Fehler erster und zweiter Art sind auch in Games relevant: "
     "Level fälschlicherweise ändern — oder fälschlicherweise beibehalten. "
     "Beides hat Konsequenzen."),

    ("sec05-normalverteilung.mp3",
     "Das Loot-System muss fair sein. "
     "Zu viele krasse Items — und das Spiel ist langweilig. "
     "Zu wenige — und die Spieler sind frustriert. "
     "Die Lösung: Normalverteilung! "
     "Item-Werte folgen einer Glockenkurve mit Erwartungswert My "
     "und Standardabweichung Sigma. "
     "68 Prozent der Items liegen im Ein-Sigma-Band, also im Mittelfeld. "
     "Nur 2,5 Prozent sind richtig selten und wertvoll. "
     "Die Sigma-Regeln helfen mir, das perfekte Balancing zu finden. "
     "z-Werte für die Standardisierung, Konfidenzintervalle fürs Feintuning. "
     "Faire Loot-Verteilung ist angewandte Stochastik auf höchstem Niveau."),

    ("sec06-matrizen.mp3",
     "Jede 3D-Transformation ist eine Matrizenmultiplikation. "
     "Kameraposition? Vier-mal-vier-Matrix. Lumi drehen? Rotationsmatrix. "
     "Den Hafen skalieren? Skalierungsmatrix. "
     "Und das Geile ist: Du kannst alle Transformationen hintereinander ausführen, "
     "indem du die Matrizen multiplizierst. "
     "Eine einzige Matrix für Rotation mal Skalierung mal Translation. "
     "Jeder einzelne Vertex in Hafenlichter 3D wird mit so einer Matrix "
     "transformiert — sechzig Mal pro Sekunde. "
     "Die Determinante sagt dir, ob deine Transformation das Objekt spiegelt. "
     "Die Inverse brauchst du für die Rücktransformation. "
     "Matrizen sind die Sprache der 3D-Grafik. "
     "Ohne sie — kein einziges Polygon auf dem Bildschirm."),

    ("sec07-abiturvorbereitung.mp3",
     "Release-Crunch! Alles muss zusammen funktionieren: "
     "Decay-Systeme, Partikel-Engine, Level-Design, Playtesting, "
     "Loot-Balancing, 3D-Engine. "
     "Genau wie im Abitur, wo alle Themen zusammenkommen. "
     "Cross-Topic-Aufgaben unter Zeitdruck — strategisches Problemlösen — "
     "kein Thema isoliert betrachten. "
     "Das Abi ist dein persönlicher Release Day. "
     "Und heute ist auch unserer! Hafenlichter 3D geht live! "
     "Release-Party am Hamburger Hafen. Mia kommt mit ihrem Team, "
     "Amir bringt die DataPulse-Analyse mit. "
     "Von quadratischen Funktionen in Klasse 10 bis Matrizen in Klasse 12 — "
     "Mathe hat dieses Spiel gebaut. Und du hast es verstanden. Respekt!"),
]


def main():
    print("=" * 50)
    print(" Mathe-Portal Audio: Amir + Kai")
    print(" ElevenLabs multilingual_v2")
    print("=" * 50)
    print()

    success = 0
    failed = 0

    # --- AMIR ---
    print("--- AMIR YILMAZ (Klasse 11, DataPulse) ---")
    print(f"    Voice: Liam ({VOICE_AMIR})")
    print()
    for filename, text in AMIR_CLIPS:
        path = BASE_DIR / "amir" / "audio" / filename
        if generate(VOICE_AMIR, path, text, stability=0.40, similarity=0.75, style=0.5):
            success += 1
        else:
            failed += 1

    print()

    # --- KAI ---
    print("--- KAI OKONKWO (Klasse 12, Hafenlichter 3D) ---")
    print(f"    Voice: Charlie ({VOICE_KAI})")
    print()
    for filename, text in KAI_CLIPS:
        path = BASE_DIR / "kai" / "audio" / filename
        if generate(VOICE_KAI, path, text, stability=0.42, similarity=0.75, style=0.5):
            success += 1
        else:
            failed += 1

    print()
    print("=" * 50)
    print(f" Done! {success} generated, {failed} failed")
    print(f" Amir: {len(AMIR_CLIPS)} clips")
    print(f" Kai:  {len(KAI_CLIPS)} clips")
    print("=" * 50)
    print()
    print("Deploy to server:")
    print("  scp -i ~/.ssh/hetzner_ssh_key -r assets/amir/audio/* dirk@95.217.163.192:/home/dirk/docker/lernmodule/html/mathe-portal/assets/amir/audio/")
    print("  scp -i ~/.ssh/hetzner_ssh_key -r assets/kai/audio/* dirk@95.217.163.192:/home/dirk/docker/lernmodule/html/mathe-portal/assets/kai/audio/")


if __name__ == "__main__":
    main()
