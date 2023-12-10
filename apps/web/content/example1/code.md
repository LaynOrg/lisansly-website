::code-group

```c# [App.cs]
using System;

public class Index
{
    public static void Main()
    {
        int a = 1;
        int b = 2;

        int result = Sum(a, b);
        Console.WriteLine(result);
    }

    public static int Sum(int a, int b)
    {
        return a + b;
    }
}
```

```c# [Main.cs]
using System;

public class MainFile
{
    public static void Main()
    {
        int a = 1;
        int b = 2;

        Console.WriteLine(a + " " + b);
    }
}
```

::
