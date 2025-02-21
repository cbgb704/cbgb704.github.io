# Connor Emery lab6-2
# This program reads numbers from a text file, "exceptionNumbers.txt" and calculates their average.
# It handles the following exceptions:
# 1. IOError: If the file is missing, an error message is displayed.
# 2. ValueError: If a non-numeric value is encountered, it is ignored with a warning message.

def read_numbers_from_file(filename):
    # Reads numbers from a file, ignoring non-numeric values.
    # Returns a list of valid numbers.
    numbers = []
    
    try:
        with open(filename, 'r') as file:
            for line in file:
                try:
                    number = float(line.strip())  # Convert line to float
                    numbers.append(number)
                except ValueError:
                    print(f'The non-numeric character "{line.strip()}" found in file - ignored')
    except IOError:
        print(f'The file "{filename}" could not be found')
        print("Program terminated.")
        return None
    
    return numbers

def calculate_average(numbers):
    # Calculates and returns the average of a list of numbers.
    if numbers:
        total = sum(numbers)
        count = len(numbers)
        return total / count, total, count
    else:
        return None, None, None

def main():
    # Main function to execute the program logic.
    filename = "exceptionNumbers.txt"  # File name
    
    # Read numbers from file
    numbers = read_numbers_from_file(filename)
    
    if numbers is not None:
        # Calculate average
        average, total, count = calculate_average(numbers)
        
        # Display results
        if average is not None:
            print(f'\nNumbers in the file: {count}, the total is: {total:.2f}')
            print(f'The average of the numbers is: {average:.2f}')
        else:
            print("No valid numbers found in the file.")

# Program execution starts here
if __name__ == "__main__":
    main()
