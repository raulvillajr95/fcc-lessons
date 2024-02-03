#include <iostream>
#include <string>
#include <fstream>
using namespace std;

string removeDuplicates(string starter)
{
   string result = "";
   
   for (int i = 0; i < starter.length(); i++)
   {
      char currentLetter = starter[i];
      bool in_result = false;
      
      for(int j = 0; j < result.length(); j++)
      {
         if (currentLetter == result[j])
         {
            in_result = true;
         }
      }
      
      if (in_result == false)
      {
         result += currentLetter;
      }
   }
   
   return result;
}

string reverseString(string word)
{
    string result = "";

    for (int i = word.length() - 1; i >= 0; i--)
    {
        result += word[i];
    }
    
    return result;
}

string removeLettersFromAlphabet(string word)
{
    string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    string result = "";

    for (int i = 0; i < alphabet.length(); i++)
    {
        if (word.find(alphabet[i]) != string::npos)
        {
            continue;
        }
        else
        {
            result += alphabet[i];
        }
    }

    return result;
}

string cryptedAlphabet(string keyword)
{
    string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    string encryptedAlpha = "";

    // remove duplicates from 'keyword'
    string keywordNoDuplicates = removeDuplicates(keyword);

    // append that to 'encryptedAlphabet'
    encryptedAlpha.append(keywordNoDuplicates);

    // remove letters from alphabet
    string alphabetRemovedKeyletters = removeLettersFromAlphabet(keywordNoDuplicates);

    // reverse new alphabet
    string newAlphaReversed = reverseString(alphabetRemovedKeyletters);

    // append that to 'encryptedAlphabet'
    encryptedAlpha.append(newAlphaReversed);

    return encryptedAlpha;
}

string encryptedString(string message, string cryptedAlpha)
{
    string result = "";
    string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (int i = 0; i < message.length(); i++)
    {
        bool charFound = false;
        for (int j = 0; j < alphabet.length(); j++)
        {
            if (isupper(message[i]))
            {
                if (message[i] == alphabet[j])
                {
                    result += cryptedAlpha[j];
                    charFound = true;
                }
    
            }
            else
            {
                if (message[i] == tolower(alphabet[j]))
                {
                    result += tolower(cryptedAlpha[j]);
                    charFound = true;
                }
            }
        }
        if (charFound == false)
        {
            result += message[i];
        }
        
    }

    return result;
}

string decryptedString(string message, string cryptedAlpha)
{
    string result = "";
    string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (int i = 0; i < message.length(); i++)
    {
        bool charFound = false;
        for (int j = 0; j < cryptedAlpha.length(); j++)
        {
            if(isupper(message[i]))
            {
                if (message[i] == cryptedAlpha[j])
                {
                    result += alphabet[j];
                    charFound = true;
                }
            }
            else
            {
                if (message[i] == tolower(cryptedAlpha[j]))
                {
                    result += tolower(alphabet[j]);
                    charFound = true;
                }
            }
        }
        if (charFound == false)
        {
            result += message[i];
        }
        
    }
    

    return result;
}

int main(int argc, char* argv[])
{
    if (argc != 5)
    {
        cout << "Please supply 5 arguments in this order." << endl;
        cout << "./<file-name> -<e-or-d> -k<key-word> <input-file> <output-file>" << endl;

        return 0;
    }

    string firstArg = argv[0];
    string secondArg = argv[1];
    string thirdArg = argv[2];
    string fourthArg = argv[3];
    string fifthArg = argv[4];

    string keyword = thirdArg.substr(2, thirdArg.length()-2);
    string cryptedBet = cryptedAlphabet(keyword);

    // Turn file contents into a string
    string message = "";
    ifstream inputFile (fourthArg);
    char c;
    int pos = 0;
    while(inputFile.get(c))
    {

        message += c;

        pos++;
        inputFile.seekg(pos);
    }

    // Encrypt/Decrypt string
    string cryptedMessage;
    if (secondArg == "-e")
    {
        cryptedMessage = encryptedString(message, cryptedBet);
    }
    else if (secondArg == "-d")
    {
        cryptedMessage = decryptedString(message, cryptedBet);
    }

    // Output string to file
    ofstream outputFile (fifthArg);
    outputFile << cryptedMessage;
    
    return 0;
}


/* Ideas:
- do it for lowercases
    • work on encryptedString/decryptedString
    • work on 
*/