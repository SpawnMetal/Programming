{//#Компилятор #VSCode
    Ставим компилятор mingw-w64
    Прописываем в PATH C:\Program Files\mingw-w64\x86_64-8.1.0-win32-seh-rt_v6-rev0\mingw64\bin
    Устанавливаем стандартный расширение пакет C/C++
    F1 - c++ ui, выставляем настройки
    F5 - c++ GDB, затем c++ active file...
    Откроются настройки, проверяем
    После этого просто F5
}

{//#Pointers
    Пример cpp\pointers.cpp
    & - ссылка, лучше использовать при работе с обычными переменными. Если &var = переменная, то var = значение. Если &var = ячейка, то *var = значение
    * - указатель, лучше использовать с динамическими данными, массивами. Если var = ячейка, то *var получит значение из ячейки

    Первое, что необходимо знать — это то, что при объявлении переменной необработанного указателя выделяется только память, необходимая для хранения адреса расположения памяти, на который будет ссылаться указатель при разыменовывании. Выделение памяти для самого значения данных (также называемое резервным хранилищем) еще не выделено. Другими словами, объявив переменную необработанного указателя, вы создаете переменную адреса памяти, а не фактическую переменную данных.

    Указатель указывает на область памяти, извлекая из неё значение.
    Поэтому если &var = 0x..., то *&var = var

    Ссылка содержит адрес объекта, однако с синтаксической точки зрения ведет себя как объект.
    S  s;   // Declare the object.
    S& SRef = s;   // Declare the reference.
    s.i = 3; // SRef.i == 3

    При использовании new необходимо использовать интеллектуальный указатель https://docs.microsoft.com/ru-ru/cpp/cpp/smart-pointers-modern-cpp?view=msvc-170
}

{//#Ключевые слова
    https://docs.microsoft.com/ru-ru/cpp/cpp/keywords-cpp?view=msvc-170
    
    new - выделение памяти, возвращает указатель на объект с выделенной памятью. Если конструктор выдаст исключение, то delete произойдёт автоматом https://docs.microsoft.com/ru-ru/cpp/cpp/new-operator-cpp?view=msvc-170
    При использовании new необходимо использовать интеллектуальный указатель
    https://docs.microsoft.com/ru-ru/cpp/cpp/smart-pointers-modern-cpp?view=msvc-170
    https://docs.microsoft.com/ru-ru/cpp/cpp/object-lifetime-and-resource-management-modern-cpp?view=msvc-170

    auto - определяет тип автоматом https://docs.microsoft.com/ru-ru/cpp/cpp/auto-cpp?view=msvc-170
        auto a = 5 // a станет int
    typeid(var).name() возвращает тип var по типу typeof
    decltype(var) var1 - возвращает тип переменной var для объявления var1

    {//#typename #template
        https://docs.microsoft.com/ru-ru/cpp/cpp/typename?view=msvc-170

        typename - использует переданный тип для объявления
        template - шаблон для создания типа, во время компиляции на основе аргументов, поэтому они должны быть const или constexpr выражением, например size_t

        template<class T1, class T2>...
        template<typename T1, typename T2>...

        template <typename T>
        T minimum(const T& lhs, const T& rhs)
        {
            return lhs < rhs ? lhs : rhs;
        }
        minimum<int> — это экземпляр шаблона minimum<T>
        int a = get_a();
        int b = get_b();
        int i = minimum<int>(a, b);
        Однако, поскольку это шаблон функции, и компилятор может вывести тип T из аргументов a и b, можно вызвать его так же, как обычная функция:
        int i = minimum(a, b);

        Можно записать так:
        template <typename T, typename U, typename V> class Foo{};
        Что эквивалентно:
        template <class T, class U, class V> class Foo{};

        Оператор с многоточием (...) можно использовать для определения шаблона, принимающего произвольное число из нуля или более параметров типа:
        template<typename... Arguments> class vtclass;
        vtclass< > vtinstance1;
        vtclass<int> vtinstance2;
        vtclass<float, bool> vtinstance3;
    }

    constexpr функция — это одна из функций, возвращаемое значение которой вычисляемым во время компиляции, если это требуется для использования кода.
    constexpr — указывает, что возвращаемое значение функции является константой, значение которой может быть определено во время компиляции.
    constexpr float x = 42.0; // OK
    constexpr int i; // Error! Not initialized
    int j = 0;
    constexpr int k = j + 1; //Error! j not a constant expression

    Если объявлен элемент данных mutable , ему допустимо присвоить значение этому элементу данных из const функции-члена. https://docs.microsoft.com/ru-ru/cpp/cpp/mutable-data-members-cpp?view=msvc-170
    
    namespase - пространство имён https://docs.microsoft.com/ru-ru/cpp/cpp/namespaces-cpp?view=msvc-170
    namespase объявляется в PascalCase, а его методы NameSpase::Function, если в другом файле, даже если применён using. Можно добавлять в namespase код в разных частях, но использовать можно будет только после объявления. ::Function без namespase позволит обратиться к глобальному пространству.
    Все типы и функции стандартной библиотеки C++ объявляются в std пространстве имен или пространствах имен, вложенных в std.
    Если задать namespase без имени, то оно будет невидимо из вне

    virtual - при указании у базового класса, в дочерних функции с virtual будут переопределять базовую и не вызовут её, только дочернюю https://docs.microsoft.com/ru-ru/cpp/cpp/virtual-functions?view=msvc-170

    override — означает, что функция в производном классе переопределяет виртуальную функцию https://docs.microsoft.com/ru-ru/cpp/cpp/functions-cpp?view=msvc-170
    
    final — означает, что функция не может быть переопределена ни в одном из последующих производных классов https://docs.microsoft.com/ru-ru/cpp/cpp/functions-cpp?view=msvc-170

    static - сохраняет значение переменной в scope при повторном обращении к нему https://docs.microsoft.com/ru-ru/cpp/cpp/storage-classes-cpp?view=msvc-170

    inline — отдает компилятору команду заменять каждый вызов функции ее кодом. Подстановка может улучшить эффективность кода в сценариях, где функция выполняется быстро и многократно вызывается во фрагментах, являющихся критическими для производительности программы.
    https://docs.microsoft.com/ru-ru/cpp/cpp/inline-functions-cpp?view=msvc-170
    https://docs.microsoft.com/ru-ru/cpp/cpp/functions-cpp?view=msvc-170

    nullptr - NULL у указателя

    extern - импорт переменной https://docs.microsoft.com/ru-ru/cpp/cpp/extern-cpp?view=msvc-170

    operator - получает доступ к оператору для перегрузки
    https://docs.microsoft.com/ru-ru/cpp/cpp/operator-overloading?view=msvc-170
    https://docs.microsoft.com/ru-ru/cpp/cpp/function-call-cpp?view=msvc-170
    
    {//#Узнать
        enum - https://docs.microsoft.com/ru-ru/cpp/cpp/enumerations-cpp?view=msvc-170
        inline - https://docs.microsoft.com/ru-ru/cpp/cpp/inline-functions-cpp?view=msvc-170
        Видимо в указателях обращение будет через ->, а если этот qwe сделать ещё раз указателем, то это будет сам объект (*qwe).свйоство или это только с this такая тема? https://docs.microsoft.com/ru-ru/cpp/cpp/this-pointer?view=msvc-170
    }
}

{//#Типы #Размеры #Диапазоны
    Типы: https://docs.microsoft.com/ru-ru/cpp/cpp/fundamental-types-cpp?view=msvc-170
    Размеры: https://docs.microsoft.com/ru-ru/cpp/cpp/cpp-type-system-modern-cpp?view=msvc-170
    Диапазоны: https://docs.microsoft.com/ru-ru/cpp/cpp/data-type-ranges?view=msvc-170
    Константы: https://docs.microsoft.com/ru-ru/cpp/cpp/integer-limits?view=msvc-170
    Тривиальные типы, типы стандартной структуры, POD и типы литералов: https://docs.microsoft.com/ru-ru/cpp/cpp/trivial-standard-layout-and-pod-types?view=msvc-170#literal_types
    Преобразование типов: https://docs.microsoft.com/ru-ru/cpp/cpp/user-defined-type-conversions-cpp?view=msvc-170

    8 бит = 255 / 2 = 127
    16 бит = 65535 / 2 = 32767
        short, short int, signed short int
    32 бит = 4 294 967 295 / 2 = 2 147 483 647
        int, signed
    64 бит = 18 446 744 073 709 551 615 / 2 = 9 223 372 036 854 775 807
    long long, signed long long

    unsigned - только положительные
    signed - +-

    Тип	            Размер	Комментарий
    int	            4 байта	Выбор по умолчанию для целочисленных значений.
    double	        8 байт	Выбор по умолчанию для значений с плавающей запятой.
    bool	        1 байт	Представляет значения, которые могут быть или true, или false.
    char	        1 байт	Используйте для символов ASCII в старых строках в стиле C или в объектах std::string, которые никогда не будут преобразовываться в Юникод.
    wchar_t	        2 байта	Представляет "расширенные" символы, которые могут быть представлены в формате Юникод (UTF-16 в Windows, в других операционных системах возможно другое представление). Это символьный тип, используемый в строках типа std::wstring.
    unsigned char	1 байт	C++ не имеет встроенного типа Byte. Используется unsigned char для представления байтового значения.
    unsigned int	4 байта	Вариант по умолчанию для битовых флагов.
    long long	    8 байт	Представляет очень большие целочисленные значения.

    #Void https://docs.microsoft.com/ru-ru/cpp/cpp/void-cpp?view=msvc-170
    При использовании в объявлении указателя void указывает, что указатель является универсальным.
    void Указатель может указывать на функцию, но не на член класса в C++.
    Нельзя объявить переменную типа void.

    Объекты, не имеющие тип класса:
    Класс https://docs.microsoft.com/ru-ru/cpp/cpp/class-cpp?view=msvc-170
    Структура https://docs.microsoft.com/ru-ru/cpp/cpp/struct-cpp?view=msvc-170
        Пользовательский составной тип. Он состоит из полей или членов, которые могут иметь разные типы.
        Структура является такой же, как и класс, за исключением того, что ее члены по умолчанию имеют значение public.
    Объединение https://docs.microsoft.com/ru-ru/cpp/cpp/unions?view=msvc-170
    Перечисление — это пользовательский тип, состоящий из набора целочисленных констант, называемых перечислителями. https://docs.microsoft.com/ru-ru/cpp/cpp/enumerations-cpp?view=msvc-170
}

{//#Операторы
    https://docs.microsoft.com/ru-ru/cpp/cpp/cpp-built-in-operators-precedence-and-associativity?view=msvc-170
    https://docs.microsoft.com/ru-ru/cpp/cpp/operator-overloading?view=msvc-170

    {//#~
        Оператор дополнения до единицы: ~
        Побитовая инверсия
        0xFFEE = 1111111111101110
        ~1111111111101110 = 0000000000010001 = 10001 = 11 (Hex)
    }

    {//#::
        Оператор разрешения области https://docs.microsoft.com/ru-ru/cpp/cpp/scope-resolution-operator?view=msvc-170
        Доступ к классу, namespace
    }

    {//#. #->
        Операторы доступа к членам https://docs.microsoft.com/ru-ru/cpp/cpp/member-access-operators-dot-and?view=msvc-170
        Если в структуру, то через .
        Если через указатель на структуру, то ->
    }
}

{//#const
    const справа от объявления функции делает её только для чтения https://docs.microsoft.com/ru-ru/cpp/cpp/const-cpp?view=msvc-170
    Мы можем изменить значение в const функции: const_cast< CCTest * >( this )->number--; https://docs.microsoft.com/ru-ru/cpp/cpp/const-cast-operator?view=msvc-170
}

{//#Functions #Функции
    
}

{//#Литералы
    https://docs.microsoft.com/ru-ru/cpp/cpp/numeric-boolean-and-pointer-literals-cpp?view=msvc-170
    https://docs.microsoft.com/ru-ru/cpp/cpp/string-and-character-literals-cpp?view=msvc-170
    https://docs.microsoft.com/ru-ru/cpp/cpp/user-defined-literals-cpp?view=msvc-170

    В C++ имеется шесть основных категорий литералов: целое число, символ, число с плавающей запятой, строка, логическое значение и указатель. Начиная с C++ 11, можно определить собственные литералы на основе этих категорий, чтобы предоставить синтаксические сочетания клавиш для общих идиом и повышения безопасности типов.

    e или E - у числа 10e2 добавит 2 нуля, у дробного 10.123e2 = 1212.3 перенесёт в целую

    Литералы с плавающей запятой по умолчанию имеют тип double. Используя суффиксы f l F L (суффикс не учитывает регистр), литерал можно указать как float или long double.
    U - unsigned

    unsigned val_1 = 328u;                  // Unsigned value
    long val_2 = 0x7FFFFFL;                 // Long value specified
                                            //  as hex literal
    unsigned long val_3 = 0776745ul;        // Unsigned long value
    auto val_4 = 108LL;                           // signed long long
    auto val_4 = 0x8000000000000000ULL << 16;     // unsigned long long

    nullptr - NULL у указателя

    Двоичный литерал можно задать с помощью префикса 0B или 0b и последовательности, состоящей из 1 и 0:
    auto x = 0B001101 ; // int
    auto y = 0b000001 ; // int
    Число начинающееся с нуля будет переведено в восьмеричную си: 0377
        Восьмеричная escape-последовательность — это обратная косая черта, за которой следует последовательность из одной до трех восьмеричных цифр. Восьмеричная escape-последовательность завершается на первом символе, который не является восьмеричной цифрой, если он встречается раньше, чем третья цифра. Наибольшее возможное восьмеричное значение — \377
    Число начинающееся с 0x будет переведено в шеснадцатеричную си: 0x3fff

    В одинарных кавычках указывается символ
    В двойных кавычках строки, которые будут иметь тип const char [n], где n — это длина массива в байтах
}

{//#Escape-последовательности
    https://docs.microsoft.com/ru-ru/cpp/cpp/string-and-character-literals-cpp?view=msvc-170

    Значение	Escape-последовательность
    новая строка	\n
    обратная косая черта	\\
    горизонтальная табуляция	\t
    вопросительный знак	? или \?
    вертикальная табуляция	\v
    одинарная кавычка	\'
    BACKSPACE	\b
    двойная кавычка	\"
    Возврат каретки	\r
    нуль-символ	\0
    Смена страницы	\f
    восьмеричный	\ooo
        Восьмеричная escape-последовательность — это обратная косая черта, за которой следует последовательность из одной до трех восьмеричных цифр. Восьмеричная escape-последовательность завершается на первом символе, который не является восьмеричной цифрой, если он встречается раньше, чем третья цифра. Наибольшее возможное восьмеричное значение — \377
    оповещение (колокольчик)	\a
    шестнадцатеричный	\xhhh
        Шестнадцатеричная escape-последовательность — это обратная косая черта, за которой следует символ x , за которым следует последовательность из одной или нескольких шестнадцатеричных цифр. Начальные нули пропускаются. В обычном или U8 символьном литерале самое высокое шестнадцатеричное значение — 0xFF. В расширенном символьном литерале с префиксом L или u максимальное шестнадцатеричное значение — 0xFFFF. В расширенном символьном литерале с префиксом U максимальное шестнадцатеричное значение — 0xFFFFFFFF.
}

{//#Область
    https://docs.microsoft.com/ru-ru/cpp/cpp/scope-visual-cpp?view=msvc-170

    6 областей:

    Глобальная область Глобальное имя — это объявление, объявленное вне любого класса, функции или пространства имен. Однако в C++ даже эти имена существуют с неявным глобальным пространством имен. Область глобальных имен расширяется с точки объявления до конца файла, в котором они объявляются. Для глобальных имен видимость также регулируется правилами компоновки , которые определяют, является ли имя видимым в других файлах программы.

    Область пространства имен Имя, объявленное в пространстве именвне любого класса или определения перечисления или блока функции, видимо от его точки объявления до конца пространства имен. Пространство имен может быть определено в нескольких блоках для разных файлов.

    Локальная область Имя, объявленное внутри функции или лямбда-выражения, включая имена параметров, имеет локальную область. Они часто называются "локальными". Они видны только от их точки объявления до конца функции или тела лямбда-выражения. Локальная область — это разновидность области блока, которая обсуждается далее в этой статье.

    Область класса Имена членов класса имеют область класса, которая расширяется по всему определению класса независимо от точки объявления. Доступность членов класса дополнительно контролируется с помощью publicprivateprotected ключевых слов, и. Доступ к открытым или защищенным членам возможен только с помощью операторов выбора членов (. или -) или операторов указателя на член (. или - ).

    Область инструкции Имена, объявленные в ifwhile операторе,, или, switch видимы до конца блока инструкции.

    Область действия функцииМетка имеет область видимости функции, что означает, что она видна в теле функции, даже до ее точки объявления. Область функции позволяет писать инструкции goto cleanup , например перед cleanup объявлением метки.
}

{//#Классы
    https://docs.microsoft.com/ru-ru/cpp/cpp/classes-and-structs-cpp?view=msvc-170

    Существует три типа классов: структура, класс и объединение.
    class Ключевое слово объявляет тип класса или определяет объект типа класса. https://docs.microsoft.com/ru-ru/cpp/cpp/class-cpp?view=msvc-170
    struct Ключевое слово определяет тип структуры и (или) переменную типа структуры. https://docs.microsoft.com/ru-ru/cpp/cpp/struct-cpp?view=msvc-170
    Union — это определяемый пользователем тип, в котором все члены совместно используют одно и то же расположение в памяти. Это определение означает, что в любой момент времени a объединение может содержать не более одного объекта из списка членов. Это также означает, что независимо от того, сколько членов a объединения , оно всегда использует достаточно памяти для хранения самого большого элемента. https://docs.microsoft.com/ru-ru/cpp/cpp/unions?view=msvc-170
}

{//#лямбда-выражения
    Это стрелочные функции в js https://docs.microsoft.com/ru-ru/cpp/cpp/examples-of-lambda-expressions?view=msvc-170
    auto f1 = [](int x, int y) { return x + y; };
}

{//#Массив
    int num[n]{5, 6}; зануляет все элементы, кроме 0 и 1, а 0 и 1 присвоит 5 и 6. Если не зедать допустим {0}, то заполнит массив значениями, которые висят в памяти
}