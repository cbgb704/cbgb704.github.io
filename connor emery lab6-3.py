#Connor Emery 2/20/25 lab6-3
#Input Tester
#This program tests user input to determine if it is numeric. The user is prompted to enter a value and the program checks 
# whether the input can be converted into a floating-point number.
#If the input is numeric, the program confirms it; otherwise, it states that the input is not a number.
#The program terminates when the user presses ENTER without inputting any data.


def numTest(input_str):

    #Tests if the given input string can be converted to a float.
    #Returns True if it's numeric, otherwise False.

    try:
        float(input_str)  # Attempt to convert to float
        return True
    except ValueError:
        return False

def main():
 
    #Handles user input and calls numTest() to determine if the input is numeric.
    #Displays appropriate messages based on the result.

    while True:
        # User input section
        user_input = input("Please enter your test data OR press ENTER to stop program: ")
        
        # Check for NULL input (just pressing Enter)
        if user_input == "":  
            print("Program terminated.")
            break
        
        # Processing and Output section
        if numTest(user_input):
            print(f"\n {user_input} IS a number")
        else:
            print(f"\n {user_input} IS NOT a number")

# Program execution starts here
if __name__ == "__main__":
    main()
