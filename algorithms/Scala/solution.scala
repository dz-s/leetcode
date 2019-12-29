import scala.collection.mutable.Stack
import scala.util.control.Breaks._

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

  override def main(args: Array[String]): Unit = {
    var res = validBST()
    for (i <- res) {
      println(if (i) "YES" else "NO")
    }
  }

}
