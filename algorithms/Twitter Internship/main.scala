import java.io._
import java.math._
import java.security._
import java.text._
import java.util._
import java.util.concurrent._
import java.util.function._
import java.util.regex._
import java.util.stream._
import scala.collection.immutable._
import scala.collection.mutable._
import scala.collection.concurrent._
import scala.concurrent._
import scala.io._
import scala.math._
import scala.sys._
import scala.util.matching._
import scala.reflect._
import scala.collection.mutable.HashMap 



object Result {

    /*
     * Complete the 'getUniqueUserIdSum' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    def getUniqueUserIdSum(arr: Array[Int]): Int = {
        

        var slots = HashMap.empty[Int, Int]
        var _arr = arr
        val len = _arr.length
        var sum = 0

        def getNewValue(elem: Int): Int = {
            var _elem = elem
            while (slots.contains(_elem)){
                _elem = _elem + 1
            }
            slots.put(_elem, 1)
            return _elem  
        }

        for(i <- 0 to len - 1){
            _arr(i) = getNewValue(_arr(i))
        }
        _arr.foreach( sum += _ )
        return sum
    }

}

object Solution {
    def main(args: Array[String]) {
        val arr = Array[Int](3, 2, 1,2, 7)
        val result = Result.getUniqueUserIdSum(arr)

        println(result)
    }
}