#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int n = 3;
auto subset = vector<int>();
auto subsets = vector<vector<int>>();

void search(int k)
{
    if (k == n)
    {
        subsets.push_back(subset);
    }
    else
    {
        search(k + 1);
        subset.push_back(k);
        search(k + 1);
        subset.pop_back();
    }
}
int main(int argc, char const *argv[])
{

    vector<int> permutation;
    for (int i = 0; i < n; i++)
    {
        permutation.push_back(i);
    }
    do
    {
        // process permutation
    } while (next_permutation(permutation.begin(), permutation.end()));

    /* code */
    search(0);

    for (auto &subset : subsets)
    {
        for (auto &elem : subset)
        {
            cout << elem << " ";
        }
        cout << endl;
    }

    return 0;
}
