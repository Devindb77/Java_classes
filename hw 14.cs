using System;

namespace hw14
{
    class Program
    {
        public static void Main(string[] args)
        {
            int result = Add(200, 400);
            Console.WriteLine(result);
            Console.ReadKey();
        }
        public static int Add(int numb1, int numb2)
        {
            Console.WriteLine(numb1 + numb2);
            {
                return numb1 + numb2;
            }
        }
        public static void Loop(string[]args)
        {
            for (int i = 5; i <= 20; i++) 
            Console.WriteLine(i);
            Console.ReadKey();
         }
        static void readystead(string[] args)
        {
            int[] array = new int[5];
            array[0] = 8;
            array[1] = 80;
            array[2] = 800;
            array[3] = 8000;
            array[4] = 80000;

            Console.WriteLine(array[0]);
            Console.WriteLine(array[1]);
            Console.WriteLine(array[2]);
            Console.WriteLine(array[3]);
            Console.WriteLine(array[4]);



            for (int live = 2; live < array.Length; live++) ;
            {
                Console.WriteLine(array[live]);
            }
            foreach (var retail in array) ;
            {
                Console.WriteLine(array[]);
            }
            Console.WriteLine();
        }
            static void relate(string[] args)
            { 
            bool lift = true;
            bool run = false;
            int revup = 45;

            if (revup <= 45)
            {
                lift = true;
            }
            Console.WriteLine("Lift it up" + lift);
        }
    }
}

