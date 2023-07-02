#include <iostream>

using namespace std;

int main() {
  cout << "Total book price: ";
  float total_book_price;
  cin >> total_book_price;
  cout << "Number of books: ";
  int number_of_books;
  cin >> number_of_books;

  float tax = 0.075 * total_book_price;
  int shipping_charge = 2 * number_of_books;

  float price_of_order = total_book_price + tax + shipping_charge;
  cout << "Total: " << price_of_order << endl;

  return 0;
}
