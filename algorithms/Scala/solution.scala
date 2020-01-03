import scala.collection.mutable.Stack
import scala.util.control.Breaks._
import scala.math.min
import scala.math.max
object Solution2 extends App {

  def repeat(times: Int, el: Int): List[Int] = {
    var res = List[Int]()
    for (i <- 1 to times) {
      res = el :: res
    }
    return res
  }

  def f(num: Int, arr: List[Int]): List[Int] = {
    var res = List[Int]()
    arr.map(el => res = res ::: repeat(num, el))
    return res
  }

  def filterArray(delim: Int, arr: List[Int]): List[Int] = {
    return arr.filter(_ < delim)
  }

  def filterOddPositions(arr: List[Int]): List[Int] =
    (arr.indices.collect { case i if i % 2 == 1 => arr(i) }).toList

  def reverseList(arr: List[Int]): List[Int] =
    (arr.indices.reverse.collect { case i => arr(i) }).toList

  def sumOfOddElems(arr: List[Int]): Int = arr.filter(_ % 2 != 0) reduceLeft (_ + _)

  def exp(x: Double): Double = {

    def f(x: Double): Double = f_recurr(x, 9)

    def fact(x: Int): Int = if (x <= 1) 1 else x * fact(x - 1)

    def f_recurr(x: Double, i: Int): Double =
      if (x == 0) 1 else Math.pow(x, i) / fact(i) + f_recurr(x, i - 1)

    return f(x)
  }

  def validBST(): Array[Boolean] = {
    var s     = Stack[Int]()
    var root  = Int.MinValue
    val count = scala.io.StdIn.readLine().toInt
    var res   = Array[Boolean]()
    for (i <- 1 to count) {
      var size  = scala.io.StdIn.readLine().toInt
      var nodes = scala.io.StdIn.readLine().trim.split("\\s+").map(_.toInt)
      breakable {
        for (i <- nodes) {
          if (i < root) {
            res = res :+ false
            break
          } else {
            while (!s.isEmpty && s.top < i) {
              root = s.top
              s.pop()
            }
            s.push(i);
          }
        }
      }
      if (res.length < i) {
        res = res :+ true
      }
      s.clear()
      root = Int.MinValue
    }
    return res
  }

  def minCostClimbingStairs_O_N2(cost: Array[Int]): Int = {
    //https://leetcode.com/problems/min-cost-climbing-stairs/
    val length = cost.length

    if (length <= 2) {
      return min(cost(0), cost(length - 1))
    } else if (length == 3) {
      return min(
        cost(0) +
          minCostClimbingStairs_O_N2(cost.slice(1, length)),
        cost(1)
      )
    } else {
      return min(
        cost(0) +
          minCostClimbingStairs_O_N2(cost.slice(1, length)),
        cost(1) + minCostClimbingStairs_O_N2(cost.slice(2, length))
      )

    }
  }

  def minCostClimbingStairs_O_N(cost: Array[Int]): Int = {
    //https://leetcode.com/problems/min-cost-climbing-stairs/
    val length = cost.length

    if (length == 2) {
      return min(cost(0), cost(1))
    }
    var f1: Int = cost(0)
    var f2: Int = cost(1)
    var f0: Int = 0
    for (i <- 2 to length - 1) {
      f0 = cost(i) + min(f1, f2);
      f1 = f2;
      f2 = f0;
    }
    return min(f1, f2)
  }

  def minPathSumNonOptimal(grid: Array[Array[Int]]): Int = {

    val length = grid.length
    val m      = length
    val n      = grid(0).length
    if (m == 1 && n == 1) {
      return grid(0)(0)
    }
    if (n == 1) {
      val bottom = grid.slice(1, length)
      return grid(0)(0) + minPathSumNonOptimal(bottom)
    }
    if (m == 1) {
      var right = Array[Array[Int]]()
      grid.foreach(el => {
        right = right :+ el.slice(1, el.length)
      })
      return grid(0)(0) + minPathSumNonOptimal(right)
    }

    val bottom = grid.slice(1, length)
    var right  = Array[Array[Int]]()
    grid.foreach(el => {
      right = right :+ el.slice(1, el.length)
    })

    return min(grid(0)(0) + minPathSumNonOptimal(right), grid(0)(0) + minPathSumNonOptimal(bottom))
  }

  def minPathSumOptimal(grid: Array[Array[Int]]): Int = {
    val length = grid.length
    val m      = length
    val n      = grid(0).length
    var OPT    = Array.ofDim[Int](m, n)
    if (m == 1 && n == 1) {
      return grid(0)(0)
    }
    OPT(0)(0) = grid(0)(0);

    for (i <- 1 to m - 1) {
      OPT(i)(0) = OPT(i - 1)(0) + grid(i)(0)
    }

    for (j <- 1 to n - 1) {
      OPT(0)(j) = OPT(0)(j - 1) + grid(0)(j)
    }

    for (i <- 1 to m - 1) {
      for (j <- 1 to n - 1) {
        OPT(i)(j) = min(OPT(i - 1)(j), OPT(i)(j - 1)) + grid(i)(j)
      }
    }

    return OPT(m - 1)(n - 1)
  }

  def numTrees(n: Int): Int = {
    def createBranch(arr: Array[Int]): Int = {
      val n                 = arr.length
      var left: Array[Int]  = null
      var rigth: Array[Int] = null
      if (n <= 1) {
        return 1
      }
      if (n == 2) {
        return 2
      } else {
        var result: Int = 0
        for (i <- 1 to n) {
          left = arr.slice(0, i - 1)
          rigth = arr.slice(i, n)
          if (left.length == 1 && rigth.length == 1) {
            result = result + 1
          } else {
            result = result + createBranch(left) * createBranch(rigth)
          }
        }
        return result
      }

    }
    //https://leetcode.com/problems/unique-binary-search-trees/
    if (n == 1) {
      return 1
    }
    if (n == 2) {
      return 2
    }
    var result: Int       = 0
    var left: Array[Int]  = null
    var rigth: Array[Int] = null
    var arr: Array[Int]   = (1 to n).toArray.sortWith(_ < _)
    var curr              = 0
    for (i <- 1 to n) {

      left = arr.slice(0, i - 1)
      rigth = arr.slice(i, n + 1)
      curr = createBranch(left) * createBranch(rigth)
      result = result + max(curr, 1)

    }

    return result
  }

  def numTreesMemo(n: Int): Int = {

    //https://leetcode.com/problems/unique-binary-search-trees/
    if (n == 1) {
      return 1
    }
    if (n == 2) {
      return 2
    }
    var store = Array.ofDim[Int](n + 1)
    store(0) = 1
    store(1) = 1

    for (i <- 2 to n) {
      for (j <- 1 to i) {

        store(i) = store(i) + store(i - j) * store(j - 1)

      }
    }

    return store(n)
  }

  def uniquePaths(m: Int, n: Int): Int = {

    def uniquePathsRecurr(m_i: Int, n_i: Int, m: Int, n: Int): Int = {

      if (m_i < m && n_i < n) {
        return uniquePathsRecurr(m_i + 1, n_i, m, n) + uniquePathsRecurr(m_i, n_i + 1, m, n)
      } else if (m_i == m && n_i < n) {
        return uniquePathsRecurr(m_i, n_i + 1, m, n)
      } else if (n_i == n && m_i < m) {
        return uniquePathsRecurr(m_i + 1, n_i, m, n)
      } else if (m_i == m && n_i == n) {
        return 1
      }

      return 0
    }

    if (m == 1 && n == 1) {
      return 1
    }

    var count = 0;

    count = uniquePathsRecurr(2, 1, m, n) + uniquePathsRecurr(1, 2, m, n)

    return count
  }
  def uniquePathsMemo(m: Int, n: Int): Int = {

    var OPT = Array.ofDim[Int](m, n)
    if (m == 1 && n == 1) {
      return 1
    }
    OPT(0)(0) = 0;

    for (i <- 1 to m - 1) {
      OPT(i)(0) = OPT(i)(0) + 1
    }

    for (j <- 1 to n - 1) {
      OPT(0)(j) = OPT(0)(j) + 1
    }
    for (i <- 1 to m - 1) {
      for (j <- 1 to n - 1) {
        OPT(i)(j) = OPT(i - 1)(j) + OPT(i)(j - 1)
      }
    }

    return OPT(m - 1)(n - 1)
  }

  def minSteps(n: Int): Int = {
//https://leetcode.com/problems/2-keys-keyboard/

    // var OPT = Array.ofDim[Int](n, n)
    // if (m == 1 && n == 1) {
    //   return 1
    // }
    // OPT(0)(0) = 0;

    // for (i <- 1 to m - 1) {
    //   OPT(i)(0) = OPT(i)(0) + 1
    // }

    // for (j <- 1 to n - 1) {
    //   OPT(0)(j) = OPT(0)(j) + 1
    // }
    // for (i <- 1 to m - 1) {
    //   for (j <- 1 to n - 1) {
    //     OPT(i)(j) = OPT(i - 1)(j) + OPT(i)(j - 1)
    //   }
    // }

    // return OPT(m - 1)(n - 1)
    // return best(n);
    return 1

  }

  def countSubstrings(s: String): Int = {

    val n = s.length

    if (n == 0) {
      return 0;
    }
    if (n == 1) {
      return 1;
    }

    var OPT   = Array.ofDim[Boolean](n, n)
    var count = 0

    for (i <- 0 to n - 1) { 
      for (j <- 0 to n - 1) {
        OPT(i)(j) = false
      }
    }

    for (i <- 0 to n - 1) {
      for (j <- i to 0 by -1) {
        if (s(i) == s(j) && (i - j < 2|| OPT(i - 1)(j + 1))) {
          OPT(i)(j) = true
          count = count + 1
        }
      }
    }

    return count

  }

  override def main(args: Array[String]): Unit = {
    // val cost                    = Array[Int](1, 100, 1, 1, 1, 100, 1, 1, 100, 1)
    // val cost1                   = Array[Int](10, 15, 20)
    // val grid: Array[Array[Int]] = Array(Array(1, 3, 1), Array(1, 5, 1), Array(4, 2, 1))
    println(countSubstrings("abc"))
    println(countSubstrings("aba"))
    println(countSubstrings("aaa"))
    // println(uniquePathsMemo(7, 3))
    // println(uniquePathsMemo(9, 51))
  }

}
