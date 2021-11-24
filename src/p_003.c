
/* PUZZLE 
   Write a method to replace all spaces in a string with '%20'. You may assume that the string
   has sufficient space at the end to hold the additional characters, and that you are given the "true"
   length of the string. (Note: If implementing in Java, please use a character array so that you can
   perform this operation in place.) 

   Example

   Input: "Mr John Smith     ",
   Output: "Mr%20John%20Smith"
*/

/* I switched to C for this because JavaScript's immutable strings makes this impossible to do in-place, and 
   makes the problem trivial; for example, it could be done in one line:
   
   function urlify(str) {
      return str.trimRight().replaceAll(' ', '%20'); // would return 'Mr%20John%20Smith'
   }

   Goodness, I love high-level programming languages. 
*/

#include <stdio.h>
#include <string.h>

void urlify(char *input, int s_length, int buffer_size) {
    int end = s_length - 1; 
    int space_count = 0;
    int read_index = end;
    
    if(input == NULL || 
       s_length <= 0 || buffer_size <= 0 || s_length > buffer_size) {
        printf("UNEXPECTED INPUT!\n");
        return;
    }
    
    /* make one pass through the string to calculate how many spaces we will need to 
       replace, and do one last check to make sure we don't overflow the buffer */
    for(; end > -1; --end) {
        if(input[end] == ' ')
            ++space_count;
    }
    
    if(space_count == 0)
        return;
    
    if(space_count * 2 + s_length > buffer_size) {
        printf("ERROR: buffer not large enough to accomodate urlification!");
        return;
    }
    
    end = (s_length + (space_count * 2)) - 1;
    
    /* trim right-hand side */
    if(end + 1 < buffer_size)
        input[end + 1] = '\0';
    
    for(; read_index >= 0; --read_index) {
        if(input[read_index] != ' ') {
            input[end] = input[read_index];
        } else {
            input[end] = '0';
            input[end - 1] = '2';
            input[end - 2] = '%';
            
            end -= 2;
        }

        --end;
    }
    
    return;
}

int main()
{
    char example_string[20] = {0};
    strcpy(example_string, "Mr John Smith      ");
    
    /* The problem says we're "given the 'true' length of the string," so I pass that in.
       In the real world you wouldn't be passing in a hardcoded magic number like this. 
   
       You would either be passing in the result of strlen(), or some other computed value or 
       DEFINE value. I pass in sizeof the buffer to do error handling within the function
    */
    urlify(example_string, 13, sizeof(example_string));
    printf("URL-ified string: '%s'\n", example_string); /* outputs: 'Mr%20John%20Smith' */

    return 0;
}