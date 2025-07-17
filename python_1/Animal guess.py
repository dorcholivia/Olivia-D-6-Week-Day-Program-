import random

# Animals grouped by difficulty level with updated hints
easy = [
    {"name": "horse", "hints": ["Often found on farms.", "Has a mane.", "Used for riding."]},
    {"name": "cow", "hints": ["It says 'moo'.", "Produces milk.", "Often found in pastures."]},
    {"name": "turtle", "hints": ["It carries its home on its back.", "Moves very slowly.", "Can live on land or in water."]}
]

medium = [
    {"name": "raccoon", "hints": ["Known for stealing food.", "Has a black mask on its face.", "Often digs in trash cans."]},
    {"name": "koala", "hints": ["Native to Australia.", "Eats eucalyptus leaves.", "Has thick grey fur."]},
    {"name": "armadillo", "hints": ["Has a hard, armored shell.", "Can curl into a ball.", "Often found in the southern U.S. and Central America."]}
]

hard = [
    {"name": "chameleon", "hints": ["Can change its skin color.", "Good at camouflage.", "Has a long sticky tongue."]},
    {"name": "narwhal", "hints": ["Known as the unicorn of the sea.", "Has a long spiral tusk.", "Lives in Arctic waters."]},
    {"name": "axolotl", "hints": ["It's a type of salamander.", "It never fully grows up - it stays aquatic forever.", "Known for its ability to regrow body parts."]}
]

levels = [easy.copy(), medium.copy(), hard.copy()]  
level_names = ["Easy", "Medium", "Hard"]  # List to iterate over

#  Function to validate yes/no input
def get_yes_or_no(prompt):
    """Ask for yes or no repeatedly until valid input is given."""
    while True:
        answer = input(prompt).lower()3
        if answer in ["yes", "no"]:
            return answer
        print("Please enter 'yes' or 'no' only.")

#  Function to play one round of the game
def play_game():
    """Runs one round of the animal guessing game."""
    score = 0
    lives = 3
    prize_per_animal = 4.0
    guessed_animals = set()
    available_levels = [level.copy() for level in levels]

    while score < 5 and lives > 0:
        level_index = min(score, len(available_levels) - 1)
        current_level = available_levels[level_index]

        if not current_level:
            current_level = levels[level_index].copy()
            available_levels[level_index] = current_level

        animal = random.choice(current_level)
        current_level.remove(animal)

        print("\nLevel:", score + 1)
        print("Difficulty:", level_names[level_index])
        print("You’ll get up to 3 hints. Try to guess!")

        correct = False
        for hint in animal["hints"]:
            print("Hint:", hint)
            guess = input("What animal am I? ").lower()
            if guess == animal["name"]:
                correct = True
                score += 1
                guessed_animals.add(animal["name"])
                print("Correct! Score:", score, "/5 | Lives:", lives)
                break
            else:
                print("Wrong guess.")

        if not correct:
            lives -= 1
            print("Out of hints! The correct answer was:", animal["name"])
            print("Lives left:", lives)

    if score == 5:
        dollars = score * prize_per_animal
        print("\n YOU WIN! ")
        print("You've earned your virtual prize of $", dollars)
    else:
        print("\nGame Over! You lost all your lives.")
        print("Final Score:", score, "/5")

#  Game intro
print("Welcome to the Animal Guessing Game!")
print("Guess 5 animals correctly and win a virtual $20 prize.")
print("You have 3 lives. One wrong guess = one life lost.\n")

#  Game loop
play = "yes"
while play.lower() == "yes":
    play_game()
    play = get_yes_or_no("\nDo you want to play again? (yes/no): ")
    if play == "yes":
        print("\nStarting a new round...")
    else:
        print("Thanks for playing! Goodbye!")
