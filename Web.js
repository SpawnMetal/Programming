{//#Использовать
	#Соглашения JavaScript
	#JSDoc и readme.md
	#Git
	#VSCode #VSCodeРасширения
	#WebStorm?
	#MVC
	#SASS
	#React
	#MobX
	#Material Design
	#ES6+
	#Lodash
	#Jest
	#Node.js
	#Next.js
	#Typescript
	#БЭМ
	#REST API
}

{//#Git
	Git (произносится «гит») — распределённая система управления версиями.
	https://ru.wikipedia.org/wiki/Git
	Офф: https://git-scm.com/docs
	Atlassian: https://www.atlassian.com/ru/git/tutorials/setting-up-a-repository
	https://youtu.be/zZBiln_2FhM
	https://habr.com/ru/post/106912
	Путь от и до: https://rustycrate.ru/руководства/2016/03/07/contributing.html
	Плагин для Chrome - Octotree - GitHub code tree: https://chrome.google.com/webstore/detail/octotree-github-code-tree/bkhaagjahfmjljalopjnoealnfndnagc?hl=ru
	
	{//#Обозначения
		Repository - репозиторий, в нём находится весь проект, как правило имеет задаём имя upstream
		Branch - ветка
		Fork - ответвление, копия репозитория (в переводе вилка). Запрос на слияние форков и будет pull request
		HEAD - последний коммит в ветке, можно юзать везде, где указывается id
		origin - имя текущего репозитория. Указывается в команде git remote add для работы со своим репозиторием / форкой. Создаётся при git clone
		upstream - имя основной серверной репы. Указывается в команде git remote add для работы с репой источником, исходником, оригиналом
		master - основная ветка в репе, которая создаётся автоматом вместе с репой
		. - все, например, файлы
		& - для перечисления нескольких команд git и cmd. В powershell для перечисления нескольких команд используется точка с запятой
	}
	
	{//#Персональные данные
		git config --global user.name <"name"> - если name не указан, выведет текущий UserName, иначе задаст его
		git config --global user.email <"email"> - если email не указан, выведет текущий UserEmail, иначе задаст его
		git config --global http.sslverify false - отключить использование сертификата
	}
	
	{//#Общие
		git --version - версия
		git --help - список команд
		gitk --all& - графический интерфейс гита
		.gitignore - файл для объектов исключений, которые не будем добавлять в отслеживание, проект
	}
	
	{//#Проект
		#clone: git clone <remote_url> - скопировать содержимое проекта. В текущую папку git clone <remote_url> . - с точкой вконце, скопирует содержимое в корень текущей директории, не создавая папку. Команда создаёт скрытую системную папку ".git" и делает git add origin
		git init - инициализация проекта. Команда создаёт скрытую системную папку ".git"
		git remote add <remote_name> <remote_url> - привязать проект remote_url к названию remote_name. Не ветке, просто названию, чтобы не писать длинную ссылку постоянно. Например remote_name = origin
		git remote show <remote_name> - показать информацию об удалённом репозитории, ветке, HEAD и т д
		git remote -v - покажет все добавленные remote_url и их remote_name
		git remote rm <remote_name> - удалить привязку remote_name к remote_url из списка
	}
	
	{//#Комбо
		#Персональные данные: 	git config --global user.name "name" & git config --global user.email "email" & git config --global http.sslverify false
		Init & GitHub:			git init & git add . & git commit -m "First commit" & git branch -M main & git remote add origin https://github.com/SpawnMetal/lib.git & git push -u origin main
		#Файлы Update: 			git add . & git commit -m "Updated date" & git push
		#Файлы Синхронизация:	git add . & git commit -m "" & git pull origin <branch> & git push
		#Ветки Удаление ветки:	git checkout develop & git branch -d <branch> & git push <remote_name> <branch> --delete
	}
	
	{//#Файлы
		git push -u <remote_name> <branch> - Заливает новую branch в remote_name. Создаёт pull request, если ветка уже есть. -u -это upstream, мол сервер. Например выполнив команду git push -u origin master вы устанавливаете связь между той веткой, в которой вы находитесь и веткой master на удалённом сервере. Команду требуется выполнить единожды, чтобы потом можно было отправлять/принимать изменения лишь выполняя git push из ветки без указания всяких алиасов для сервера и удалённых веток. Это сделано для удобства.
		git push - залить в текущую ветку на сервер, ранее должна быть установлена связь git push -u
		git push <remote_name> <branch> - заливает изменения по <remote_name> в <branch>
		Флаг --force отменяет необходимость в pull и подгоняет ветку удаленного репозитория под вашу локальную ветку, удаляя любые вышестоящие изменения, которые могли быть внесены с момента последнего выполнения вами команды pull.
		
		git pull <remote_name> <branch> - шоткод для команд git fetch и git merge. <remote_name> и <branch> по умолчанию текущие. Получит с сервера и объединит с локальной.
		При работе с fork не забывать пуллить свою форку с remote.
		--rebase либо git rebase - Перебазирует ветку на текущий и дальнейшие коммиты, которые будут попадать в историю коммитов (например master) на момент её слияния с перебазированной веткой (develop), а не на момент создания коммита в прошлом.
		Т.е. коммит сделанный 3 года назад в develop, при слиянии попадёт в самый верх коммитов master. См. Commits on Jun 22, 2022 https://github.com/SpawnMetal/examples/commits/master
		Использовать при пулле из upstream в origin https://www.atlassian.com/ru/git/tutorials/syncing/git-pull
		git rebase --skip позволит пропустить конфликт при git rebase, для каждого конфликта команда вводится отдельно

		git add <file> или . - добавляет file или все файлы в отслеживаемые для добавления в коммит. Несколько перечисляются через пробел.
		git fetch <remote_name> <branch> - получить изменения, но не делать слияние - git merge.
		git merge <branch> - объединить скачанные изменения с текущей веткой, либо branch, если указана, в таком случае из branch будут получены все изменения
		git commit -m <text> - зафиксировать отслеживаемые файлы, создав коммит. -m = -message. text указывается в двойных кавычках. После ввода команды будет выведен хэш коммита
		git show <id> просмотр информации о теге, коммите, ветке

		git status - показать текущую ветку и изменённые файлы
		git clone см #clone
		git checkout <id>, <file> либо <tag> - переключиться на id коммита, tag либо откатить файл до индекса. Работает с тремя различными объектами: файлами, коммитами и ветками. Команда открепляет HEAD, что не позволит сохранить изменения при неизбежном переключении обратно в ветку.
		
		Удалить индексы, не файлы, код не бэкапнется. Несколько файлов перечисляются через пробел:
		git reset <file>
		git rm --cached <file>
		git rm -r .
		
		git reset --hard id либо origin/master - откатит код до коммита id либо ветки origin/master, стерев историю
		git restore <file> - откатит до коммита (бэкапнет код) не проиндексированные файлы, проиндексированные сначала отменить: git reset <file>
		git restore --source <id_коммита> <file> - откатит код до коммита id сохранив историю, создав новый коммит
		
		git show <commit_id> - покажет информацию о коммите и его полный id
		git commit --amend -m "" - переименовать либо отредактировать текст последнего коммита
		git log -кол-во --pretty=oneline - покажет информацию по кол-ву последних коммитов, теги, сообщения коммитов, HEAD. Напротив последней залитой будет красным написано origin/branch

		get tag -a - аннотированный тег, некое название коммита https://www.atlassian.com/ru/git/tutorials/inspecting-a-repository/git-tag https://git-scm.com/book/ru/v2/Основы-Git-Работа-с-метками
		git tag -a v1.0.1 -m "" - создать тег
		git tag -a -f <tag> -m "" <id> - переименовать тег у коммита id
		git tag -a <tag> <id> - задать тег любому коммиту id
		git tag - просмотр списка тегов
		git show <tag> просмотр информации о теге, коммите, ветке
		git tag -d <tag> - удалить тег
	}
	
	{//#Ветки
		git branch - выводит список веток и ветку в которой я нахожусь. В VSCode слева снизу
		git branch <branch> - создаст ветку name, копию текущей
		git branch -d <branch> - удалит ветку name локально. Необходимо сначала переключиться на другую. -D, если необходимо удалить принудительно (--force)
		git pull origin develop - скачать новую ветку с сервера
		git push <remote_name> <branch> --delete - удаляет ветку на сервере
		git branch -m <branch> - переименовать текущую ветку в name, -M, если необходимо переименовать, даже если такая ветка уже сушествует
		git checkout <branch> - переключиться на ветку name
		git checkout -b <branch> - создать и переключиться на ветку name, копию текущей
		git checkout -b <branch> <remote_name> - создать и переключиться на ветку branch, ответвление от name_from
		git checkout -b <branch> <repository_name_from>/<branch> - скопировать удалённую ветку и переключиться в неё
		git push -u <remote_name> <branch> - Заливает НОВУЮ!!! branch в remote_name. Создаёт pull request при необходимости. -u: upstream. remote_name: название ссылки, которое устанавливал с помощью git remote add <remote_name> <remote_url>. branch: ветка, которую будем заливать.
		git show <branch> просмотр информации о теге, коммите, ветке

		{//#Release branches
			Ветви релизов (release branches) используются для подготовки к выпуску новых версий продукта.
			Могут порождаться от: develop
			Должны вливаться в: develop и master
			Соглашение о наименовании: release-*
		}

		{//#Hotfix branches
			Они порождаются необходимостью немедленно исправить нежелательное поведение производственной версии продукта.
			Могут порождаться от: master
			Должны вливаться в: develop и master
			Соглашение о наименовании: hotfix-*
		}

		{//#Feature branches
			Ветви функциональностей (feature branches) обычно существуют в репозиториях разработчиков (origin), но не в главном репозитории (upstream).
			Соглашение о наименовании: всё, за исключением master, develop, release-* или hotfix-*
			Могут пораждаться от develop
			Должны вливаться в develop
		}
	}

	{//#Откат изменений
		https://www.atlassian.com/ru/git/tutorials/undoing-changes
		
		Локально:
		Отменить индексирование (add): git reset <file>. Код не бэкапнется. Ещё можно git rm --cached <file> или -r . - удалить file или файлы рекурсивно из отслеживаемых. Несколько перечисляются через пробел
		Откатить до индекса: git checkout <file>
		Откатить до коммита: git restore
		Удалить из индексирования и откатить до коммита всё и без вопросов: git reset . --quiet & git restore .
		При pull, если необходимо отменить всё: git clean -f, ээфект такой же, как при git checkout другая_ветка --force, затем переключаемся обратно
		Откат изменений к ветке, например master (полностью скачивает и заменяет коммиты, можно из upstream и т. д.): git reset --hard origin/master
		
		Название коммита: Как изменить название последнего локального коммита либо внести в него изменения? git commit --amend -m ""
		Удалить ветку: git branch -d <branch>
		
		Remote:
		Удалить ветку: git push <remote_name> <branch> --delete
		
		Локально и remote:
		Откатить до коммита с удалением истории. Использовать в своей репе и ветке. В upstream убедиться, что удалённые коммиты уже не скачаны остальными:  git reset --hard id & git push --force
		Удалить все коммиты, включая самый первый: git update-ref -d HEAD, затем всё коммитим и git push --force
		Откатить файлы к коммиту, сохранив историю, как если бы скачали коммит и этими файлами заменили свои: git restore --source <id_коммита> <file> & git push
	}

	{//#Vim #Vi
		Вирусный редактор текста, работать в английской раскладке
		https://youtu.be/6H0GDM8ExB8
		esc - переход в командный режим
		i - переход в режим редактирования текста
		esc, Shift + Z два раза - сохранить и выйти, работать в английской раскладке
		esc, Shift + ; пишем :q! - выйти без сохранения
	}
}

{//#JavaScript #JS
	JavaScript - Мультипарадигменный (расширяемый и использующий другие языки) язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией языка ECMAScript. В него конвертируются: TypeScript, CoffeeScript, Flow, Dart.
	JavaScript работает в одном потоке, поэтому об асинхронности не может быть речи, event loop и call stack сделали асинхронность возможной (сторонние API).
	JavaScript интерпретируемый язык - выполняется сразу, в отличае от компиляции

	{//#js2021
		Конструкции наподобие a && (a = b) теперь можно записывать как a &&= b, a ||= b, a ??= b
		Числа можно отделять с помощью _, не влияя на их структуру 1000000000 === 1_000_000_000
	}

	{//#EventLoop
		https://developer.mozilla.org/ru/docs/Web/JavaScript/EventLoop
		https://youtu.be/8aGhZQkoFbQ?t=773
		Параллелизм/Многопоточность в JavaScript работает за счёт цикла событий (event loop), который отвечает за выполнение кода, сбора и обработки событий и выполнения подзадач из очереди (queued sub-tasks).

		#Stack #Стек
		Вызов любой функции создаёт контекст выполнения (Execution Context). При вызове вложенной функции создаётся новый контекст, а старый сохраняется в специальной структуре данных - стеке вызовов (Call Stack).

		#Queue #Очередь
		Среда выполнения JavaScript содержит очередь задач. Эта очередь — список задач, подлежащих обработке. Каждая задача ассоциируется с некоторой функцией, которая будет вызвана, чтобы обработать эту задачу.
		Когда стек полностью освобождается, самая первая задача извлекается из очереди и обрабатывается. Обработка задачи состоит в вызове  ассоциированной с ней функции с параметрами, записанными в этой задаче. Как обычно, вызов функции создаёт новый контекст выполнения и заносится в стек вызовов.
		Обработка задачи заканчивается, когда стек снова становится пустым. Следующая задача извлекается из очереди и начинается её обработка.

		#Heap #Куча
		Объекты размещаются в куче. Куча — это просто имя для обозначения большой неструктурированной области памяти.

		{//#Микро #Макро #Микрозадачи #Макрозадачи
			https://learn.javascript.ru/event-loop
			https://habr.com/ru/post/264993/
			https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/#why-this-happens

			Порядок, сначала выполняются микрозадачи в рамках макрозадачи, затем очередь микрозадач:
			МАкрозадача
				МИкрозадачИ
					Очередь мИкрозадач
					Очередь мАкрозадач

			Может так случиться, что задача поступает, когда движок занят чем-то другим, тогда она ставится в очередь.
			Очередь, которую формируют такие задачи, называют «очередью макрозадач» (macrotask queue, термин v8).

			Вызов .then(func) у решённого промиса немедленно ставит в очередь микрозадачу. Вот почему promise1 и promise2 выводятся в журнал после script end, ведь текущий исполняемый сценарий должен завершиться до того как начнут обрабатываться микрозадачи. promise1 и promise2 выводятся в журнал до setTimeout ибо микрозадачи всегда развёртываются до следующей большой задачи.

			Итого
			Сначала выполняются микрозадачи
			setTimeout ставит в очередь большую задачу
			promise ставит в очередь микрозадачу

			В мире ECMAScript микрозадачи именуют заданиями («jobs»).

			Если мы хотим запустить функцию асинхронно (после текущего кода), но до отображения изменений и до новых событий, то можем запланировать это через queueMicrotask.
			Поэтому queueMicrotask можно использовать для асинхронного выполнения функции в том же состоянии окружения.
		}
	}

	{//#Преобразование #Примитивы #Хинт #Hint
		Преобразование объектов в примитивы https://learn.javascript.ru/object-toprimitive
		В отсутствие Symbol.toPrimitive и valueOf, toString обработает все примитивные преобразования.
		Сначала вызывается метод obj[Symbol.toPrimitive](hint), если он существует,
		В случае, если хинт равен "string"
		происходит попытка вызвать obj.toString() и obj.valueOf(), смотря что есть.
		В случае, если хинт равен "number" или "default"
		происходит попытка вызвать obj.valueOf() и obj.toString(), смотря что есть.
		Все эти методы должны возвращать примитив (если определены).
	}
}

{//#ECMAScript #ES
	ECMAScript (ES, European Computer Manufacturers Association) - это встраиваемый расширяемый не имеющий средств ввода-вывода язык программирования, используемый в качестве основы для построения других скриптовых языков. Расширения (реализации) языка: JavaScript, JScript, ActionScript, SpiderMonkey, V8.
	ES6-8 https://youtu.be/Ti2Q4sQkNdU
	ES2020 / JS2020 https://youtu.be/7TpAN4FISeI
}

{//#MERN
	Стек MERN - это JavaScript-стек, разработанный для упрощения процесса разработки. MERN включает в себя четыре компонента с открытым исходным кодом: MongoDB, Express, React и Node.js.
	
	Пример https://youtu.be/ivDjWYcKDZI
	Находится в папке mern-course
	Запуск клиента и сервера для разработки: npm run dev
	
	{//#Публикация на хостинге
		Домен взят на https://2domains.ru
		Хостинг, прост в настройках и поддерживает node, взят на https://vscale.io
		Рекомендованная ОС - Ubuntu
		512 МБ ОЗУ - мало, нужно больше
		Через SSH Putty ходим, обновляем всё ПО sudo apt update, ставим Git, клонируем, гуглим установку Node.js
		npm run client:install - установит node_modules для клиента
		Билдим клиент npm run client:build
		Настроить config/production.json на хостинге
		Настроить в админке мерна ip сервера для доступа к БД
		Чтобы при закрытии консоли сервер не вырубался ставим глобально npm install pm2 -g
		Запускаем находясь в папке с проектом: pm2 start npm -- start
		
		#MongoDB - npm i mongoose
		#Express - npm i express
		#React - npx create-react-app client
		#Node.js
	}
	
	Material Design ставится соответственно в папку client
	
	"proxy": "http://localhost:5000", прописывается в client/package.json, чтобы запросы с клиента шли по серверной ссылке, на сервер, а не на клиент
	
	{//#MongoDB
		MongoDB — документо ориентированная система управления базами данных, не требующая описания схемы таблиц. Считается одним из классических примеров NoSQL-систем, использует JSON-подобные документы и схему базы данных.
		Применяется в веб-разработке, в частности, в рамках JavaScript-ориентированного стека MEAN.
		https://www.mongodb.com
		Пример кода: C:\program files\open server\ospanel\domains\localhost\mern-course
		
		npm i mongoose
	}
	
	{//#Express
		https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
		Используется для роутинга, http-запросов, поднятия сервера и т. п.
		Express.js, или просто Express, фреймворк web-приложений для Node.js, реализованный как свободное и открытое программное обеспечение под лицензией MIT. Он спроектирован для создания веб-приложений и API.
		Де-факто является стандартным каркасом для Node.js.
		
		npm i express
		
		{//#middleware
			https://expressjs.com/ru/guide/writing-middleware.html#:~:text=%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%20%D0%BF%D1%80%D0%BE%D0%BC%D0%B5%D0%B6%D1%83%D1%82%D0%BE%D1%87%D0%BD%D0%BE%D0%B9%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8%20(middleware)%20%2D,%D0%BA%D0%B0%D0%BA%20%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%2C%20%D0%BE%D0%B1%D0%BE%D0%B7%D0%BD%D0%B0%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F%20%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9%20next%20.
			https://developer.mozilla.org/en-US/docs/Glossary/Middleware
			Функции промежуточной обработки (middleware) - это функции, имеющие доступ к объекту запроса (req), объекту ответа (res) и к следующей функции промежуточной обработки в цикле “запрос-ответ” приложения.
			Следующая функция промежуточной обработки, как правило, обозначается переменной next.
		}
	}
	
	{//#React
		https://reactjs.org
		https://developer.mozilla.org/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
		React (иногда React.js или ReactJS) — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Разработчики Facebook.
		В качестве библиотеки для разработки пользовательских интерфейсов React часто используется с другими библиотеками, такими как Redux либо Mobx.
		Топ-10 библиотек для React на GitHub https://habr.com/ru/company/ruvds/blog/345060/
		Material UI, React-Bootstrap https://react-bootstrap.github.io , Ant-Design, StoryBook, Gatsby, Enzyme, Blueprint, Spectacle, Elemental UI, Grommet, Mozaik
		
		https://ru.reactjs.org/docs/create-a-new-react-app.html
		https://create-react-app.dev
		Create React App сразу всё ставит.
		Create React App — удобная среда для изучения React и лучший способ начать создание нового одностраничного приложения на React.
		Инструмент настраивает среду для использования новейших возможностей JavaScript, оптимизирует приложение для продакшена и обеспечивает комфорт во время разработки. Вам понадобятся Node.js не ниже версии 8.10 и npm не ниже версии 5.6 на вашем компьютере. Для создания проекта выполните команды:
		npm install react-scripts@latest - обновление инструментов
		npm i react-router-dom - для роутинга в react

		React отработает некий один клик, если их много.
		React позволяет использовать synthetic events - обёртка эвентов для кроссбраузерности, накручивает свои механизмы.
		Презентационный компоненты выводит данные и работает с props, а контейнер компонент формирует их для презентационного и работает с state.
		В render нельзя менять состояние, иначе приложение уйдёт в рекурсию.
		Если отнаследоваться от Pure Component, то React автоматически реализует shouldComponentUpdate, оптимизируя работу приложения.
		Для оптимизации приложения используются shouldComponentUpdate, Pure component, React.memo() - для функциональных компонентов.
		Для отрисовки компонентов используются функциональные компоненты, они более быстрые, но если нужны доступы до жизненных этапов в более сложном компоненте, тогда нужно использовать классовый компонент.
		Хуки позволяют в функциональных компонентах взаимодействовать с жизненными этапами и механизмами React.
		prop drilling - множественная передача пропсов, используется контекст, чтобы это избежать либо MobX.
		Для валидации пропсов используется библиотека prop-types - динамическая типизация. Flow - для статической, аналог - Typescript
		eject нужен, чтобы получить доступ к конфигурации приложения, если оно уже было настроено с помощью WebPack и настроить его отдельно.
		
		{//#Примеры
			create-react-app в localhost\my-app
			npx create-react-app my-app, установит тесты, git, webpack, babel и др

			localhost\react
			localhost\react2 https://youtu.be/xJZa2_aldDs
		}		
		
		{//#Хук #Hook
			https://ru.reactjs.org/docs/hooks-intro.html
			Хуки — нововведение в React 16.8, которое позволяет использовать состояние и другие возможности React без написания классов.
			По конвенции при создании своего хука функция должна начинаться с use
		}

		Хорошей практикой считается описание входящих свойств в нужный компонент, чтобы избегать потенциальных ошибок с передачей типов значений
		Для этого используется npm i prop-types

		{//#useState
			Пример в localhost\react2
			const [state, setState] = useState(initialState)
			Возвращает текущее значение в первом параметре деструктуризации и задаёт с помощью хука (второй параметр) начальное состояние значений.
			Если в setState передаётся callback, то мы будем иметь доступ к предыдущенму значению: setState(prev => prev + 1)
			Функция возвращает всегда два значения в массиве, первое - это дефолтное состояние, заданное сейчас, а второй элемент - коллбэк, с помощью него можно менять значения
		}

		{//#useEffect
			useEffect(() => {}, props.source)
			Запускается после рендера и обновления.
			При асинхронном получении данных не отображает для SEO
			Передаётся два параметра, в первом коллбэк, во втором массив со списком зависимостей, чтобы отрабатывал коллбэк, переданный в первый параметр
			Чтобы функция отработала один раз, передаётся пустой массив
		}

		{//#useCallback
			https://www.youtube.com/watch?v=9KJxaFHotqI&t=3579s
			При setState происходит рендер компонента и при переданном useEffect callback'е он будет срабатывать из-за пересоздания функций в компоненте.
			Таким образом будет вызываться callback лишний раз при вызове одного из setState в компоненте.
			Чтобы этого избежать, мы оборачиваем callback в useCallback, тем самым как бы кэшируем функцию и при рендере компонента callback лишний раз вызываться не будет.
		}
		
		{//#ReactDeveloperTools
			https://github.com/facebook/react/tree/master/packages/react-devtools
			React DevTools доступен как встроенное расширение для браузеров Chrome и Firefox. Этот пакет позволяет вам отлаживать приложение React в другом месте (например, в мобильном браузере, встроенном веб-просмотре, Safari внутри iframe).
			Он работает как с React DOM, так и с React Native.
		}

		{//#React Native
			https://facebook.github.io/react-native
			Вы можете использовать React Native сегодня в своих существующих проектах для Android и iOS, или вы можете создать совершенно новое приложение с нуля.
		}

		{//#React Router
			https://reacttraining.com/react-router
			Для реализации алгоритмов навигации используется библиотека React Router.
			React Router - популярная и полная библиотека маршрутизации для React.js, которая синхронизирует пользовательский интерфейс с URL-адресом. Он поддерживает ленивую загрузку кода, динамическое сопоставление маршрутов и обработку перехода по местоположению и первоначально был вдохновлен маршрутизатором Ember.
		}

		{//#shouldComponentUpdate
			Используется для отмены рендера, если его делать не нужно, а состояние поменялось
		}

		{//#componentDidMount
			Срабатывает, когда компонент готов для работы. После этого можно использовать асинхрон.
		}

		{//#React.Fragment #Fragment
			Используется, чтобы положить несколько элементов в один конейнер, например div, но сам div отображаться не будет, оптимизируя тем самым структуру dom
			<React.Fragment>
				Элементы
			</React.Fragment>
			Так же можно использовать структуру <></>
		}
	}

	{//#Next.js
		Пример 1: localhost/create-next-app https://youtu.be/_EOrSmjdOZQ
		Пример 2: localhost/nextjs
		
		Next.js — бесплатный и открытый JavaScript фреймворк, созданный поверх React.js для создания SSR-приложений.
		Помогает создавать пользовательский интерфейс приложений (чаще всего, с помощью React, не придерживаясь его принципа — SPA (Single Page Application)).
		SSR — принцип, используемый Next.js. Переводится с английского языка как «Отрисовка на стороне сервера». SSR помогает снизить нагрузку на устройство, ведь большинство операций производимых в приложении, происходит на сервере, а не на устройстве пользователя.
		SSR также помогает улучшить SEO, так как в обычном подходе, который использует React (подход SPA), все отрисовывается на стороне клиента (браузера), поэтому код страниц подгружается когда пользователь заходит на страницу, но робот поисковых систем может только просмотреть изначальный код страницы, ещё не обработанный React.
		SSR помогает избежать эту проблему изначальной загрузкой контента на всех страницах сайта.

		Установка: npx create-next-app
		<Link href=""><a>Текст</a></Link> реализует динамическую загрузку контента без перезагрузки страницы
		Папка pages - зарезервирована для создания страниц, адрес в строке сайта = названию файла
		filder/index.js - переход к странице в адресе folder, исполняющим файлом будет index.js
		<style jsx global></style> для установки глобальных стилей, а не только для компонента. localhost/create-next-app/components/MainLayout.js
		Пользовательский "Документ" pages/__document.js для переосмысления и возможности переписать html документ https://nextjs.org/docs/advanced-features/custom-document
		pages/__app.js используется при инициализации страниц https://nextjs.org/docs/migrating/from-create-react-app
		У error.module.scss после обработки next локализует стили за счёт .module в названии файла
		next-env.d.ts - namespace описаны некоторые параметры для работы с next. <reference types="next/types/global" /> означает, что ненужно импортировать React в те файлы, где используется jsx
		getServerSideProps серверная функция. export default отрабатывает на сервере при открытии страницы в адресной строке для предварительной отрисовки - getServerSideProps + export default на клиенте и сервере. Переход на страницу из другой - getServerSideProps + export default только на клиенте
	}

	{//#SSR
		https://blog.vverh.digital/2020/what-is-it-ssr-chto-takoe/
		SSR – (анг. аббревиатура от Server Side Rendering) это технология, которая позволяет, с помощью Node.js, запускать JavaScript код на сервере (а не в браузере как обычно) и готовый результат отправлять пользователю, избегая лишней нагрузки на его браузер и компьютер.
		
		Зачем нужен SSR
		В первую очередь, для оптимизации скорости работы сайта и SEO продвижения.
	}
		
	{//#SEO
		https://ru.wikipedia.org/wiki/Поисковая_оптимизация
		Поисковая оптимизация (англ. search engine optimization, SEO) — комплекс мероприятий по внутренней и внешней оптимизации для поднятия позиций сайта в результатах выдачи поисковых систем по определённым запросам пользователей, с целью увеличения сетевого трафика (для информационных ресурсов) и потенциальных клиентов (для коммерческих ресурсов) и последующей монетизации (получение дохода) этого трафика. SEO может быть ориентировано на различные виды поиска, включая поиск информации, товаров, услуг, изображений, видеороликов, новостей и специфические отраслевые поисковые системы.
	}
	
	{//#Node.js
		Область видимости верхнего уровня в Node не является глобальной областью видимости

		Сервер Node.js без фреймворка https://developer.mozilla.org/ru/docs/Learn/Server-side/Node_server_without_framework

		{//#npm
			https://www.npmjs.com
			
			npm - node пакетный менеджер
			https://habr.com/ru/post/133363/
			npm init - инициализировать проект, -y параметр для инициализации без вопросов. Затем npm i - установит все модули и зависимости из package.json, поэтому node_modules качать отдельно никому и никуда не нужно
			npm run command, команду получает из package.json параметр "scripts" текущей папки
			Если npm run command "npm run start --prefix client", command находится в другой папке, то в команду добавляется --prefix с путём к папке client
			Для запуска нескольких приложений, например клиента и сервера, в json используется параметр пакета concurrently: "dev": "concurrently \"npm run server\" \"npm run client\""
			npm -v - версия npm
			npm install package_name - установка пакета package_name локально. За место install можно просто i. Несколько пакетов перечисляются через пробел
			npm install http-server -g - установка пакета package_name глобально
			npm show react version - установленная версия пакета
			npm view git version - доступная версия пакета на сервере
			npm view git - информация о пакете
			--save-dev либо -D - пакет установленный с помощью данного параметра, будет доступен только для разработки, добавлен в devDependencies
			--save - dependencies
			npm uninstall git -g

			npm i nodemon - динамическое обновление сайта при внесении изменения в код, используется для разработки и запускается с помощью команды nodemon script.js
			npm i concurrently - для одновременного запуска скриптов, например backend и frontend
			npm i config - пакет для работы с конфигурационным файлом. Создаётся папка config в которой default.json и production.json https://www.npmjs.com/package/config

			Получени ip клиента на сервере
			https://www.npmjs.com/package/request-ip
			npm i request-ip

			Смена раскладки и транслит
			https://github.com/alexanderkx/ai-switcher-translit
			npm i ai-switcher-translit
			
			Библиотека для шифрования / хеширования
			https://www.npmjs.com/package/bcryptjs
			npm i bcryptjs
			
			An express.js middleware for validator. Для проверки полей на валидацию
			https://www.npmjs.com/package/express-validator
			npm install express-validator
			
			#Токен jsonwebtoken библиотека для генерации веб-токенов JSON
			https://www.npmjs.com/package/jsonwebtoken
			npm i jsonwebtoken
			
			Materialize, Material Design
			https://materializecss.com/
			npm install materialize-css@next
			
			DOM bindings for React Router.
			https://www.npmjs.com/package/react-router-dom
			npm install --save react-router-dom
			
			Сокращение ссылок
			https://www.npmjs.com/package/shortid
			npm i shortid
			
			Добавление кросс-операционных переменных для запуска скрипта, настройки прописываются у команд в package.json - scripts
			https://www.npmjs.com/package/cross-env
			npm install --save-dev cross-env

			Поддельный REST API
			https://www.npmjs.com/package/json-server
			npm install -g json-server
			Запуск сервера с db: json-server --watch db.json --port 4200 --delay 450 (сокращённо: json-server -w db.json -p 4200 -d 450)

			Серверный fetch
			https://www.npmjs.com/package/isomorphic-fetch
			npm i --save isomorphic-unfetch

			Индикатор загрузки
			https://www.npmjs.com/package/nextjs-progressbar
			npm i nextjs-progressbar

			typescript typescriptreact
			https://www.npmjs.com/package/typescript
			https://www.npmjs.com/package/@types/react
			npm install --save-dev typescript @types/react

			Dotenv - это модуль с нулевой зависимостью, который загружает переменные среды из .env файла process.env. Хранение конфигурации в среде отдельно от кода основано на методологии Двенадцатифакторного приложения.
			https://www.npmjs.com/package/dotenv
			npm install dotenv

			#MaterialUI
			https://www.npmjs.com/package/@material-ui/core
			npm i @material-ui/core

			#Redux
			https://www.npmjs.com/package/redux
			npm i redux

			Официальные привязки React для #Redux 
			https://www.npmjs.com/package/react-redux
			npm install react-redux

			#Redux #middleware для работы с асинхроном
			https://www.npmjs.com/package/redux-thunk
			npm i redux-thunk

			#Регистратор для #Redux
			https://www.npmjs.com/package/redux-logger
			npm i redux-logger

			Расширение Redux DevTools. Например applyMiddleware, который позволяет диспатчить асинхроны. store = createStore(rootReducer, applyMiddleware(thunk, logger))
			https://www.npmjs.com/package/redux-devtools-extension
			npm install redux-devtools-extension

			#MobX
			https://mobx.js.org
			npm i mobx mobx-react-lite
			Хранилище состояний, lite пакет для функциональных компонентов

			clipboard-copy
			https://www.npmjs.com/package/clipboard-copy
			Копирование в буфер, подключать через require
			
			{Ошибка при установке пакета
				{//1
					N:\web\htdocs_php5\php_site\files\11736>npm i --save-dev @babel/core @babel/cli
					npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.1 (node_modules\chokidar\node_modules\fsevents):
					npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
					npm WARN interactive_instructions@1.0.0 No repository field.
					npm ERR! Maximum call stack size exceeded
					npm ERR! A complete log of this run can be found in:
					npm ERR!     C:\Users\kushkov-pa.ALPHA\AppData\Roaming\npm-cache\_logs\2021-03-25T04_21_28_748Z-debug.log

					Решение, обновить файл с зависимостями: npm i --package-lock-only
					Если не поможет, удалить node_modules и заново установить все пакеты
				}

				{//2
					npm ERR! code ENOSELF
					npm ERR! Refusing to install package with name "mobx" under a package
					npm ERR! also called "mobx". Did you name your project the same
					npm ERR! as the dependency you're installing?

					Переименовать name в package.json, имя проекта не должно называться так же, как зависимость
				}
			}
		}
		
		{//#npx
			npx помогает нам избежать версий, проблем с зависимостями и установки ненужных пакетов, которые мы просто хотим попробовать.
			Он также предоставляет простой и понятный способ выполнения пакетов, команд, модулей и даже списков и репозиториев GitHub.
			
			npx name - установка пакета с именем name локально
			
			npm v create-react-app - Вывод инфы о пакете и тегах dist-tags, например в списке будет next:
			npx create-react-app@next sandbox
			npx временно установит следующую версию create-react-app, а затем запустит приложение и установит его зависимости.
			После установки мы можем перейти к приложению следующим образом:
			cd sandbox
			и затем запустите его с помощью этой команды:
			npm start
		}
		
		Node.js - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код runtime), превращающая JavaScript из узкоспециализированного языка в язык общего назначения.
		runtime - Значит, что если процесс в оперативке запущен, то он откликается на команды, иначе нет.
		https://Node.js.org/ru/
		Документация по зависимостям https://Node.js.org/ru/docs/meta/topics/dependencies/
		
		Пример проекта в папке Node.js
		
		node --version - версия Node.js
		node файл - выполнение скрипта
		-D - Зависимость для разработки, добавится в devDependencies
		
		dependencies - зависимости, которые идут в package.json dependencies, затем если зайти в папку с данным названием внутри node_modules и открыть там package.json, то будут отображены другие установленные пакеты в dependencies и так далее по дереву.
		
		Асинхронные методы пишутся без приписки Sync
		В callback первый параметр всегда является содержанием информации об ошибке
	}
	
	Предшествующее сообщение в консоли сервера: [nodemon] app crashed - waiting for file changes before starting...
	Ошибка: Proxy error: Could not proxy request /api/auth/register from localhost:3000 to http://localhost:5000/
	Решение: Не смог приконнектиться к БД, исправить доступ к БД и перезапустить сервер
}

{//#Принципы, схемы и подходы программирования
	{//#Соглашения JavaScript
		camelCase для переменных и методов.
		PascalCase для типов и классов.
		UPPER_CASE_SNAKE_CASE для констант.
		Соглашения React: PascalCase используется для названий компонентов, определённых файлов, например файлов моделей.
		Хуки в React: use вначале названия хука. useName
	}

	{//#MVC
		https://ru.wikipedia.org/wiki/Model-View-Controller
		https://habr.com/ru/company/ruvds/blog/333856/
		https://learn.javascript.ru/classes
		
		Model-View-Controller (MVC, «Модель-Представление-Контроллер», «Модель-Вид-Контроллер») — схема разделения данных приложения, пользовательского интерфейса и управляющей логики на три отдельных компонента: модель, представление и контроллер — таким образом, что модификация каждого компонента может осуществляться независимо[1].
		Модель (Model) предоставляет данные и реагирует на команды контроллера, изменяя своё состояние[1].
		Представление (View) отвечает за отображение данных модели пользователю, реагируя на изменения модели[1].
		Контроллер (Controller) интерпретирует действия пользователя, оповещая модель о необходимости изменений[1].
		{//#Модель Model
			Модель предоставляет данные и методы работы с ними: запросы в базу данных, проверка на корректность. Модель не зависит от представления (не знает как данные визуализировать) и контроллера (не имеет точек взаимодействия с пользователем) просто предоставляя доступ к данным и управлению ими.
			Модель строится таким образом, чтобы отвечать на запросы, изменяя своё состояние, при этом может быть встроено уведомление «наблюдателей».
			Модель, за счёт независимости от визуального представления, может иметь несколько различных представлений для одной «модели».
			
			Модель PenguinModel отвечает за работу с данными. В клиентском JS это означает выполнение Ajax-операций. Одно из преимуществ шаблона MVC заключается в том, что всё взаимодействие с источником данных,
			например — с сервером, сосредоточено в одном месте. Такой подход помогает программистам, которые не знакомы с проектом, разобраться в нём. Модель в этом шаблоне проектирования занята исключительно работой
			с JSON или объектами, которые поступают с сервера.
		}
		{//#Представление View
			Представление отвечает за получение необходимых данных из модели и отправляет их пользователю. Представление не обрабатывает введённые данные пользователя.
			
			Представление PenguinView взаимодействует с DOM. DOM — это API браузера, с помощью которого работают с HTML. В MVC только представление отвечает за изменения DOM.
			Представление может выполнять подключение обработчиков событий пользовательского интерфейса, но обработка событий — прерогатива контроллера. Основная задача, решаемая представлением — управлять тем,
			что пользователь видит на экране. В нашем проекте представление будет выполнять манипуляции с DOM, используя JavaScript.
		}
		{//#Контроллер Controller
			Контроллер обеспечивает «связь» между пользователем и системой. Контролирует и направляет данные от пользователя к системе и наоборот. Использует модель и представление для реализации необходимого действия.
			
			Контроллер PenguinController занимается обработкой событий и служит посредником между представлением и моделью. Он выясняет, что произошло, когда пользователь выполняет некое действие
			(например, щёлкает по кнопке или нажимает клавишу на клавиатуре). Логика клиентских приложений может быть реализована в контроллере. В более крупных системах, в которых нужно обрабатывать множество событий,
			этот элемент можно разбить на несколько модулей. Контроллер является входной точкой для событий и единственным посредником между представлением и данными.
		}
	}
	
	{//#SOLID
		SOLID - принцип объектно-ориентированного программирования
		https://web-creator.ru/articles/solid
		Моё понимание:
		1. Каждый объект со своей единственной обязанностью и все сервисы этого класса её сопровождают. Это не догма, например паттерн ActiveRecord её нарушает и делает это правильно.
		2. Реализовывается класс, например интерфейс и больше код не дорабатывается. Новые классы уже наследуются и в них уже содержатся дополнительные функции.
		3. Наследуемый класс не должен переписывать родителя и при замене обращений к методам с родителя на дочерний, проблем возникнуть не должно. Это не догма, так как более ресурсоёмко.
		4. Раздельный интерфейс (React), подобно П1.
		5. В интерфейсе вызывается серверный класс, затем необходимо например реализовать функционал авторизации, который нужно реализовать отдельно не в серверном, вызвать тоже в интерфейсе и передать серверу.
		SOLID — это аббревиатура пяти основных принципов проектирования в объектно-ориентированном программировании — Single responsibility, Open-closed, Liskov substitution, Interface segregation и Dependency inversion.
		В переводе на русский: принципы единственной ответственности, открытости / закрытости, подстановки Барбары Лисков, разделения интерфейса и инверсии зависимостей
		Аббревиатура SOLID была предложена Робертом Мартином, автором нескольких книг, широко известных в сообществе разработчиков. Эти принципы позволяют строить на базе ООП масштабируемые и сопровождаемые программные продукты с понятной бизнес-логикой.
		Расшифровка:
		Single responsibility — принцип единственной ответственности
		Open-closed — принцип открытости / закрытости
		Liskov substitution — принцип подстановки Барбары Лисков
		Interface segregation — принцип разделения интерфейса
		Dependency inversion — принцип инверсии зависимостей
		Принцип единственной обязанности / ответственности (single responsibility principle / SRP) означает, что каждый объект должен иметь одну обязанность и эта обязанность должна быть полностью инкапсулирована в класс. Все его сервисы должны быть направлены исключительно на обеспечение этой обязанности.
		Принцип открытости / закрытости (open-closed principle / OCP) декларирует, что программные сущности (классы, модули, функции и т. п.) должны быть открыты для расширения, но закрыты для изменения. Это означает, что эти сущности могут менять свое поведение без изменения их исходного кода.
		Принцип подстановки Барбары Лисков (Liskov substitution principle / LSP) в формулировке Роберта Мартина: «функции, которые используют базовый тип, должны иметь возможность использовать подтипы базового типа не зная об этом».
		Принцип разделения интерфейса (interface segregation principle / ISP) в формулировке Роберта Мартина: «клиенты не должны зависеть от методов, которые они не используют». Принцип разделения интерфейсов говорит о том, что слишком «толстые» интерфейсы необходимо разделять на более маленькие и специфические, чтобы клиенты маленьких интерфейсов знали только о методах, которые необходимы им в работе. В итоге, при изменении метода интерфейса не должны меняться клиенты, которые этот метод не используют.
		Принцип инверсии зависимостей (dependency inversion principle / DIP) — модули верхних уровней не должны зависеть от модулей нижних уровней, а оба типа модулей должны зависеть от абстракций; сами абстракции не должны зависеть от деталей, а вот детали должны зависеть от абстракций.
	}
	
	{//#KISS
		KISS — Принцип программирования - делайте вещи проще
		https://web-creator.ru/articles/kiss
		KISS — это принцип проектирования и программирования, при котором простота системы декларируется в качестве основной цели или ценности. Есть два варианта расшифровки аббревиатуры: «keep it simple, stupid» и более корректный «keep it short and simple».
		В проектировании следование принципу KISS выражается в том, что:
		не имеет смысла реализовывать дополнительные функции, которые не будут использоваться вовсе или их использование крайне маловероятно, как правило, большинству пользователей достаточно базового функционала, а усложнение только вредит удобству приложения;
		не стоит перегружать интерфейс теми опциями, которые не будут нужны большинству пользователей, гораздо проще предусмотреть для них отдельный «расширенный» интерфейс (или вовсе отказаться от данного функционала);
		бессмысленно делать реализацию сложной бизнес-логики, которая учитывает абсолютно все возможные варианты поведения системы, пользователя и окружающей среды, — во-первых, это просто невозможно, а во-вторых, такая фанатичность заставляет собирать «звездолёт», что чаще всего иррационально с коммерческой точки зрения.
		В программировании следование принципу KISS можно описать так:
		не имеет смысла беспредельно увеличивать уровень абстракции, надо уметь вовремя остановиться;
		бессмысленно закладывать в проект избыточные функции «про запас», которые может быть когда-нибудь кому-либо понадобятся (тут скорее правильнее подход согласно принципу YAGNI);
		не стоит подключать огромную библиотеку, если вам от неё нужна лишь пара функций;
		декомпозиция чего-то сложного на простые составляющие — это архитектурно верный подход (тут KISS перекликается с DRY);
		абсолютная математическая точность или предельная детализация нужны не всегда — большинство систем создаются не для запуска космических шаттлов, данные можно и нужно обрабатывать с той точностью, которая достаточна для качественного решения задачи, а детализацию выдавать в нужном пользователю объёме, а не в максимально возможном объёме.
		Также KISS имеет много общего c принципом разделения интерфейса из пяти принципов SOLID, сформулированных Робертом Мартином.
	}
	
	{//#DRY
		DRY - Принцип программирования — don’t repeat yourself / не повторяйте себя
		https://web-creator.ru/articles/dry
		Следование принципу DRY приводит к модульной архитектуре приложения и к чёткому разделению ответственности за бизнес-логику между программными классами. А это — залог сопровождаемой архитектуры.
		Хотя чаще не DRY приводит к модульности, а уже модульность, в свою очередь, обеспечивает принципиальную возможность соблюдения этого принципа в больших проектах.
		В проектировании DRY тоже имеет место — доступ к конкретному функционалу должен быть доступен в одном месте, унифицирован и сгруппирован по какому-либо принципу, а не «разбросан» по системе в произвольных вариациях.
		Этот подход пересекается с принципом единственной ответственности из пяти принципов SOLID, сформулированных Робертом Мартином.
	}
	
	{//#YAGNI
		YAGNI - Принцип программирования — «Вам это не понадобится»
		https://web-creator.ru/articles/yagni
		Если упрощенно, то следование данному принципу заключается в том, что возможности, которые не описаны в требованиях к системе, просто не должны реализовываться.
		Это позволяет вести разработку, руководствуясь экономическими критериями — Заказчик не должен оплачивать ненужные ему функции, а разработчики не должны тратить своё оплачиваемое время на реализацию того, что не требуется.
		Основная проблема, которую решает принцип YAGNI — это устранение тяги программистов к излишней абстракции, к экспериментам «из интереса» и к реализации функционала, который сейчас не нужен, но,
		по мнению разработчика, может либо вскоре понадобиться, либо просто будет полезен, хотя в реальности такого очень часто не происходит.
		Принципы YAGNI и KISS очень похожи, если KISS нацелен на упрощение и полезен в плане работы с теми требованиями, которые имеют место быть,
		то YAGNI более категоричен и применяется для ограждения проектов по разработке ПО от «размывания» их рамок.
		Подход к реализации проектов строго по ТЗ верен с нескольких ракурсов. Заказчик не должен платить за то, что ему не надо, а продукт должен быть максимально сопровождаем и его качество не должно страдать от интеграции ненужных функций.
	}
	
	{//#Паттерны проектирования #design #pattern
		https://habr.com/ru/company/ruvds/blog/427293
		В сфере разработки программного обеспечения паттерн проектирования (design pattern) — это повторяемая архитектурная конструкция, представляющая собой решение проблемы проектирования в рамках некоторого часто возникающего контекста. Паттерны проектирования представляют собой обобщение опыта профессиональных разработчиков ПО. Паттерн проектирования можно рассматривать как некий шаблон, в соответствии с которым пишут программы.
		Определения далее содержатся на примере в папке patterns

		Модуль (Module (patterns/pattern_module.js)) - вызывается при создании, обращение происходит к возвращаемым свойствам и функциям объекта, у возвращаемой функции создаётся замкнутая функция
		Открытый модуль (Revelating Module (patterns/pattern_revealing_module.js)) - вызывается при создании, обращение происходит к возвращаемым свойствам и функциям объекта
		Синглтон (Singleton (patterns/pattern_singleton.js)) - одиночка, существует в единственном экземпляре. Если объект уже имеется, возвращает его же, иначе создаёт новый.
		Фабрика (Factory (patterns/pattern_factory.js)) - копипаст по созданию шаблонных классов в зависимости от специфики (установленного свойства) с определением значений по умолчанию, если требуется. В общем в одном, первом вызываемом классе конструктор с условием по созданию необходимого класса.
		Декоратор (Decorator (patterns/pattern_decorator.js)) - создаётся шаблонный класс, затем в функциях меняются значения шаблона

		{https://youtu.be/YJVj4XNASDk
			{//#Creational Design Patterns - паттерны для создания объектов / классов
				Constructor (Конструктор) (patterns/1 creational/1_constructor.js) - конструктор класса за место прототипа
				Factory (Фабрика) (patterns/1 creational/2_factory.js) - множество повторяющихся классов с одинаковыми свойствами
				Prototype (Прототип) (patterns/1 creational/3_prototype.js) - прототип объекта, по образу и подобию которого создаётся новый и у этого нового __proto__ будет равен объекту родителя, хотя сами объекты не будут равны
				Singleton (Синглтон) (patterns/1 creational/4_sigleton.js) - вызов конструктора создаёт объект класса только один раз, затем будет возвращать ранее созданный
			}
			{//#Structural Design Pattern - создание нового функционала для существующих объектов, не затрагивая уже существующего
				Adapter (Адаптер) (patterns/2 structural/5_adapter.js) - позволяет интегрировать функционал например старого интерфейса в новый, не ломая всё приложение
				Decorator (Декоратор) (patterns/2 structural/6_decorator.js) - позволяет навесить новый функционал на существующий объект класса
				Facade (Фасад) (patterns/2 structural/7_facade.js) - создание классов через if type, например как библиотека JQuery, куда подавалось что угодно в селектор $(значение). Это значение ведь не может быть ключом объекта, чтобы реализовать как у фабрики
				Flyweight (Флайвейт) (patterns/2 structural/8_flyweight.js) - пресекает повторную загрузку данных, кэширует, сохраняет в памяти и т д
				Proxy (Прокси) (patterns/2 structural/9_proxy.js) - избавляет веб сервер от лишних запросов на сервер, расставляет ловушки, валидацию
			}
			{//#Behaviour Design Pattern - поведенческие паттерны для налаживания коммуникации между существующими сущностями разного типа, API, версии
				Chain of Responsibility (Цепочка обязанностей) (patterns/3 behaviour/10_chain_of_responsebility.js) - позволяет строить цепочки вызовов функций, как у JQuery $(значение).метод1.метод2.метод3
				Command (Комманд) (patterns/3 behaviour/11_command.js) - вызов функций, название которых передано в качестве строки и будет записано в некий массив вызванных команд / функций
				Iterator (Итератор) (patterns/3 behaviour/12_iterator.js) - необходим для получения последовательной информации
				Mediator (Медиатор) (patterns/3 behaviour/13_mediator.js) - в первую очередь позволяет выстраивать плотную и тесную коммуникацию различных типов, предоставляет централизованную абстракцию, позволяющую объектам взаимодействовать через друг друга
				Observer (Обсервер / Наблюдатель) (patterns/3 behaviour/14_observer.js) - объекты подписываются на изменения другого и соответствующе реагируют
				State (Стейт / Состояние) (patterns/3 behaviour/15_state.js) - верхнеуровневый класс будет менять состояние относящееся к подклассам
				Strategy (Стратегия) (patterns/3 behaviour/16_strategy.js) - оболочка / семейство алгоритмов, которые наследуют объекты в разные алгоритмы и интерфейсы, не изменяя их. В нём просто вызываются функции другого класса
				Template (Темплейт / Шаблон) (patterns/3 behaviour/17_template.js) - определяет скелет будущего алгоритма, а дочерние реализуют конкретный функционал на основании скелета
			}
		}
	}
}

{//#IIFE
	https://developer.mozilla.org/ru/docs/Glossary/IIFE
	IIFE (Immediately Invoked Functional Expression, немедленно вызываемое функциональное выражение). (function(){тело})(собачьи яйца)
	Является одной из немногих исключительных ситуаций, перед которой ставится точка с запятой
}

{//#Классы #Classes
	https://youtu.be/uLY9GXGMXaA
	https://learn.javascript.ru/es-class
	Классы - это синтаксический сахар для более удобного создания объектов, наследования и прототипирования

	В js 2021 можно сделать приватным поле либо метод с помощью #. #id - будет приватным
	
	{//#static
		static - объявление внутри класса, наследуется, но не появляется у присвоенных значений, например class Cl, обращение будет Cl.fn(), а не const cl = new Cl(), cl.fn()
	}

	{//#super
		https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/super
		Ключевое слово super используется для вызова конструктора родителя
	}
}

{//#Контекст (Контекст выполнения) #Context (execution context))
	http://old.code.mu/books/javascript/context/prodvinutaya-rabota-s-kontekstom-v-javascript.html
	https://habr.com/ru/post/468943/
	Пример в localhost\examples\context.js
	Контекст выполнения (execution context) — это, если говорить упрощённо, концепция, описывающая окружение, в котором производится выполнение кода на JavaScript. Код всегда выполняется внутри некоего контекста.

	{//#this
		this — это связь сущности с контекстом исполнения, с порождающим контекстом(ScopeChain).

		Самое важное, что нужно понять о this, заключается в том, что у функций нет фиксированного значения this. Это значение зависит от того, как именно вызывается функция. Если мы говорим о том, что функция вызывается с некоторым конкретным значением this, это значит, что это значение определяется не во время объявления функции, а во время её вызова. Вот некоторые особенности this:
		Если функция вызывается в обычном виде (то есть, с использованием конструкции вида someFunc()), то this будет ссылаться на глобальный объект (в браузере это window). Если код выполняется в строгом режиме, то в this будет записано значение undefined.
		Если функция вызывается как метод объекта, то ключевое слово this будет представлено объектом, которому принадлежит метод.
		Если функцию вызывают с использованием call или apply, this будет представлено тем, что указано в качестве первого аргумента call или apply.
		Если функция вызывается в виде обработчика события, то в this будет целевой элемент события.
		Если функцию вызывают в виде конструктора, с использованием ключевого слова new, то в this будет новый объект, прототип которого установлен в качестве свойства prototype функции-конструктора.
		Если функция создана с использованием метода bind, то ключевое слово this функции будет жёстко привязано к значению, переданному bind в качестве первого аргумента. Это — единственное исключение из правила, в соответствии с которым функции не имеют жёстко заданного значения this. Функции, созданные с использованием bind, имеют иммутабельное значение this.
	}
	
	ObjectOver / FunctionOver
	{
		Object / Function
		{ Scope // Свойство функции, а не контекста. В Scope записывается вся иерархия LexicalEnvironment
			const a = 'text';

			{ Scope2
				const b = 'text';
			}
			
			LexicalEnvironment: // Лексическое окружение. Наполнение словаря происходит при объявлении
			{
				this: Object / Function // Ссылка на контекст выполнения, доступно только при выполнении
				ScopeChain: // Лексическая цепочка. Связь с пораждающими контекстами. Спецификация утверждает, что ScopeChain это массив
				[
					LE: {
						Scope: {
							a: 'text',
							Scope2: {
								b: 'text',
							}
						}
					},
					LE.prototype, // Также не стоит забывать, что если у какого-то из звеньев в цепи ScopeChain есть прототип, то поиск будет осуществляться и в прототипе тоже
					LE.ObjectOver,
					LE1,
					LE2,
					...,
					LEglobal
				]
			}
		}
	}
	
	#call - вызов функции с передачей контекста и аргументов через запятую https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/call
	#apply - то же, что и call, только аргументы передаются в массиве (обрабатываются через ...args) https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
	#bind - создание новой функции с переданным контекстом, аргументы передаются через запятую, bind присваивается переменной, затем она вызывается как функция. bind позволяет закрепить контекст, чтобы не произошла потеря контекста. bind нельзя применить повторно к забинденной функции https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
	#Стрелочные функции не создают свой контекст, поэтому this внутри них будет относиться к более верхнеуровнему объекту
	
	Потеря контекста: https://learn.javascript.ru/bind
	Когда мы привязываем аргументы, такая функция называется «частично применённой» или «частичной».
	Частичное применение удобно, когда мы не хотим повторять один и тот же аргумент много раз. Например, если у нас есть функция send(from, to) и from всё время будет одинаков для нашей задачи, то мы можем создать частично применённую функцию и дальше работать с ней.
	
	this и ScopeChain — это свойства контекста исполнения.
	this также является свойством контекста исполнения, но никак не самим контекстом.
	this в функциях определяется вызывающей стороной и зависит от синтаксиса вызова.
	Объект лексического окружения проставляет undefined в качестве this.
	В глобальном контексте исполнения this определяется в зависимости от strict mode: при выключенном strict mode в this находится глобальный объект(в браузере он проксирован на верхний уровень в объект window), при 'use strict' this равен undefined.
	
	Правило определения this для функций, вызванных обычным способом:
	Если слева от скобок активации функции находится ReferenceType, то в this функции проставляется base этого ReferenceType. Если слева от скобок любой другой тип, то в this проставляется глобальный объект или undefined
	{
		const x = 0;

		const obj = {
		  x: 10,
		  foo: function() {
			return this.x;
		  }
		}

		obj.foo(); // Вернёт 10 т.к. слева от скобок ReferenceType свойство base которого указывает на объект obj

		const test = obj.foo; // Присвоим метод объекта в глобальную переменную

		test(); // Вернёт 0 т.к. вызов test() эквивалентен вызову ГО.test(), т.е. свойство base укажет на глобальный объект, а в глобальном объекте х присвоено 0
	}
	
	У типа ReferenceType есть встроенный метод GetValue, который возвращает истинный тип получаемого через ReferenceType объекта. В зоне выражения GetValue всегда срабатывает.
	(function (){
	  return this; // this проставляется глобальный объект или undefined в зависимости от strict mode
	})()
	Это происходит из-за того, что в зоне выражения у нас всегда срабатывает GetValue. GetValue возвращает тип Function и слева от скобок активации получается не ReferenceType.
	
	{//#LexicalEnvironment #Лексическое окружение #LE #ЛО #Динамическая область
		https://habr.com/ru/post/474852/
		https://habr.com/ru/post/468943/
		https://russianblogs.com/article/87531190106/
		Лексическое окружение — это хранилище для данных в памяти и механизм для извлечения этих данных при обращении.
		Лексическая область - определяется во время написания кода, тогда как динамическая область (и this) - во время выполнения. Лексическая область заботится о том, где была объявлена функция, а динамическая область - о том, откуда была вызвана функция.
		И наконец: this заботится о том, как была вызвана функция. Это показывает нам, насколько тесно механизм this связан с идеей динамической области видимости.
		Наполнение словаря происходит при вызове функции, а не при определении.
		{
			const showWarning = (field) => {
			  // LexicalEnvironment = { field: 'email' }
			  const warning = `verify your ${field}, please`;
			  // LexicalEnvironment = { warning: 'verify your email, please', field: 'email' }
			  console.log(warning);
			}

			showWarning('email'); // => verify your email, please
		}
		
		Lexical Environment — это тип спецификации, используемый для разрешения имён идентификаторов при поиске конкретных переменных и функций на основе лексической структуры вложенности кода ECMAScript.
		Лексическое окружение (Lexical Environment) состоит из записи среды и, возможно, нулевой ссылки на внешнюю Лексическую среду.
			
		Технически ЛО представляет собой объект с двумя свойствами:
		запись окружения (именно тут хранятся все объявления)
		ссылка на ЛО порождающего контекста.

		Своего рода ScopeChain у функций — это аналог Лексического окружения.

		Лексическое окружение содержит в себе:
		все объявления переменных контекста
		все декларации функций
		все формальные параметры функции(если речь идёт о контексте функций)
	}
	
	{//#Scope
		https://frontend-stuff.com/blog/javascript-introduction-to-scope
		https://developer.mozilla.org/en-US/docs/Glossary/Scope
		https://habr.com/ru/post/468943/
		Область видимости, по сути есть локальная (внутри scope - SCOPE) и глобальная (доступ к данным из вне scope - ScopeChain) области.
		Обратите внимание! [[SCOPE]] в отличии от ScopeChain являертся свойством самой функции, а не её контекста.
		[[Scope]] — это свойство самой функции, содержит в себе иерархическую цепь лексических окружений порождающих контекстов.
		Функции, создаваемые через new Function, имеют значением [[Scope]] не внешний объект переменных, а window.
		Следствие – такие функции не могут использовать замыкание. Но это хорошо, так как бережёт от ошибок проектирования, да и при сжатии JavaScript проблем не будет. Если же внешние переменные реально нужны – их можно передать в качестве параметров.
		{
			Данная запись scope называется block scope
			Переменные объявленные через let и const создаются внутри данного scope и при одинаковом названии в родителе и дочернем scope, будет меняться значение переменной объявленной в текущем scope
			В дочернем scope возможно изменение значения уже объявленной переменной в родителе
		}
		
		{//#ScopeChain #Порождающий контекст #Цепь областей видимости
			https://habr.com/ru/post/468943/
			ScopeChain — это связь сущности со всеми порождающими контекстами.
			
			ScopeChain — это лексическое окружение текущего контекста + [[Scope]]
			this и ScopeChain — это свойства контекста исполнения
			Цепь областей видимости также является свойством контекста исполнения как и this. Она представляет собой список объектов лексических окружений текущего контекста и всех порождающих контекстов. Именно в этой цепи происходит поиск переменных при разрешении имён идентификаторов.
			Обратите внимание: this связывает функцию с контекстом исполнения, а ScopeChain с порождающими контекстами.
			Спецификация утверждает, что ScopeChain это массив:
			SC = [LO, LO1, LO2,..., LOglobal];
			Однако, в некоторых реализациях, например в JS, цепь областей видимости реализована через связанные списки.
			Обратите внимание! [[SCOPE]] в отличии от ScopeChain являертся свойством самой функции, а не её контекста.
			При вызове функции инициализируется и наполняется её контекст исполнения. Контексту проставляется ScopeChain = LO(самой функции) + [[SCOPE]](иерархическая цепь LO пораждающих контекстов).
			Важным исключением является функция-конструктор. Для этого типа функций [[SCOPE]] всегда указывает на глобальный объект.
			Также не стоит забывать, что если у какого-то из звеньев в цепи ScopeChain есть прототип, то поиск будет осуществляться и в прототипе тоже.

			{//#Связный список
				https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D0%B7%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA
				Связный список — базовая динамическая структура данных в информатике, состоящая из узлов, каждый из которых содержит как собственно данные, так и одну или две ссылки («связки») на следующий и/или предыдущий узел списка.
				Принципиальным преимуществом перед массивом является структурная гибкость: порядок элементов связного списка может не совпадать с порядком расположения элементов данных в памяти компьютера, а порядок обхода списка всегда явно задаётся его внутренними связями.
			}
		}

		{//#Стек
			Если речь в контексте структуры данных, то это последовательный список элементов в информатике, например массив. Обслуживание самых новых событий, старые дальше висят.
		}

		{//#Очередь
			Здесь удаляются самые старые данные. Тоесть сначала обслуживание самых первых событий в очереди.
		}
	}

	{//#Замыкание #Closures
		https://youtu.be/pahO5XjnfLA
		Замыкание — совокупность блока кода и данных того контекста, в котором тот блок порождён, т.е. это связь сущности с порождающими контекстами через цепь ЛО или SсopeChain.
		Проще говоря замыкание верхнеуровневого значения переменной в дочернем скоупе.
		Как правило это возврат функции из функции, в верхнеуровневую подаётся значение аргумента, которое используется в возвращаемой функции без передачи в неё этого параметра
		examples/closure.js
		
		function person() {
		  let name = 'Peter';
		  
		  return function displayName() {
			console.log(name);
		  };
		}
		let peter = person();
		peter(); // prints 'Peter'

		{//#Свободная переменная
			https://habr.com/ru/post/474852/
			Свободная переменная — переменная, используемая функцией, но не являющаяся ни формальным параметром, ни локальной переменной для этой функции.
			
			function testFn() {
			var localVar = 10; // Свободная переменная для функции innerFn
			function innerFn(p) {
				alert(p + localVar);
			}

			return innerFn; // Возврат функции
			}

			var test = testFn(); // Присвоим innerFn в переменную
			test(); // В стековых языках это бы не работало
		}
	}
}

{//#Декларативное #Императивное программирование
	https://habr.com/ru/post/324688/
	Декларативное программирование - это когда в коде описано что должно получиться, а императивное - когда написано как это сделать.
	
	Декларати́вное программи́рование — это парадигма программирования, в которой задаётся спецификация решения задачи, то есть описывается, что представляет собой проблема и ожидаемый результат.
	Противоположностью декларативного является императивное программирование, описывающее на том или ином уровне детализации, как решить задачу и представить результат. В общем и целом, декларативное программирование идёт от человека к машине, тогда как императивное — от машины к человеку.
	Как следствие, декларативные программы не используют понятия состояния, то есть не содержат переменных и операторов присваивания (см. также ссылочная прозрачность).
}

{//#Declaration #Expression #Function
	https://learn.javascript.ru/function-expressions
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function
	
	Function Declaration (Объявление Функции, можно вызвать до объявления):
	function sayHi() {
	  alert("Привет");
	}
	
	Function Expression (Функциональное Выражение, нельзя вызвать до объявления):
	var sayHi = function() {
	  alert("Привет");
	};
	
	{//#Зона выражения
		Зоной выражения считаются: присваивание(=), операторы || или иные логические операторы, тернарный оператор, инициализатор массива, перечисление через запятую.
	}
}

{//#Анонимная функция
	У них нет имён, поэтому они называются анонимными
	function() return a
	() => a
}

{//#JSON
	https://ru.wikipedia.org/wiki/JSON
	JSON (англ. JavaScript Object Notation) — текстовый формат обмена данными, основанный на JavaScript.
	
	JSON сервер для тестовых запросов https://jsonplaceholder.typicode.com/
}

{//#use strict
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strict_mode
	Строгий режим. 'use strict';
	Режим strict (строгий режим), введенный в ECMAScript 5, позволяет использовать более строгий вариант JavaScript.
	Строгий режим принёс ряд изменений в обычную семантику JavaScript.
	Во-первых, строгий режим заменяет исключениями некоторые ошибки, которые интерпретатор JavaScript ранее молча пропускал.
	Во-вторых, строгий режим исправляет ошибки, которые мешали движкам JavaScript выполнять оптимизацию -- в некоторых случаях код в строгом режиме может быть оптимизирован для более быстрого выполнения, чем код в обычном режиме.
	В-третьих, строгий режим запрещает использовать некоторые элементы синтаксиса, которые, вероятно, в следующих версиях ECMAScript получат особый смысл.
}

{//#JSX
	https://ru.reactjs.org/docs/introducing-jsx.html
	https://facebook.github.io/jsx
	JavaScript XML (JSX) — это расширение синтаксиса JavaScript, которое позволяет использовать похожий на HTML синтаксис для описания структуры интерфейса. Как правило, компоненты написаны с использованием JSX, но также есть возможность использования обычного JavaScript.
	JSX напоминает другой язык, созданный в компании Фейсбук для расширения PHP, XHP.
}

{//#Flux-архитектура
	https://ru.wikipedia.org/wiki/Flux-%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B0
	Flux-архитектура — архитектурный подход или набор шаблонов программирования для построения пользовательского интерфейса веб-приложений, сочетающийся с реактивным программированием и построенный на однонаправленных потоках данных.
	Согласно замыслу создателей и несмотря на то, что Facebook предоставил реализацию Flux в дополнение к React, Flux не является ещё одним веб-фреймворком, а является архитектурным решением.

	{//#MobX
		https://mobx.js.org/README.html
		Для реализации архитектуры flux используется библиотека MobX.
		Флюс - архитектурное решение, описывающее подход однонаправленных потоков данных.
		MobX - javascript библиотека, реализующая архитектуру flux.
	}
}

{//#Babel
	https://babeljs.io
	https://babeljs.io/setup#installation
	Babel - это компилятор JavaScript
	Babel - Бабель является свободным и открытым исходным кодом JavaScript transcompiler, который в основном используется для преобразования ECMAScript 2015+ кода (ES6 +) в обратной совместимости версию JavaScript, который может быть запущен на более старых двигателях JavaScript . Babel - это популярный инструмент для использования новейших функций языка программирования JavaScript.
}

{//#Material Design
	Material Design (рус. Материальный дизайн) — стиль графического дизайна интерфейсов программного обеспечения и приложений, разработанный компанией Google.
	
	{//#Material UI
		https://material-ui.com/ru
		Material UI — это библиотека, которая позволяет создавать приложения в стиле Google Material Design с использованием компонентов React. Она упрощает веб-разработку, создание привлекательных пользовательских интерфейсов и одностраничных приложений.
		Подбор цвета: https://material.io/resources/color
		styled. Все компоненты MUI стилизованы с помощью этой styled()утилиты. https://mui.com/system/styled/
	}
	
	{//#Materialize
		https://materializecss.com/
		Интерфейсный фреймворк Material Design
	}
	
	{//#Material Design Lite
		https://getmdl.io/
		От Google офф, шаблон для остальных, содержит только основы
	}
	
	{//#Bootstrap Material Theme
		https://fezvrasta.github.io/bootstrap-material-design/
		Как следует из названия, это не отдельный фреймворк, а просто тема для Bootstrap.
		По сколько это тема для Bootstrap'a, то здесь есть все фишки из Bootstrap'a и все элементы из Material Design, есть даже встроенные значки в стиле Material.
	}
}

{//#Axios
	https://github.com/axios/axios
	Axios - библиотека javascript, реализующая XMLHttpRequest в браузере и поддерживающая Promise API.
	Axios — это широко известная JavaScript-библиотека. Она представляет собой HTTP-клиент, основанный на промисах и предназначенный для браузеров и для Node.js.
}

{//#Lodash
	https://lodash.com/
	Для решения типовых задач, используется библиотека lodash @ 4.17.
	Lodash - библиотека JavaScript, которая предоставляет вспомогательные функции для общих задач разработки с использованием парадигмы функционального программирования.
}

{//#Webpack
	https://webpack.js.org
	Webpack - это пакет модулей JavaScript с открытым исходным кодом. Это пакет модулей в основном для JavaScript, но он может преобразовывать внешние ресурсы, такие как HTML, CSS и изображения, если включены соответствующие загрузчики. [7] webpack принимает модули с зависимостями и генерирует статические ресурсы, представляющие эти модули. [8]
	Webpack берет зависимости и генерирует граф зависимостей, https://webpack.js.org/concepts/dependency-graph/
	позволяющий веб-разработчикам использовать модульный подход для целей разработки своих веб-приложений. Его можно использовать из командной строки или настроить с помощью файла конфигурации с именем webpack.config.js . Этот файл используется для определения правил, плагинов и т. Д. Для проекта. (Веб-пакет легко расширяется с помощью правил, которые позволяют разработчикам писать собственные задачи, которые они хотят выполнять при объединении файлов.)
	Запаковывает фалы проекта в один общий файл - bundle.js
	Концепции https://webpack.js.org/concepts
}

{//#Redux
	Устаревшая усложнённая технология загрязняющая проект, на смену которой пришёл MobX. Не использовать Redux ни в коем случае!!!

	https://redux.js.org/
	Predictable State Container for JS Apps (Контейнер предсказуемого состояния для JS-приложений)

	Redux — библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст.
	Redux – библиотека с простым API, предсказуемое хранилище состояния приложений.

	Пример 1: localhost\react-redux-course https://youtu.be/G3GGXIhggGs
	Пример 2: localhost\redux https://youtu.be/YdYyYMFPa44

	Redux не привязан к фреймворку, это технология для разделения данных и способа отображения.
	Всё состояние приложения - это единый объект в Redux.

	Component -> Action -> Store -> Reducer -> Store -> Component
	Component / View общается со Store через Action
	Action - объект с типом действия, который диспатчится в Store
	Store - содержит само состояние, которое меняется через Reducer
	Reducer - это чистая функция, которая вычисляет следующее состояние на основании предыдущего.
	Reducer правила: всегда должна вернуть state, если action.type совпадает с тем, что мы меняем в Reducer, тогда мы должны вернуть новый объект - это иммутабельность (неизменный объект).
	Затем в Store отрабатывает observer / subscribers, обновляя тем самым Component

	Store
	https://redux.js.org/api/store
	getState() // Получить состояние
	dispatch(action) // Изменить состояние
	subscribe(listener) // Подписаться на обновления
	replaceReducer(nextReducer) // Заменить редьюсер

	createStore -> Reducer switch(action.type) case CREATE_POST -> return всте старые state в Store и новый state(Store)
	В action есть dispatch
	const dispatch = useDispatch() // Позволяет диспатчить action в store
	В dispatch передаётся {type: action}
	dispatch вызывает Reducer из createStore в котором вычисляется новый state(Store)
	const loading = useSelector(state => state.app.loading) // Получить значение из state
	connect(f(state) return {key: state...}, {{type: action}, ...})(Component) arg1: Преобразовывает стейты в пропсы. arg2: Сработает диспатч

	Функция connect возвращает функцию, тот же самый компонент, но уже с дополнительным функционалом
}

{//#TypeScript
	TypeScript - Средство разработки веб-приложений, расширяющее возможности JavaScript. Компилятор TypeScript называется tsc. Код компилируется в JavaScript. От разраба C#.
	Концентрируется на добавлении «строгой типизации» для упрощения разработки и поддержки больших и сложных систем. Разработан Microsoft.
}

{//#JScript
	JScript — сценарный язык программирования компании Microsoft, являющийся реализацией стандарта ECMAScript. Синтаксис JScript во многом аналогичен языку JavaScript. Язык JScript получил дальнейшее развитие в виде языка JScript.NET, который ориентирован на работу в рамках платформы Microsoft .NET. Несмотря на сходный синтаксис, это принципиально другой язык. Он более строго типизирован и компилируется, а не интерпретируется.
}

{//#CoffeeScript
	CoffeeScript - добавляет «синтаксический сахар» для JavaScript. Он вводит более короткий синтаксис, который позволяет писать чистый и лаконичный код. Обычно такое нравится Ruby-программистам.
}

{//#Flow
	Flow - тоже добавляет типизацию, но иначе. Разработан Facebook.
}

{//#Dart
	Dart - стоит особняком, потому что имеет собственный движок, работающий вне браузера (например, в мобильных приложениях). Первоначально был предложен Google, как замена JavaScript, но на данный момент необходима его транспиляция для запуска так же, как для вышеперечисленных языков.
}

{//#Angular
	Angular (версия 2 и выше) — это открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript, разрабатываемая командой из компании Google, а также сообществом разработчиков из различных компаний. Angular — это полностью переписанный фреймворк от той же команды, которая написала AngularJS.
}

{//#AngularJS
	AngularJS — JavaScript-фреймворк с открытым исходным кодом. Предназначен для разработки одностраничных приложений. Его цель — расширение браузерных приложений на основе MVC-шаблона, а также упрощение тестирования и разработки.
}

{//#RxJS
	RxJS - это библиотека для работы с асинхронными и основанными на событиях программами с использованием наблюдаемых последовательностей.
	Библиотека предоставляет основной тип Observable, несколько вспомогательных типов (Observer, Schedulers, Subjects) и операторы работы с событиями как с коллекциями (map, filter, reduce, every и подобные из JavaScript Array).
}

{//#Open Server
	https://ospanel.io
	Данная сборка многовариантная. Установка стационарная (на домашний компьютер) и портативная (на переносной носитель).
	Open Server — сборка относительно молодая, однако прочно завоевывает первые позиции в линейке локальных серверов. Причин в этом несколько, но главных три:
	Платформа портативна и доступна без установки на операционную систему;
	Open Server постоянно обновляется, и не «висит» по несколько лет без апгрейда, что говорит о постоянной работе автора над проектом;
	Платформа имеет пять языковых варианта (русский основной).
	В сборке Open Server еще много приятных фишек, упрощающих работу разработчика. Радует простота установки, автономная подкачка недостающих программ, два сервиса HTTP (Apache и Nginx), несколько версий СУБД и PHP, наличие управляющей программы.
}

{//#Xampp
	https://www.apachefriends.org/index.html
	Данная сборка расшифровывается, как: любая ось+apache+mariabd+php+perl. Установка только стационарная.
	Платформа Xampp лидирует в ранге аналогичных платформ, за рубежом. Платформа интересна, возможностью работы на разных операционных системах, об этом говорит первая буква акронима [X]. Это может быть Windows, Linux и OS X. Две буквы [p] в конце акронима, означают php и perl (доступные языки). Вместо MySQL стоит более мощная СУБД MariaDB.
	Сообществу XAMPP более 10 лет, как следствие, много информации по использованию платформы. За XAMPP «ухаживают», постоянно обновляют, есть версия c PHP 7.0.4. даже появился русский вариант официального сайта.
}

{//#Electron JS
	https://www.electronjs.org
	https://ru.wikipedia.org/wiki/Electron
	Electron JS - Библиотека для создания оконных форм
	Electron (ранее известен как atom shell) — фреймворк, разработанный GitHub. Позволяет разрабатывать нативные графические приложения для настольных операционных систем с помощью веб-технологий. Фреймворк включает в себя Node.js для работы с back-end и библиотеку рендеринга из Chromium.
	https://youtu.be/gD50EhSJh-k
}

{//#Реактивное программирование
	https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5
	Реактивное программирование — парадигма программирования, ориентированная на потоки данных и распространение изменений. Это означает, что должна существовать возможность легко выражать статические и динамические потоки данных, а также то, что нижележащая модель исполнения должна автоматически распространять изменения благодаря потоку данных.
	К примеру, в императивном программировании присваивание a = b + c будет означать, что переменной a будет присвоен результат выполнения операции b + c, используя текущие (на момент вычисления) значения переменных. Позже значения переменных b и c могут быть изменены без какого-либо влияния на значение переменной a.
	В реактивном же программировании значение a будет автоматически пересчитано, основываясь на новых значениях.
}

{//#Cookie
	https://github.com/js-cookie/js-cookie
}

{//#Cleave.js
	https://github.com/nosir/cleave.js
	Cleave - автоматическое форматирование строки
}

{//#Генераторы #Generator
	Генераторы – новый вид функций в современном JavaScript. Они отличаются от обычных тем, что могут приостанавливать своё выполнение, возвращать промежуточный результат и далее возобновлять его позже,
	в произвольный момент времени.
	https://learn.javascript.ru/generator
	function* generateSequence()
	{
		yield 1;
		yield 2;
		return 3;
	}
	При запуске generateSequence() код такой функции не выполняется. Вместо этого она возвращает специальный объект, который как раз и называют «генератором».
	Правильнее всего будет воспринимать генератор как «замороженный вызов функции».
	При создании генератора код находится в начале своего выполнения.
	Основным методом генератора является next(). При вызове он возобновляет выполнение кода до ближайшего ключевого слова yield. По достижении yield выполнение приостанавливается, а значение – возвращается во внешний код
	«Открутить назад» завершившийся генератор нельзя, но можно создать новый ещё одним вызовом generateSequence() и выполнить его.
	let generator = generateSequence();
	let one = generator.next();
	alert(JSON.stringify(one)); // {value: 1, done: false}
	let two = generator.next();
	alert(JSON.stringify(two)); // {value: 2, done: false}
	let three = generator.next();
	alert(JSON.stringify(three)); // {value: 3, done: true}
}

{//#Шаблонные литералы
	Шаблонными литералами называются строковые литералы, допускающие использование выражений внутри. С ними вы можете использовать многострочные литералы и строковую интерполяцию. В спецификациях до ES2015 они назывались "шаблонными строками".
	`строка текста`

	`строка текста 1
	 строка текста 2`

	`строка текста ${выражение} строка текста`

	tag `строка текста ${выражение} строка текста`
}

{//#SaaS
	SaaS (англ. software as a service — программное обеспечение как услуга; также англ. software on demand — программное обеспечение по требованию) — одна из форм облачных вычислений, модель обслуживания, при которой подписчикам
	предоставляется готовое прикладное программное обеспечение, полностью обслуживаемое провайдером. Поставщик в этой модели самостоятельно управляет приложением, предоставляя заказчикам доступ к функциям с клиентских устройств,
	как правило через мобильное приложение или веб-браузер.
	https://ru.wikipedia.org/wiki/Программное_обеспечение_как_услуга
	https://habr.com/ru/company/uteam/blog/113980/
}

{//#Автотесты
	Автоматизированное тестирование (Автотест) – это когда тесты написаны отдельно от кода, и можно в любой момент запустить их и проверить все важные случаи использования.
	
	https://habr.com/ru/post/336030/
	Принципы: https://habr.com/ru/company/mailru/blog/466879/
	https://medium.com/@andr.ivas12/%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-%D1%87%D0%B0%D0%B9%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2-c007d43da791
	Список фреймворков для тестов https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript
	
	{//#Виды тестирования (критерий — степень изолированности кода). Тестирование бывает:
			Блочное (Unit testing) — тестирование одного модуля в изоляции. https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5
			Интеграционное (Integration Testing) — тестирование группы взаимодействующих модулей. Ломает ли новый код уже созданный ранее. https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B5_%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5
			В верхней части находятся тесты пользовательского интерфейса (end to end) Они действуют так же, как конечный пользователь работает с приложением. Запускаем очень редко — несколько раз за проект. Работают очень медленно.
			Системное (System Testing) — тестирование системы в целом. https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%BD%D0%BE%D0%B5_%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5
		Sociable (общительный) тест — это тест который использует реальные методы (или классы), которые входят в тестируемую единицу. Например, вы тестируете метод «цена» из класса заказов.
		Методу «цена» необходимо вызвать методы из класса клиент и продукт. В данном виде тестов будут вызваны именно эти методы, и ошибка в этих методах приведет к ошибке теста. Методы из классов клиент и продукт называется партнеры (collaborators).
		Solitary (одинокий) тест — это тест, который в качестве партнеров использует дубли (TestDouble). Тест-дубли — это общий термин для любого случая, в котором вы заменяете реальный объект, исключительно для целей тестирования.
		BDD (Behaviour Driven Development) или разработка на основе поведения, появилось в процессе эволюции unit-тестирования
			Там используются все те же правила, что и в TDD: тест, код, рефакторинг. Отличие заключается в том, что BDD охватывает более широкую публику. Спецификации становятся доступными не только программистам, но и людям,
			не разбирающимся в коде, но имеющим отношение к разработке ПО. Таким образом, в процесс создания тестов подключается вся команда: аналитики, тестеры, менеджеры.
		TDD (Test-Driven Development) или разработка через тестирование, как часть экстремального программирования. Эта техника для построения ПО, которая управляет процессом разработки через написание тестов.
			В сущности, повторяет три простых правила:
			Сначала пишется тест
			Затем пишется код под этот тест
			Рефакторинг нового и старого кода, чтобы улучшить качество кода
		В качестве детектора ошибок или автоматических тестов, выступают не только unit-тесты, но также интеграционные тесты, и другие автоматические тесты. Но unit-тесты здесь играют основу, т.к. написать их просто и выполняются они очень быстро.
		Высокоуровневые тесты — это вторая линия обороны. Если вы получили ошибку в высокоуровневом тестировании, то это не просто ошибка в коде, это отсутствующий или некорректный юнит тест!
	}
	
	{//#Принципы
		Простой и аккуратный код, читаемый в одну строку, как будто разговорная речь. Задумываться нельзя при взгляде на него.
		
		{//#Название формируется из правил
			Что именно тестируется? Например, метод ProductsService.addNewProduct.
			При каких условиях и сценарии? Например, методу не передаётся цена.
			Какой ожидается результат? Например, новый продукт не одобрен.
		}
			
		{//#Паттерн AAA
			Каждый тест должен состоять из трёх чётко разделённых разделов:
			Arrange (подготовка)
			Act (действие)
			Assert (результат)
		}
			
		Если используется сложный код, то необходимо расширить сопоставитель самому https://jestjs.io/docs/en/expect#expectextendmatchers
		
		{//#Метод "чёрного ящика"
			Придерживайтесь тестирования по методу "чёрного ящика": тестируйте только публичные методы. Этот подход также называют поведенческим тестированием.
			С другой стороны, если вы тестируете внутренности (метод «белого ящика»), то вместо планирования выходных данных компонентов вы сосредоточитесь на мелких подробностях,
			и ваши тесты могут сломаться из-за мелких переделок кода, пусть даже с результатами всё будет в порядке, а на сопровождение будет уходить гораздо больше ресурсов.
		}
	}
	
	{//#Mock-объект - фальшивый объект
		Mock-объект - фальшивый объект, накрученный объект на другой (клон, эмулирующий), как JQuery, но только для тестов, например подключение с помощью Ajax к серверу. Ожидает в отличие от стаба (stub - заглушка), который просто имитирует.
		Mock-объект (от англ. mock object, буквально: «объект-пародия», «объект-имитация», а также «подставка») — в объектно-ориентированном программировании — тип объектов, реализующих заданные аспекты моделируемого программного окружения.
		Mock-объект представляет собой конкретную фиктивную реализацию интерфейса, предназначенную исключительно для тестирования взаимодействия и относительно которого высказывается утверждение.
		https://ru.wikipedia.org/wiki/Mock-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82
	}
	
	{//#Jest
		Jest - автотесты, файлы должны содержать название .test || .spec и их будет запускать. Разработчики Facebook. Стал самым популярным, прост в использовании.
		https://jestjs.io/
		https://youtu.be/IEDe8jl5efU
		Основные методы: https://habr.com/ru/post/502302/
		Expect: https://jestjs.io/docs/ru/expect
		Пример Jest для тестирования интерфейса в React https://webformyself.com/testirovanie-prilozhenij-react-v-2019-godu/
		localhost\testing\intro-unit-testing
		
		Файлы с припиской .spec либо .test будут автотестироваться
		
		npm run test, команду получает из package.json параметр "scripts" текущей папки
	}
}

{//#Promise API
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Using_promises
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
	https://learn.javascript.ru/promise
	Git https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md
	Примеры
	es/es-6-8/11_promises.js
	es/es-2020/2_promises.js
	examples/microAndMacrotasks.js

	Promise (промис) - это объект, представляющий результат успешного или неудачного завершения асинхронной операции. Так как большинство людей пользуются уже созданными промисами, это руководство начнём с объяснения использования вернувшихся промисов до объяснения принципов создания. 
	В сущности, промис - это возвращаемый объект, в который вы записываете два колбэка вместо того, чтобы передать их функции.
	Объект Promise (промис) используется для отложенных и асинхронных вычислений.
	Promice - это специальный объект, который содержит своё состояние. Вначале pending («ожидание»), затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).
	Промисы необходимы для организации асинхронного кода.

	{//#Код
		var promise = new Promise(function(resolve, reject)
		{
			// Эта функция будет вызвана автоматически

			// В ней можно делать любые асинхронные операции,
			// А когда они завершатся — нужно вызвать одно из:
			// resolve(результат) при успешном выполнении
			// reject(ошибка) при ошибке
		})
		
		class Ajax
		{
			static echo(data)
			{
				return new Promise((resolve, reject) =>
				{
					setTimeout(() =>
					{
						if(data) resolve(data)
						else reject(new Error('error'))
					}, 150)
				})
			}
		}
	}
}

{//#Emmet
	https://emmet.io/
	Emmet (ранее Zen Coding) — набор плагинов для текстовых редакторов, которые в некоторой степени ускоряют написание кода HTML, XML, XSL, а также кода на некоторых других языках.
	
	"emmet.includeLanguages": {
		"javascript": "javascriptreact"
	}
}

{//#VSCode
	VSCode (Visual Studio Code) - редактор исходного кода, разработанный Microsoft для Windows, Linux и macOS. Позиционируется как «лёгкий» редактор кода для кроссплатформенной разработки веб- и облачных приложений.
	Включает в себя отладчик[8], инструменты для работы с Git[9], подсветку синтаксиса, IntelliSense[10] и средства для рефакторинга.
	https://code.visualstudio.com/
	https://youtu.be/QeUp3CahkQw
	
	{//#Фишки
		/** Описание функции */ - описание функции появится при наведении на её ссылку
		Справа снизу можно выбрать настройки табуляции. Необходимо использовать пробелы, т. к. таб на разных ОС - это разный символ, а пробел всегда один.
		Zen || Дзен - интерфейс только с редактором
		Word wrap - настройка переноса строк, Word Wrap Column по умолчанию 80
		При открытии параметров справа сверху есть значок с названием Параметры (JSON), там все настройки выставленные вручную, можно добавлять настройки при установке например расширений
		Установить Git, синхронизировать настройки VSCode и войти через Git, F1 - Publish to GitHub. Слева снизу выводится текущая ветка.
		Ctrl + Tab - навигация по списку открытых файлов
		Ctrl + P - навигация по списку файлов в проекте
		Ctrl + W - закрытие активного файла
		Ctrl + T - #Функция отобразит список функций для перехода к ней (можно в отдельном окне справа)
		Ctrl + ~ - консоль
		Ctrl + \ - открыть файл во втором окне
		Alt + Z - Перенос не влезающих строк визуально
		Alt + Стрелка - перенос строки
		Ctrl + Shift + L - на выделенном слове, найти и выделить все свлова в файле
		Ctrl + F2 - на слово нажимаешь и находит аттрибут
		Alt + Shift + I - поставит курсоры в конец выделений
		{//#Сниппеты
			F1 - snippets - js
			$0, $2-$n - туда табнется
			$1 - туда встанет курсор
			$переменная - будет выделена
		}
		
		{//#VSCodeРасширения
			Bracket Pair Colorizer - подсветит скобки https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer
			Auto Rename Tag - автопереименование открытых / закрытых тегов https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag
			Open in Browser - ПКМ в редакторе - открыть в браузере https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser
			Live Server - автообновление в браузере https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
			CSS Peek - создаёт ссылки в html на css https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek
			Import Cost - отображает размер импортируемых файлов https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost
			Debugger for Chrome - позволяет дебажить https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
			Live Share - для совместной разработки https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare
			ESLint - #Линтер контроль синтаксиса https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

			{//#Prettier - Code formatter - форматирование https://prettier.io/ https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
				Документация по параметрам: https://prettier.io/docs/en/options.html
				Гугл стандарты по формату: https://google.github.io/styleguide/jsguide.html

				Для активации Prettier необходимо в параметрах VSCode выставить Default Formatter и Format On Save
				
				"[javascript]": {
					"editor.defaultFormatter": "esbenp.prettier-vscode"
				},
				"[typescriptreact]": {
						"editor.defaultFormatter": "esbenp.prettier-vscode"
				},
				"editor.formatOnSave": true,
				"prettier.semi": false,
				"prettier.singleQuote": true,
				"prettier.bracketSpacing": false,
				"prettier.arrowParens": "avoid",
				"prettier.printWidth": 200,
				"prettier.tabWidth": 2,
				"prettier.trailingComma": "all",

				.prettierrc - конфиг
				.prettierignore указываются файлы для игнора
				
				semi - точка с запятой, не нужна, устаревшая практика! Есть исключительные ситуации, например перед IIFE (Immediately Invoked Functional Expression, немедленно вызываемое функциональное выражение), где Prettier знает о них и ставит, иначе возникнет ошибка в коде. Гугл с этим не согласны, хотя примеров и аргументов нет https://google.github.io/styleguide/jsguide.html#formatting-semicolons-are-required
				На своей практике реализовал проект на next.js, скрипт в других проектах использую без точек с запятой, ошибок нет.
				Популярный блогер Владилен Минин их так же не использует.
				
				singleQuote - одинарные кавычки. https://google.github.io/styleguide/jsguide.html#features-strings-use-single-quotes
				
				bracketSpacing - пробелы в теле объекта { a: 1 }, не ставить. https://google.github.io/styleguide/jsguide.html#formatting-horizontal-whitespace
				
				arrowParens - скобки вокруг оператора стрелочной функции: (a) => x, не обязательны, но не промаргать их добавление при добавлении аргумента (см. совет) https://google.github.io/styleguide/jsguide.html#features-functions-arrow-functions
				
				printWidth - количество символов в строке, 200. Стандарт пока не найден.
				
				tabWidth - количество пробелов в табуляции - 2. Два пробела. Почему не символ табов? Потому что это разный символ на разных ОС и табуляция поедет, а пробелы - это единый символ. Поэтому useTabs нельзя устанавливать в true. https://google.github.io/styleguide/jsguide.html#formatting-block-indentation
				
				trailingComma - запятые в конце, ставить. https://google.github.io/styleguide/jsguide.html#features-arrays-trailing-comma
			}

			EditorConfig for VS Code - импорт / экспорт настроек проекта для разных IDE https://editorconfig.org/ https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig

			Предустановленные:
			Emmet - позволяет писать конструкции в стиле ul>li*5 либо fs5 - font-size: 5px; При вводе ищет по введённым буквам, ! - создаёт базовый текст в html
			npm - пакетный менеджер, если не установлен https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script
		}
	}
}

{//#WebStorm
	WebStorm
	https://ru.wikipedia.org/wiki/WebStorm
	JetBrains WebStorm — интегрированная среда разработки на JavaScript, CSS & HTML от компании JetBrains, разработанная на основе платформы IntelliJ IDEA.
}

{//#IDE
	IDE - Интегри́рованная среда́ разрабо́тки, ИСP (англ. Integrated development environment — IDE), также единая среда разработки, ЕСР — комплекс программных средств, используемый программистами для разработки программного обеспечения (ПО).
	https://ru.wikipedia.org/wiki/Интегрированная_среда_разработки
}

{//#Генератор документации
	Генератор документации — программа или пакет программ, позволяющая получать документацию, предназначенную для программистов (документация на API) и/или для конечных пользователей системы,
	по особым образом комментированному исходному коду и, в некоторых случаях, по исполняемым модулям (полученным на выходе компилятора).
	https://ru.wikipedia.org/wiki/Генератор_документации
	
	{//#JSDoc
		JSDoc — генератор документации в HTML-формате из комментариев исходного кода на JavaScript.
		ОФФ https://jsdoc.app/
		Source https://github.com/jsdoc/jsdoc
		https://ru.wikipedia.org/wiki/JSDoc
		https://youtu.be/YK-GurROGIg
		См. jsdoc_example
		npm run doc - скомпилировать в папку out, название папки можно сменить
		В jsdoc.json нужно указать у "source": {"include": ["src"]}, иначе не увидит содержимое папки src
		В "opts" можно указать путь к папке с туториалами и файл редми, содержимое которого отобразится на главной
	}
}

{//#Облачные сервисы
	AWS (Amazon Web Services)
	Azure (Microsoft Azure)
	Google Cloud (Google Cloud Platform)
}

{//#Примеры кода, фишки, методы #.js
	{https://youtu.be/Ti2Q4sQkNdU
		#Константы #let #const es/es-6-8/1_let_const.js
		#Стрелочные #лямбда функции es/es-6-8/2_arrow_functions.js
		Параметры по умолчанию es/es-6-8/3_default_params.js
		#Строки #string es/es-6-8/4_strings.js
		Рест и спреад es/es-6-8/5_rest_spread.js
		Объекты es/es-6-8/6_objects.js
		Модули es/es-6-8/7_modules/module.js
		#Классы #Classes es/es-6-8/8_classes.js examples/classes.js
		#Символы #Symbol es/es-6-8/9_symbols.js
		Генераторы es/es-6-8/10_generators.js
		Промисы es/es-6-8/11_promises es/es-2020/2_promises.js
		Мап и сет es/es-6-8/12_map_set.js
		Рефлект es/es-6-8/13_reflect.js patterns/2 structural/9_proxy.js
		Прокси es/es-6-8/14_proxy.js
	}

	#Замыкания #Closures examples/closure.js
	#Контекст #Context examples/context.js
	#Примеры examples/example.js
	#MVC examples/mvc.js
	#Импорты #Imports es/es-2020/1_imports.js
	#?? #Nullable es/es-2020/3_nullable.js
	#?. #Optional es/es-2020/4_optional.js
	
	async - вернёт Promise, хорошая практика обработки в теле async функции с помощью try catch
	await - заставляет ждать Promise, выполнение функции, а затем продолжает код
	for...of - то же, что и for...in, только в in цикл по ключу (for key in obj), а в of по значению (for val of obj), таким образом можно по циклу вызывать функцию сразу либо присваивать новое значение value, без obj['key']
	static - позволит обратиться к свойству либо методу класса без запуска конструктора
	export default - запускает функцию по умолчанию при импорте модуля. Например импорт класса из модуля: const Person = module.default
	globalThis - это стандартизированный window / global и т. д. для всех платформ
	?? - это || за исключением того, что нормальные типизированные значения считает приемлемыми, например false || 'default false' = false
	?. - проверка на существование, например свойства объекта или DOM элемента. key1?.key2?.key3 либо document.querySelector('div')?, массив: key1?.key2?.[id], функция: key1?.key2?.func.?()
	|> - pipeline operator, передаёт в следующую функцию результат выполнения предыдущей: func1(func2(func3('qwe'))) = 'qwe' |> func3 |> func2 |> func1;
	function* FunctionName() - функция-генератор, yield - пошаговый return на котором функция приостанавливает выполнение и возвращает это значение, если функция будет вызвана заново, то она продолжит выполнение после yield
	Boolean([] {} function(){}) = true
	=== сравнивает без приведения типов, а == с приведением
}

{//#W3C #DOM #Events
	https://learn.javascript.ru/dom-nodes
	DOM-дерево
	Основой HTML-документа являются теги.
	В соответствии с объектной моделью документа («Document Object Model», коротко DOM), каждый HTML-тег является объектом.

	https://ru.wikipedia.org/wiki/Консорциум_Всемирной_паутины
	Организация, разрабатывающая и внедряющая технологические стандарты для Всемирной паутины.

	https://www.w3.org/TR/DOM-Level-3-Events/
	W3C, DOM Events, UI Events
	
	{//#let #const #var #Необъявленная переменная #Переменные #Объявление
		let и const существуют в scope, не всплывают, const не переприсваивается
		var всплывает в начало функции
		Необъявленная переменная создаётся при присвоении необъявленному идентификатору значения, всплывает до глобальной области либо выдаст ошибку в strict
		Объявленные переменные с не присвоенным значением = undefined
		null == undefined в !strict

		{//#Всплытие #Поднятие #Погружение #Перехват #Hoisting
			https://developer.mozilla.org/ru/docs/Glossary/Hoisting

			{//У переменных
				У var и function
				Function Expression, стрелочные функции, class не всплывают

				//#Временная #мёртвая #зона» (#Temporal #Dead #Zone, #TDZ)
				В коде имеется зона, простирающаяся от входа в область видимости до объявления переменной или константы. При обращении к переменной или константе в этой зоне будет выдана ошибка. Это и есть «временная мёртвая зона» (Temporal Dead Zone, TDZ).

				https://learn.javascript.ru/var
				«hoisting» - это то, где объявлена переменная, какое у неё значение при обращении, когда его можно менять, где эта переменная доступна.
				Так же поведение например var называется «hoisting» (всплытие, поднятие), потому что все объявления переменных var «всплывают» в самый верх функции.
				Объявления переменных «всплывают», но присваивания значений – нет (переменные имеют значение undefined до строки с присвоением значения).
			}

			{//У events
				https://learn.javascript.ru/bubbling-and-capturing
				Когда на элементе происходит событие, обработчики сначала срабатывают на нём, потом на его родителе, затем выше и так далее, вверх по цепочке предков.
				Почти все события всплывают. Например, событие focus не всплывает.
				Но любой промежуточный обработчик может решить, что событие полностью обработано, и остановить всплытие. Для этого нужно вызвать метод event.stopPropagation(). Он препятствует продвижению события дальше, но на текущем элементе все обработчики будут вызваны.
				Для того, чтобы полностью остановить обработку, существует метод event.stopImmediatePropagation(). Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе.
				
				Существует ещё одна фаза из жизненного цикла события – «погружение» (иногда её называют «перехват»). Она очень редко используется в реальном коде, однако тоже может быть полезной. Отлавливается с помощью addEventListener с {capture: true}
				
				При наступлении события – самый глубоко вложенный элемент, на котором оно произошло, помечается как «целевой» (event.target).
				Затем событие сначала двигается вниз от корня документа к event.target, по пути вызывая обработчики, поставленные через addEventListener(...., true), где true – это сокращение для {capture: true}.
				Далее обработчики вызываются на целевом элементе.
				Далее событие двигается от event.target вверх к корню документа, по пути вызывая обработчики, поставленные через on<event> и addEventListener без третьего аргумента или с третьим аргументом равным false.
				Каждый обработчик имеет доступ к свойствам события event:

				event.target – самый глубокий элемент, на котором произошло событие.
				event.currentTarget (=this) – элемент, на котором в данный момент сработал обработчик (тот, на котором «висит» конкретный обработчик)
				event.eventPhase – на какой фазе он сработал (погружение=1, фаза цели=2, всплытие=3).
				Фаза погружения (capturing phase) – событие сначала идёт сверху вниз (от target к родителям).
				Фаза цели (target phase) – событие достигло целевого(исходного) элемента.
				Фаза всплытия (bubbling stage) – событие начинает всплывать (от родителей к target).

				Всплытие и погружение являются основой для «#делегирования событий» – очень мощного приёма обработки событий.
			}
		}
	}
}

{//#REST API
	REST - (от англ. Representational State Transfer — «передача состояния представления») — архитектурный стиль взаимодействия компонентов распределённого приложения в сети.
	Позволяет общаться с удалёным API.
	https://ru.wikipedia.org/wiki/REST
}

{//#Динамический ключ
	Динамический ключ - name: value, ключом будет name, но если его обернуть в [], то у ключа [name], name будет переменной
}

{//#JSON Web Token (JWT)
	JSON Web Token (JWT) — это открытый стандарт (RFC 7519) для создания токенов доступа, основанный на формате JSON. Как правило, используется для передачи данных для аутентификации в клиент-серверных приложениях.
	Токены создаются сервером, подписываются секретным ключом и передаются клиенту, который в дальнейшем использует данный токен для подтверждения своей личности.
	#LocalStorage Хранить можно в LocalStorage, чтобы после рестарта системы получать его заново
	#SessionStorage очищает данные при закрытии браузера
}

{//#Деструктуризация
	https://learn.javascript.ru/destructuring
	Деструктуризация (destructuring assignment) – это особый синтаксис присваивания, при котором можно присвоить массив или объект сразу нескольким переменным, разбив его на части.

	// 1
	const fio = {firstName: 'name', lastName: 'family'}
	spreadFIO(fio)
	function spreadFIO({firstName, lastName})
	{
		alert(firstName); // name
		alert(lastName);  // family
	}

	// 2 ...spread
	{...fio}
	[...fio]

	// 3 Переприсвоение
	fio = {...fio, firstName: 'test'}
	alert(firstName); // test
	alert(lastName);  // family

	// 4
	let [firstName, lastName] = ["Илья", "Кантор"];
	
	alert(firstName); // Илья
	alert(lastName);  // Кантор
	
	// 5
	let options = {
	  title: "Меню",
	  width: 100,
	  height: 200
	};
	
	let {title, width, height} = options;
	
	alert(title);  // Меню
	alert(width);  // 100
	alert(height); // 200

	let {title: t, width: w, height: h} = options;
	
	alert(t);  // Меню
	alert(w);  // 100
	alert(h); // 200

	{//#spread #rest
		https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax
		Spread syntax позволяет расширить доступные для итерации элементы (например, массивы или строки) в местах
		для функций: где ожидаемое количество аргументов для вызовов функций равно нулю или больше нуля
		для элементов (литералов массива)
		для выражений объектов: в местах, где количество пар "ключ-значение" должно быть равно нулю или больше (для объектных литералов)
		
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
		Синтаксис параметра rest позволяет функции принимать неопределенное число аргументов в виде массива, обеспечивая способ представления вариадических функций в JavaScript.

		{//#Копирование #Клонирование объектов и ссылки
			https://learn.javascript.ru/object-copy
			Объекты хранят ссылку в памяти на значение, а не само значение.
			Для «простого клонирования» объекта можно использовать {...spread} либо Object.assign - работает аналогично. Необходимо помнить, что данные методы не делают глубокое клонирования объекта. Если внутри копируемого объекта есть свойство, значение которого не является примитивом, оно будет передано по ссылке. Для создания «настоящей копии» (полного клона объекта) можно воспользоваться методом из сторонней JavaScript-библиотеки lodash - _.cloneDeep(obj).
			Встроенным в JS способом можно скопировать использовав JSON.stringify и JSON.parse.
		}
	}
}

{//#Тернарный оператор
	Операнд(условие) ? операнд(условие выполнено) : операнд(else)
}

{//#Транспайлер #Транспиляция
	Транспайлер — программа, выполняющая транспиляцию программы. Транспиляция — преобразование программы, при котором используется исходный код программы, написанной на одном языке программирования в качестве исходных данных, и производится эквивалентный исходный код на другом языке программирования.
}

{//#Bundle #Бандл
	Единый файл, в который транспилирован код
}

{//#Нативный
	Нативный - означает родной, исходный, первоначальный.
	Нативные приложения (англ. native application) — это прикладные программы, которые были разработаны для использования на определённой платформе или на определённом устройстве.
}

{//#Prototype #Прототипы
	Каждый объект имеет прототип от наследуемого __proto__. В ES5 Object.getPrototypeOf()
	Через свойство prototype можно добавлять и изменять параметры
	prototype - прототип текущего класса, а __proto__ - родительского
	Например, Object.prototype существует, а obj = {}, obj.prototype не существует. Object.prototype === obj.__proto__
	Создать прототип у newObj = Object.create(proto, {{a: 'text'}}). Пример: "patterns\1 creational\3_prototype.js"
}

{//#HTML
	https://developer.mozilla.org/ru/docs/Learn/HTML
	HyperText Markup Language - язык гипертекстовой разметки
	Тег style пишется в head. Блокирует рендер страницы http://htmlbook.ru/html/style
	Тег script пишется в head либо body. Блокирует загрузку страницы до завершения скрипта, если без параметров async или defer (в случае, если порядок загрузки скриптов важен) https://developer.mozilla.org/ru/docs/Web/Performance/How_browsers_work
}

{//#CSS
	https://developer.mozilla.org/ru/docs/Learn/CSS
	Cascading Style Sheets - каскадные таблицы стилей
	Последний заданный стиль перебивает предыдущие, у id приоритет над классами
	CSSOM дерево включает в себя стили пользовательского агента - это стили, которые браузер вставляет по умолчанию.
	В CSS мы, говоря упрощённо, имеем два типа элементов — блочные и строчные. https://developer.mozilla.org/ru/docs/Learn/CSS/Building_blocks/The_box_model
	Блочная вёрстка https://metanit.com/web/html5/8.1.php

	{//#Селекторы Виды селекторов
		https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Selectors
		https://developer.mozilla.org/ru/docs/Web/CSS/Specificity#selector_types

		Универсальный - *
		Селектор тегов - tag
		Селектор классов - .class
		Селектор идентификаторов - #id
		Селектор атрибутов
			[attr]
			Представляет элементы с именем атрибута attr.
			[attr=value]
			Представляет элементы с именем атрибута attr, значение которого в точности равно значению .
			[attr~=value]
			Представляет элементы с именем атрибута attr, значение которого представляет собой список слов, разделенных пробелами, одно из которых является точным значением .
			[attr|=value]
			Представляет элементы с именем атрибута attr, значение которого может быть точно значением или может начинаться со значения, сразу за которым следует дефис -(U + 002D). Он часто используется для сопоставления языковых субкодов.
			[attr^=value]
			Представляет элементы с именем атрибута attr, значение которого предваряется (предваряется) значением .
			[attr$=value]
			Представляет элементы с именем атрибута attr, значение которого имеет суффикс (за которым следует) value .
			[attr*=value]
			Представляет элементы с именем атрибута attr, значение которого содержит по крайней мере одно вхождение значения в строке.
			[attr operator value i]
			Добавление i(или I) перед закрывающей скобкой приводит к тому, что значение сравнивается без учета регистра (для символов в диапазоне ASCII).
			[attr operator value s] 
			Добавление s(или S) перед закрывающей скобкой приводит к тому, что значение сравнивается с учетом регистра (для символов в диапазоне ASCII).
		Селектор потомков (контекстный селектор) - div#paragraph1 p.note
		Селектор дочерних элементов - p.note > b
		Селектор элементов одного уровня - h1 + p
		Селектор псевдоклассов - a:active
		Селектор псевдоэлементов - p::first-letter
		Комбинатор всех соседних элементов - p ~ span выберет все элементы <span>, которые находятся после элемента <p> внутри одного родителя.
		Комбинатор запятая - div, span выберет оба элемента - и <div> и <span>
		Комбинатор потомков - div span выберет все элементы <span>, которые находятся внутри элемента <div>.
	}

	{//#Вес #Специфичность #Specificity
		https://developer.mozilla.org/ru/docs/Web/CSS/Specificity

		В следующем списке типы селекторов расположены по возрастанию специфичности:
		селекторы типов элементов (например, h1) и псевдоэлементов (например, ::before).
		селекторы классов (например, .example), селекторы атрибутов (например, [type="radio"]) и псевдоклассов (например, :hover).
		селекторы идентификаторов (например, #example).
		Универсальный селектор (*), комбинаторы (+, >, ~, ' ') и отрицающий псевдокласс (:not()) не влияют на специфичность. (Однако селекторы, объявленные внутри :not(), влияют)

		Стили, объявленные в элементе (например, style="font-weight:bold"), всегда переопределяют любые правила из внешних файлов стилей и, таким образом, их специфичность можно считать наивысшей.

		Важное исключение из правил - !important
		Когда при объявлении стиля используется модификатор !important, это объявление получает наивысший приоритет среди всех прочих объявлений. Хотя технически модификатор !important не имеет со специфичностью ничего общего, он непосредственно на неё влияет.
		Поскольку !important усложняет отладку, нарушая естественное каскадирование ваших стилей, он не приветствуется и следует избегать его использования. Если к элементу применимы два взаимоисключающих стиля с модификатором !important, то применён будет стиль с большей специфичностью.
	}
	
	{//#margin
		1: all
		2: top, bottom && right, left
		3: top && right, left && bottom
		4: top, right, bottom, left

		Вертикальные margin схлопываются, горизонтальные нет
	}

	{//#SASS #SCSS
		https://sass-scss.ru/
		https://youtu.be/Mrq2ora_p0o
		SASS, SCSS - препроцессор, компилирует код в css
		SCSS - css подобный
		SASS - в виде отступов за место фигурных скобок и без точки с запятой
	}

	{//#LESS
		https://ru.wikipedia.org/wiki/LESS_(язык_стилей)
		То же, что и #SCSS, только по своему
	}
}

{//#Адаптивность #Отзывчивость
	https://html5book.ru/otzyvchivyj-dizayn-saita/
	Адаптивный дизайн - один макет для каждого устройства
	Отзывчивый дизайн - один макет для всех устройств

	Adaptive Design (AWD) — адаптивный дизайн, или динамический показ — проектирование сайта с условиями, которые изменяются в зависимости от устройства, базируясь на нескольких макетах фиксированной ширины.
	Responsive Design (RWD) — отзывчивый дизайн — проектирование сайта с определенными значениями свойств, например, гибкая сетка макета, которые позволяют одному макету работать на разных устройствах;
}

{//#Accessibility #Доступность
	https://developer.mozilla.org/ru/docs/Web/Accessibility
	Доступность (Accessibility, A11y в англоязычной среде) в веб-разработке — это обеспечение возможности использования сайтов как можно большим числом людей, включая тех, чьи способности как-либо ограничены.
}

{//#Semantics #Семантика
	https://developer.mozilla.org/ru/docs/Glossary/Semantics
	В программировании, Семантика означает значение фрагмента кода - например, «к какому результату приведёт выполнение этой строки JavaScript?», или «каково предназначение или какая роль у этого элемента HTML» (а не «как он выглядит ?».)
}

{//#Операторы
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators
	Эта глава описывает выражения и операторы языка JavaScript, такие как операторы присваивания, сравнения, арифметические, битовые, логические, строчные, и различные специальные операторы.

	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators
	Эта глава описывает все операторы, выражения и ключевые слова языка JavaScript.

	++ #инкремент
	-- #декремент
	a + b (operand1 operator operand2)
}

{//#Чистая функция #Pure Function
	https://habr.com/ru/post/437512/
	Функция должна удовлетворять двум условиям, чтобы считаться «чистой»:
	— Каждый раз функция возвращает одинаковый результат, когда она вызывается с тем же набором аргументов
	— Нет побочных эффектов

	Логика происходит внутри без взаимодействия с глобальными переменными.
	Такие функции можно переиспользовать.
	Функция чистая, если не имеет побочных эффектов и каждый раз возвращает одинаковый результат, когда она вызывается с тем же набором аргументов.
	Побочные эффекты включают: меняющийся вход, HTTP-вызовы, запись на диск, вывод на экран.
	Вы можете безопасно клонировать, а затем менять входные параметры. Просто оставьте оригинал без изменений.
	...spread — это самый простой способ клонирования объектов и массивов.
}

{//#freeze #запрет изменения объекта
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
	Метод Object.freeze() замораживает объект: это значит, что он предотвращает добавление новых свойств к объекту, удаление старых свойств из объекта и изменение существующих свойств или значения их атрибутов перечисляемости, настраиваемости и записываемости.
	В сущности, объект становится эффективно неизменным. Метод возвращает замороженный объект.
	Для вложенных объектов для предотвращения изменения необходимо так же вызывать метод freeze рекурсивно - глубокая заморозка.
}

{//#Дескрипторы
	https://behemothoz.gitbooks.io/js-learn/content/object/deskriptori-svoistv.html
	https://learn.javascript.ru/descriptors-getters-setters
	Дескриптор свойства – это обычный JavaScript-объект, описывающий атрибуты и значение свойства.
	Дескрипторы свойств, присутствующие в объектах, бывают двух основных типов: дескрипторы данных и дескрипторы доступа.
	Дескриптор данных - это свойство, имеющее значение, которое может быть (а может и не быть) записываемым.
	Дескриптор доступа - это свойство, описываемое парой функций - геттером и сеттером.
	Дескриптор может быть только чем-то одним из этих двух типов. Он не может быть одновременно обоими.

	{//#get #set #getter #setter #геттер #сеттер
		https://learn.javascript.ru/property-accessors
		Свойство объекта задаётся как функция get prop(), при получении prop выполнится функция в теле prop(). При использовании this.prop в get и set, чтобы не зациклить используется другая переменная, как правило _prop. В set prop(value) должно подаваться value. В итоге в объекте данные хранятся и берутся не из той к которой обращаемся из вне. Пример: es/es-6-8/8_classes.js
	}
}

{//#Reflect #Рефлект
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Reflect
	es/es-6-8/13_reflect.js
	patterns/2 structural/9_proxy.js
	Reflect - это встроенный объект, который предоставляет методы для перехватывания JavaScript операций. Эти методы аналогичны методам proxy handler ов. Reflect - это не функциональный, а простой объект, он не является сконструированным.
	В отличие от большинства глобальных объектов, Reflect - это не конструктор. Вы не можете использовать его с оператором new или вызывать Reflect, как функцию. Все свойства и методы объекта Reflect являются статическими (так же, как и у объекта Math).
}

{//#Proxy #Прокси
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Proxy
	Объект Proxy позволяет создать прокси для другого объекта, может перехватывать и переопределить основные операции для данного объекта.
}

{//#Nullable #??
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
	Оператор нулевого слияния (??) это логический оператор, который возвращает значение правого операнда когда значение левого операнда равно null или undefined, в противном случае будет возвращено значение левого операнда.
}

{//#Optional #?.
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Optional_chaining
	Оператор опциональной последовательности ?. позволяет получить значение свойства, находящегося на любом уровне вложенности в цепочке связанных между собой объектов, без необходимости проверять каждое из промежуточных свойств в ней на существование. ?. работает подобно оператору ., за исключением того, что не выбрасывает исключение, если объект, к свойству или методу которого идёт обращение, равен null или undefined. В этих случаях он возвращает undefined.
	Таким образом, мы получаем более короткий и понятный код при обращении к вложенным по цепочке свойствам объекта, когда есть вероятность, что какое-то из них отсутствует.
}

{//#Layout
	Неизменная часть сайта, некий шаблон
}

{//#Fonts #Шрифты
	#Google https://fonts.google.com
}

{//#БЭМ
	БЭМ (Блок-Элемент-Модификатор) — методология web-разработки, а также набор интерфейсных библиотек, фреймворков и вспомогательных инструментов.
	https://habr.com/ru/company/ruvds/blog/347194/

	#Блок
	Блок — это независимый интерфейсный компонент. Блок может быть простым или составным (содержать другие блоки). При создании блока нужно обеспечивать возможность его использования в любом месте web-страницы, а также повторения в том же самом месте страницы (родительском элементе). Блок должен включать в себя всю реализацию, необходимую для представления части интерфейса, которую он выражает.
	Пример: .stick-man

	#Элемент
	Элемент — это составная часть блока. Элементы контекстно-зависимы: они имеют смысл только в рамках своего блока. Элемент — не обязательная составляющая блока, небольшие блоки обходятся без элементов.
	Пример: .stick-man__head

	#Модификатор
	Модификатор — это свойство блока или элемента, задающее изменения в их внешнем виде или поведении. Модификатор может быть булевым (например, button_big) или парой ключ-значение (например, menu_type_bullet, menu_type_numbers). У блока или элемента может быть несколько модификаторов одновременно.
	Пример: .stick-man--red

	Цель создания БЭМ
	БЭМ предлагает общую семантическую модель для всех технологий, использующихся во фронтэнд разработке (HTML, CSS, JavaScript, шаблоны и др.)

	Используя понятия «блок», «элемент» и «модификатор» можно описать древовидную структуру документа. Такое описание называется BEM tree и является семантическим представлением интерфейса, абстракцией над DOM tree.
}

{//#Legacy code
	https://en.wikipedia.org/wiki/Legacy_system
	Legacy code - устаревший, но используемый код
}

{//#Миксин
	https://developer.mozilla.org/ru/docs/Glossary/Mixin
	Миксин (дословно: "примесь) - класс (class) или интерфейс, в котором некоторые или все его методы (methods) и/или свойства (properties) не реализованы, требуя, чтобы другой класс или интерфейс обеспечивал недостающие реализации. Новый класс или интерфейс затем включает в себя как свойства и методы из миксина, так и те, которые он определяет сам. Все методы и свойства используются совершенно одинаково, независимо от того, реализованы ли они в миксине, интерфейсе или классе, реализующем миксин.
	Преимущество миксинов заключается в том, что они могут быть использованы для упрощения проектирования API, в которых несколько интерфейсов должны включать одни и те же методы и свойства.
	Например, миксин WindowOrWorkerGlobalScope используется для предоставления методов и свойств, которые должны быть доступны как в интерфейсах Window, так и в интерфейсах WorkerGlobalScope. Миксин осуществляется с помощью обоих этих интерфейсов.
}

{//#MVP
	Минимально жизнеспособный продукт (англ. minimum viable product, MVP) — продукт, обладающий минимальными, но достаточными для удовлетворения первых потребителей функциями. Основная задача — получение обратной связи для формирования гипотез дальнейшего развития продукта.[1] Сбор информации от MVP зачастую дешевле, чем разработка продукта с большим количеством функций. Это позволяет снизить затраты и риски, если продукт не заработает, например, из-за неверных предположений.
}

{//#enum
	Тип enum или по-другому перечисление - это особый тип данных, который позволяет задавать некий список взаимосвязанных констант. Переменные этого типа могут принимать значения только из заданного в перечислении набора. Это свойство перечислений делает их удобным инструментом для реализации списка связанных значений.
}

{//#Палиндром
	Текст, который читается одинаково в обоих направлениях, например довод.
	split строку, reverse массив, join обратно в строку
}

{//#Сборка #мусора #Управление #памятью
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Memory_Management
	Каждый объект JavaScript имеет ссылку на свой прототип (неявная ссылка) и ссылки на значения своих полей (явные ссылки).
	1. Сборка мусора на основе подсчёта ссылок
	Это наиболее примитивный алгоритм сборки мусора, сужающий понятие "объект более не нужен" до "для данного объекта более нет ни одного объекта, ссылающегося на него". Объект считается подлежащим уничтожению сборщиком мусора, если количество ссылок на него равно нулю.
	Основное ограничение данного наивного алгоритма заключается в том, что если два объекта ссылаются друг на друга (создавая таким образом циклическую ссылку), они не могут быть уничтожены сборщиком мусора, даже если "более не нужны".
	2. Алгоритм "Mark-and-sweep"
	Данный алгоритм сужает понятие "объект более не нужен" до "объект недоступен".
	Основывается на понятии о наборе объектов, называемых roots (в JavaScript root'ом является глобальный объект). Сборщик мусора периодически запускается из этих roots, сначала находя все объекты, на которые есть ссылки из roots, затем все объекты, на которые есть ссылки из найденных и так далее. Стартуя из roots, сборщик мусора, таким образом, находит все доступные объекты и уничтожает недоступные.
	Данный алгоритм лучше предыдущего, поскольку "ноль ссылок на объект" всегда входит в понятие "объект недоступен". Обратное же - неверно, как мы только что видели выше на примере циклических ссылок.
	Начиная с 2012 года, все современные веб-браузеры оснащаются сборщиками мусора, работающими исключительно по принципу mark-and-sweep ("пометь и выброси"). Все усовершенствования в области сборки мусора в интерпретаторах JavaScript (генеалогическая/инкрементальная/конкурентная/параллельная сборка мусора) за последние несколько лет представляют собой усовершенствования данного алгоритма, но не новые алгоритмы сборки мусора, поскольку дальнейшее сужение понятия "объект более не нужен" не представляется возможным.
}

{//#Типы данных
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures

	В js 8 типов данных: null, undefined, boolean, number, string, bigint, object, symbol, среди них все примитивные, кроме object

	Стоит отметить два особых случая работы оператора typeof: возврат "object" для значения null и "function" для функций: первое принято считать ошибкой языка, сохраненной ради обратной совместимости, второе является условностью, удобной для проверки на принадлежность значения категории функций, где функция - это особый, "вызываемый", объект.

	Если проверить тип структуры всё же необходимо, то в этом случае желательно использовать оператор instanceof, так как именно он отвечает на вопрос о том, какой конструктор был использован для создания структуры.

	{//#Number
		https://learn.javascript.ru/number
		В соответствии со стандартом ECMAScript, существует только один числовой тип, который представляет собой 64-битное (8 байт) число двойной точности согласно стандарту IEEE 754
		52 из них используется для хранения цифр, 11 из них для хранения положения десятичной точки (если число целое, то хранится 0), и один бит отведён на хранение знака
		Число двойной точности (Double precision, Double) https://ru.wikipedia.org/wiki/Число_двойной_точности
		IEEE 754-2008 https://ru.wikipedia.org/wiki/IEEE_754-2008
		Числа двойной точности с плавающей запятой эквивалентны по точности числу с 15-17 значащими десятичными цифрами (в среднем 16,3) в диапазоне примерно от 10^-308 до 10^308

		alert( 0.1 + 0.2 ); // 0.30000000000000004. Решение: Number((0.1 + 0.2).toFixed(2)) // '0.30' = 0.3
		Число хранится в памяти в бинарной форме, как последовательность бит – единиц и нулей. Но дроби, такие как 0.1, 0.2, которые выглядят довольно просто в десятичной системе счисления, на самом деле являются бесконечной дробью в двоичной форме.
		Другими словами, что такое 0.1? Это единица делённая на десять — 1/10, одна десятая. В десятичной системе счисления такие числа легко представимы, по сравнению с одной третьей: 1/3, которая становится бесконечной дробью 0.33333(3).
		Деление на 10 гарантированно хорошо работает в десятичной системе, но деление на 3 – нет. По той же причине и в двоичной системе счисления, деление на 2 обязательно сработает, а 1/10 становится бесконечной дробью.
		В JavaScript нет возможности для хранения точных значений 0.1 или 0.2, используя двоичную систему, точно также, как нет возможности хранить одну третью в десятичной системе счисления.
		Числовой формат IEEE-754 решает эту проблему путём округления до ближайшего возможного числа. Правила округления обычно не позволяют нам увидеть эту «крошечную потерю точности», но она существует.
		Пример:
		alert( 0.1.toFixed(20) ); // 0.10000000000000000555
		И когда мы суммируем 2 числа, их «неточности» тоже суммируются.
		Вот почему 0.1 + 0.2 – это не совсем 0.3.
		Не только в JavaScript
		Справедливости ради заметим, что ошибка в точности вычислений для чисел с плавающей точкой сохраняется в любом другом языке, где используется формат IEEE 754, включая PHP, Java, C, Perl, Ruby.
		Можно ли обойти проблему? Конечно, наиболее надёжный способ — это округлить результат используя метод toFixed(n):
		let sum = 0.1 + 0.2;
		alert( sum.toFixed(2) ); // 0.30
		Помните, что метод toFixed всегда возвращает строку. Это гарантирует, что результат будет с заданным количеством цифр в десятичной части. Также это удобно для форматирования цен в интернет-магазине $0.30. В других случаях можно использовать унарный оператор +, чтобы преобразовать строку в число:
		let sum = 0.1 + 0.2;
		alert( +sum.toFixed(2) ); // 0.3
	}

	{//#BigInt
		Является встроенным объектом, который предоставляет способ представления целых чисел, которые больше 2^53, что является наибольшим числом, которое JavaScript может надёжно представить с помощью Number примитива.
		Например 19241924124n
	}

	{//#String
		Он представляет собой цепочку «элементов» 16-битных беззнаковых целочисленных значений. Каждый такой элемент занимает свою позицию в строке. Первый элемент имеет индекс 0, следующий — 1, и так далее. Длина строки — это количество элементов в ней.
	}

	{//#null
		https://developer.mozilla.org/ru/docs/Glossary/Null
		В JavaScript, null – это значение, специально обозначенное как примитив, так как по поведению это в самом деле видимый примитив. Но при этом от null унаследованы все остальные Объекты, поэтому, несмотря на то, что null возвращает примитивное значение, его тип это объект: typeof null === 'object'
	}

	{//#Object #Объект #Массив #Array
		Объект JavaScript — это таблица соотношений между ключами и значениями. Ключи — это строки (или Symbol), а значения могут быть любыми. Это делает объекты полностью отвечающими определению хеш-таблицы
		
		https://ru.wikipedia.org/wiki/Хеш-таблица
		Хеш-таблица — это структура данных, реализующая интерфейс ассоциативного массива, а именно, она позволяет хранить пары (ключ, значение) и выполнять три операции: операцию добавления новой пары, операцию поиска и операцию удаления пары по ключу.

		Есть два типа свойств: свойство-значение и свойство-акцессор (свойство, обёрнутое в геттер и сеттер). Они отличаются определёнными атрибутами.

		Функции — это обычные объекты, имеющие дополнительную возможность быть вызванными для исполнения.

		JavaScript имеет стандартную библиотеку встроенных объектов https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects

		{//#Object
			Переменная содержит ссылку, а не само значение.
			Переприсвоенная ссылка аргументу функции не повлияет на исходный объект.

			Параметры всегда передаются по значению, но в переменные, представляющие объекты, записаны ссылки на объекты. Поэтому, когда в функцию передают объект и меняют свойство этого объекта, это изменение сохраняется в объекте и при выходе из функции. В результате возникает ощущение того, что параметры в функции передаются по ссылке. Но если изменить значение переменной, представляющей объект, это изменение не повлияет на объекты, находящиеся за пределами функции.

			Вот пример:

			function changeStuff(a, b, c)
			{
				a = a * 10;
				b.item = "changed";
				c = {item: "changed"};
			}

			var num = 10;
			var obj1 = {item: "unchanged"};
			var obj2 = {item: "unchanged"};

			changeStuff(num, obj1, obj2);

			console.log(num);
			console.log(obj1.item);
			console.log(obj2.item);

			Вот что выведет этот код:

			10
			changed
			unchanged
		}

		{//#Слабые #Ссылки
			https://habr.com/ru/post/163679
			Слабые ссылки отличаются от обычных тем, что не препятствуют удалению объекта из памяти. Когда память, занимаемая объектом, освобождается, все указывающие на него слабые ссылки обнуляются. В некоторых реализациях в этом случае также вызывается установленный пользователем обработчик — финализатор.

			Например отображение, в котором ключом будет объект, а значением — вспомогательная информация.
			Пример функций #WeakMap #WeakSet
		}
	}

	{//#Символы #Symbol
		https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol
		Создаёт уникальное значение, всегда, не видим для перебора через in
		Символ (анг. Symbol) — это уникальный и неизменяемый тип данных, который может быть использован как идентификатор для свойств объектов. Символьный объект (анг. symbol object) — это объект-обёртка (англ. wrapper) для примитивного символьного типа.
	}

	{//#Коллекции #Map #Set #WeakMap #WeakSet
		https://learn.javascript.ru/map-set
		Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.
		Map - реализация простого ассоциативного массива (словаря). Он содержит данные в виде набора пар ключ/значение(ключи уникальны) и предоставляет методы для доступа и манипулирования этими данными. Ключом может быть любой тип.
		Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.
		Разница между Map и WeakMap:
			1. Только у Map ключи являются перечисляемыми. Это позволяет оптимизировать сборку мусора для WeakMap.
			2. #Слабые ссылки у WeakMap WeakSet - сборщик мусора очистит ссылки на несуществующие объекты (в ключе)
			3. Map позволяет использовать ключи любого типа, WeakMap - ключи только объекты
		WeakMap https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
	}

	{//#Иммутабельность
		Все типы данных в JavaScript, кроме объектов, являются иммутабельными (значения не могут быть модифицированы, а только перезаписаны новым полным значением). Например, в отличии от C, где строку можно посимвольно корректировать, в JavaScript строки пересоздаются только полностью. Значения таких типов называются «примитивными значениями».
	}
}

{//#Браузер #Server
	Как работают браузеры https://developer.mozilla.org/ru/docs/Web/Performance/How_browsers_work
	Серверное программирование веб-сайтов https://developer.mozilla.org/ru/docs/Learn/Server-side

	Browserstack фактически предоставляет вам полный удаленный доступ к виртуальным машинам, поэтому вы можете протестировать свой сайт в наиболее распространенных средах. https://www.browserstack.com
	
	{//#Web #Performance #Производительность #Рендер
		Производительность в web https://developer.mozilla.org/ru/docs/Web/Performance

		Этапы рендеринга включают в себя стилизацию, компоновку (layout), отрисовку (paint) и, в некоторых случаях, композицию (composition). CSSOM и DOM деревья, созданные на предыдущем этапе комбинируются в дерево рендера, которое затем используется для расчёта положения каждого видимого элемента. После этого элементы будут отрисованы на экране. В некоторых случаях содержимое может быть вынесено на отдельные слои и совмещено (composition) - такой подход увеличивает производительность, позволяя отрисовывать содержимое экрана на графическом процессоре вместо ЦПУ. Это освобождает основной поток.

		{//#Lazy loading
			Ленивая загрузка. Откладывает загрузку ненужного на текущий момент контента.
			Такой код в Network будет помечен как например 1.chunk.js с соответствующим комментарием вначале файла
		}

		Сканер предзагрузки загружает скрипты и файлы заранее.
		Ожидание получения CSS не блокирует парсинг HTML, но он блокирует JavaScript, потому что JavaScript часто используется для выборки узлов документа по CSS-селекторам.

		{//#CRP
			Критические этапы рендеринга (Critical Rendering Path) https://developer.mozilla.org/ru/docs/Web/Performance/Critical_rendering_path

			Производительность Web-приложений включает в себя запросы к серверу, получение ответов, загрузку, парсинг и выполнение скриптов, рендеринг, компоновку и отрисовку пикселей. 
			Загрузка веб-страницы или приложения начинается с запроса HTML. Сервер возвращает HTTP-ответ, состоящий из заголовков (headers) и тела запроса. Именно в теле запроса содержится HTML-документ. Браузер начинает парсить загружаемый HTML, преобразуя полученные байты документа в DOM-дерево. Браузер создаёт новый запрос каждый раз, когда он находит ссылки на внешние ресурсы, будь то файлы стилей, скриптов или ссылки на изображения. Некоторые запросы являются блокирующими. Это означает, что пока такие запросы выполняются - другие запросы приостанавливаются. Браузер продолжает парсить HTML и создавать DOM до тех пор, пока запрос на получение HTML не подходит к концу. После завершения парсинга DOM, браузер конструирует CSS модель. Как только эти модели сформированы, браузер строит дерево рендера (render tree), в котором вычисляет стили для каждого видимого элемента страницы. После формирования дерева происходит компоновка (layout), которая определяет положение и размеры элементов этого дерева. Как только этап завершён - страница рендерится. Или "отрисовывается" (paint) на экране.

			Document Object Model.
			Ответ в виде HTML превращается в токены, которые превращаются в узлы (nodes), которые формируют DOM дерево. 

			CSS Object Model.
			CSS блокирует рендер: браузер блокирует рендеринг страницы до тех пор, пока не получит и не обработает все CSS-правила. CSS блокирует рендеринг, потому что правила могут быть перезаписаны, а значит, необходимо дождаться построения CSSOM, чтобы убедиться в отсутствии дополнительных переопределений.
			CSSOM дерево включает в себя стили пользовательского агента - это стили, которые браузер вставляет по умолчанию.

			Render Tree.
			Дерево рендера охватывает только видимое содержимое. Например, секция head (в основном) не содержит никакой видимой информации, а потому может не включаться в дерево. Кроме того, если у какого-то узла стоит свойство display: none, оно так же не включается в дерево (как и потомки этого узла).

			#Layout
			Компоновка (layout) определяет размеры и позицию каждого элемента на странице. Как только компоновка определена - пиксели отрисовываются на экране. Так же возникает при изменении размеров окна в браузере.

			Отрисовка (Paint)
			При первичной загрузке документа (onload) весь экран будет отрисован.
			После этого будут перерисовываться только необходимые к обновлению части экрана.
			Отрисовка может разбить элементы в дереве рендера на слои. Для того, чтобы ускорить их рендер, браузер может перенести отрисовку разных слоёв на GPU (вместо основного потока CPU) - Композиция (Compositing).
			Чтобы обеспечить плавную прокрутку и анимацию, отрисовка каждого элемента занимает весь основной поток. Сюда включается вычисление стилей, повторное вычисление стилей и отрисовка. Все эти этапы должны выполняться не дольше 16.67 мс. (1000мс. / 60 кадров в секунду).

			Композиция (Compositing)
			Для переноса вычислений отрисовки на GPU вы можете использовать некоторые специальные HTML теги, например <video> и <canvas>; а также CSS-свойства opacity, transform и will-change.
			Слои улучшают производительность. Но, с точки зрения управления памяти, они неэффективны. Поэтому старайтесь не использовать их там, где в нет необходимости.

			Оптимизация CRP
			Уменьшайте количество критических ресурсов, откладывая их загрузку, помечая их как async и/или группируя их;
			Оптимизируйте количество необходимых запросов, а так же размеры файлов;
			Оптимизируйте порядок так, чтобы критические ресурсы загружались в первую очередь, сокращая таким образом длину критических этапов рендеринга.

			Советы по оптимизации
			Проверьте зависимости проекта. Избавьтесь от всего ненужного.
			Разделите код на небольшие фрагменты вместо того, чтобы складывать его в один большой файл.
			Откладывайте, в тех ситуациях, когда это возможно, загрузку JS-скриптов. При обработке текущего маршрута пользователю можно выдавать только тот код, который необходим для нормальной работы, и ничего лишнего.
			Используйте инструменты разработчика и средства вроде DeviceTiming для того, чтобы находить узкие места своих проектов.
			Используйте средства вроде Optimize.js для того, чтобы помочь парсерам определиться с тем, какие фрагменты кода им нужно обработать как можно скорее.

			Интерактивность
			Time to Interactive (TTI, время до интерактивности) - это показатель того, как много времени проходит между самым первым сетевым запросом и моментом, когда страница становится интерактивной. В хронологии этот этап следует сразу за First Contentful Paint.
			Интерактивностью называется показатель того, что страница отреагировала на действие пользователя за время в 50мс.
		}
	}

	{//#Сеть
		#DNS
		DNS (Domain Name System или система доменных имён). DNS — это технология, которая позволяет браузеру найти запрошенный пользователем сайт по его имени https://selectel.ru/blog/dns-server/

		1. Ввод адреса в браузере
		2. 2 сообщения: Поиск ip введённого домена и остальных параметров на DNS сервере провайдера
		3. 3 сообщения: Трёхэтапное рукопожатие TCP - это техника, очень часто упоминаемая как "SYN-SYN-ACK" (SYN, SYN-ACK, ACK, если быть точнее), т.к. при установке соединения передаются 3 сообщения. Это означает, что прежде чем установится соединение, браузер должен обменяться ещё тремя сообщениями с сервером.
		4. 5 сообщений: при сертификате TLS.
		Transport Layer Security (TLS) - Безопасность Транспортного Уровня (протокол), ранее известный как Secure Sockets Layer (SSL) - Уровень Защищённых Соединений используется приложениями для организации защищённой передачи данных через интернет, предотвращая взлом и прослушивание электронной почты, просмотра сайтов, переписки и прочих протоколов. https://developer.mozilla.org/ru/docs/Glossary/TLS
		5. 1 сообщение: Как только мы установили соединение с веб-сервером, браузер отправляет инициирующий HTTP GET запрос от имени пользователя. Чаще всего запрашивается HTML файл. В момент, когда сервер получает запрос, он начинает ответ с посылки заголовков ответа и содержимым HTML-файла.
		Этот ответ содержит в себе первый байт полученных данных.
		Первый пакет обычно содержит 14КБ данных.
		Time to first byte https://developer.mozilla.org/ru/docs/Glossary/time_to_first_byte
		Время до первого байта (англ. Time to First Byte, TTFB) - одна из метрик производительности веб-страниц, которая описывает время, которое прошло с момента отправления браузером запроса страницы до момента, когда он получил первый байт информации с сервера. Это время включает в себя поиск DNS-сервера и установление соединения с использованием TCP-рукопожатия и SSL-рукопожатия, если запрос выполняется через https.

		HTTP (Hypertext Transfer Protocol - гипертекстовый транспортный протокол) https://developer.mozilla.org/ru/docs/Glossary/HTTP
		Протокол передачи гипертекста (HTTP) является базовым сетевым протоколом, который позволяет передавать гипермедиа документы в Web, обычно между браузером и сервером, таким образом, что бы люди могли их читать.
		HTTP является текстовым (все сообщения осуществляются в виде простого текста), без запоминания состояния (нет информации о предыдущих сообщениях).

		Для HTTP порт по умолчанию – 80, для HTTPS – 443

		#Коды #ответа HTTP https://developer.mozilla.org/ru/docs/Web/HTTP/Status
		Например, коды 2XX указывают на успешное выполнение, а коды 4XX и 5XX — на ошибки. Коды 3XX указывают на перенаправление URL.
		200: общий ответ об успешном выполнении
		201: ответ об успешном выполнении метода POST
		400: неверный запрос, который сервер не может обработать
		404: ресурс не найден

		URL https://developer.mozilla.org/ru/docs/Glossary/URL
		Единый указатель ресурса (Uniform Resource Locator, URL) — строка, однозначно определяющая, где в интернете находится ресурс.
		В контексте HTTP, URL называют "адрес" (web address)" или "ссылку" (link).
	}
}

{//#new
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new
	Оператор (операторная функция) new создаёт экземпляр объекта, встроенного или определённого пользователем, имеющего конструктор.

	Не применим к стрелочным функциям

	{//#Instance #экземпляр #инстанс
		const cat = new Cat()
		cat - Экземпляр (instance) класса
		Статические методы и свойства вызываются без инстанцирования их класса, и не могут быть вызваны у экземпляров (instance) класса.
	}
}

{//#delete
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/delete
	Оператор delete удаляет свойство из объекта.
	Не воздействует на простые переменные.
}

{//#reduce
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
}

{//#Typescript
	https://youtu.be/nyIpDs2DJ_c

	В конфиге выставить "strict": true https://medium.com/webhint/going-strict-with-typescript-be3f3f7e3295
	"noImplicitAny": true - выдавать ошибку везде, где тип не указан и используется any https://www.typescriptlang.org/tsconfig#noImplicitAny

	{//#Generics
		https://www.typescriptlang.org/docs/handbook/2/generics.html
		const foo: Array<number> = [1, 2, 3] // Array - класс / объект, состоящий из number
		function f<T>(array: T[]): T[]
		f([1, 2]) либо f(['a', 'b']) подставит тип переданных значений за место T
	}

	https://stackoverflow.com/questions/20043265/check-if-checkbox-element-is-checked-in-typescript
	Утвердить тип: var element = <HTMLInputElement> document.getElementById("is3dCheckBox");
	Утвердить сильнее: var isChecked = (<HTMLInputElement><any>myString).checked; Строковая переменная расширяется до any типа перед утверждением HTMLInputElement.
	Если вы используете файлы tsx, как я, вы не можете использовать синтаксис угловой скобки, вы должны использовать «как»: let element = document.getElementById("is3dCheckBox") as HTMLInputElement; https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
}

{//#Веб-безопасность #безопасность
	https://developer.mozilla.org/ru/docs/Learn/Server-side/First_steps/Website_security
}

{//#REST #API
	https://boodet.online/blog/rest-api-chto-eto-prostymi-slovami-principy-standarty-opisanie
	
	RESTful API — это интерфейс, используемые двумя компьютерными системами для безопасного обмена информацией через Интернет.
	Representational State Transfer (передача состояния представления) — это программная архитектура, которая определяет условия работы API.
	Веб-службы, реализующие архитектуру REST, называются веб-службами RESTful. Как правило, термин RESTful API относится к сетевым RESTful API. Однако REST API и RESTful API являются взаимозаменяемыми терминами.
	Application Programming Interface (API). Интерфейс прикладного программирования определяет правила, которым необходимо следовать для связи с другими программными системами.

	#SOAP стоит отнести к предкам интерфейсов по типу REST API
	SOAP — это протокол, который работает по заранее определенному стандарту. Ему для работы требуется XML, это определит формат, в котором будут отражаться входящие и исходящие запросы. 
	Основная проблема этой системы в том, что формат, который используется для передачи, излишне тяжелый.
}

{//#Алгоритмы и #структуры данных
	Классические алгоритмы и структуры данных на JavaScript https://habr.com/ru/post/359192/
	Алгоритмы и структуры данных https://github.com/trekhleb/javascript-algorithms/blob/master/README.ru-RU.md
	Распространенные алгоритмы и структуры данных в JavaScript: основные понятия и работа с массивами https://proglib.io/p/rasprostranennye-algoritmy-i-struktury-dannyh-v-javascript-osnovnye-ponyatiya-i-rabota-s-massivami-2021-10-06
	Распространенные алгоритмы и структуры данных в JavaScript: стеки, очереди и связные списки https://proglib.io/p/rasprostranennye-algoritmy-i-struktury-dannyh-v-javascript-steki-ocheredi-i-svyaznye-spiski-2021-10-13

	https://developer.mozilla.org/ru/docs/Glossary/Algorithm
	Алгоритм — это независимая серия инструкций для выполнения функции.
	Различают устойчивые и неустойчивые алгоритмы. Первые не изменяют порядок элементов, а вторые могут его изменять.

	Структура данных (англ. data structure) — программная единица, позволяющая хранить и обрабатывать множество однотипных и/или логически связанных данных в вычислительной технике. Для добавления, поиска, изменения и удаления данных структура данных предоставляет некоторый набор функций, составляющих её интерфейс.

	Пояснения алгоритмической сложности https://www.bigocheatsheet.com/

	{//#Sort #Sorting #Сортировки
		https://www.toptal.com/developers/sorting-algorithms
		https://www.bigocheatsheet.com/

		Фцнкция sort() использует сортировку вставкой (Insertion). Преобразует в строку и если условие сортировки возвращает положительное значение, тогда осуществляется перестановка, поэтому возвращаем a - b.
		Если a и b равны, то вернется 0. В этом случае порядок элементов может сохраниться, а может и поменяться. Глобально это не повлияет на задачу сортировки, но может иметь различные побочные эффекты.

		Самые быстрые:
		Сортировка по основанию	(Radix sort) https://en.wikipedia.org/wiki/Radix_sort
		Сортировка подсчетом (Counting sort) https://en.wikipedia.org/wiki/Counting_sort

		https://techrocks.ru/2020/08/08/sorting-algorithms-with-examples-in-javascript/
		{//#Bubble Сортировка #пузырьком
			/**
			* Сортировка пузырьком
			* Алгоритм: Сравнивает два соседних значения и меняет их местами, если первое значение больше второго
			* Временная сложность в наилучшем случае — O(N), в наихудшем — O(N^2)
			*/
		}
		{//#Selection Сортировка #выбором
			/**
			* Сортировка выбором
			* Алгоритм: В основе сортировки выбором лежит следующий подход: мы находим минимальное значение в структуре данных и помещаем его на первую позицию, затем находим второе минимальное значение и помещаем его на вторую позицию и так далее
			* Временная сложность в наилучшем и наихудшем случае — O(N^2)
			*/
		}
		{//#insertion Сортировка #вставками
			/**
			* Сортировка вставками
			* Алгоритм сортировки вставками строит финальный отсортированный массив по одному значению за раз. Процесс выглядит следующим образом:
			* Предполагаем, что первый элемент уже отсортирован.
			* Сравниваем первый элемент со вторым: должно ли второе значение остаться на месте или же оно должно быть вставлено перед первым значением?
			* Далее аналогичное сравнение делается для третьего значения: должно ли оно быть вставлено на первую, вторую или третью позицию? И так далее.
			* Временная сложность в наилучшем случае — O(N), в наихудшем — O(N^2)
			*/
		}
		{//#merge Сортировка #слиянием
			/**
			* Сортировка слиянием
			* Алгоритм сортировки слиянием это один из алгоритмов «разделяй и властвуй»). Другими словами, он делит исходный массив на более мелкие массивы, пока каждый маленький массив не будет содержать всего одну позицию, а затем сливает маленькие массивы в более крупный и отсортированный.
			* Временная сложность в наилучшем и наихудшем случае — O(N Log N)
			*/
		}
		{//#quick #Быстрая сортировка
			/**
			* Быстрая сортировка
			* Быстрая сортировка это один из наиболее часто используемых алгоритмов сортировки
			* Алгоритм:
			* 1. Выбираем значение в массиве, которое назовем опорным. Обычно это значение в середине массива.
			* 2. Осуществляем операцию распределения, в результате которой значения меньше опорного смещаются влево от опорного, а большие — вправо от него.
			* 3. Повторяем первые два шага для каждого подмассива (левого и правого), пока массивы не будут полностью отсортированы.
			* Временная сложность в наилучшем случае — O(N), в наихудшем — O(N^2)
			*/
		}
	}

	{//#map
		C:\program files\open server\ospanel\domains\localhost\examples\map.js
	}

	{//#treerec
		Рекурсивный обход дерева
		C:\program files\open server\ospanel\domains\localhost\examples\treerec.js
	}
}

{//#Nx
	https://nx.dev/getting-started/intro
	Nx — это интеллектуальная, быстрая и расширяемая система сборки с первоклассной поддержкой монорепозиториев и мощными интеграциями.
}