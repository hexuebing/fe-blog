# 应用 SOLID 原则

## 单一职责原则 (SRP)

单一职责原则的定义是每个类应该只有一个职责，也就是只做一件事。

将功能较多的组件拆分为较小的组件

```jsx
const ActiveUsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch("/some-api");
      const data = await response.json();
      setUsers(data);
    };

    loadUsers();
  }, []);

  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  return (
    <ul>
      {users
        .filter((user) => !user.isBanned && user.lastActivityAt >= weekAgo)
        .map((user) => (
          <li key={user.id}>
            <img src={user.avatarUrl} />
            <p>{user.fullName}</p>
            <small>{user.role}</small>
          </li>
        ))}
    </ul>
  );
};
```

```jsx
// 获取数据
const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch("/some-api");
      const data = await response.json();
      setUsers(data);
    };

    loadUsers();
  }, []);

  return { users };
};

// 列表渲染
const UserItem = ({ user }) => {
  return (
    <li>
      <img src={user.avatarUrl} />
      <p>{user.fullName}</p>
      <small>{user.role}</small>
    </li>
  );
};

// 列表过滤
const getOnlyActive = (users) => {
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  return users.filter(
    (user) => !user.isBanned && user.lastActivityAt >= weekAgo
  );
};

const useActiveUsers = () => {
  const { users } = useUsers();

  const activeUsers = useMemo(() => {
    return getOnlyActive(users);
  }, [users]);

  return { activeUsers };
};

const ActiveUsersList = () => {
  const { activeUsers } = useActiveUsers();

  return (
    <ul>
      {activeUsers.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};
```

组件只做了最少的事情——渲染它从 Hook 中获取的数据。

遵循单一职责原则，我们有效地采用了大量独立的代码并使其更加模块化，模块化的代码更容易测试和维护。

## 开放封闭原则（OCP）

开放封闭原则指出“一个软件实体（类、模块、函数）应该对扩展开放，对修改关闭”。

```jsx
const Header = () => {
  const { pathname } = useRouter();

  return (
    <header>
      <Logo />
      <Actions>
        {pathname === "/dashboard" && (
          <Link to="/events/new">Create event</Link>
        )}
        {pathname === "/" && <Link to="/dashboard">Go to dashboard</Link>}
      </Actions>
    </header>
  );
};

const HomePage = () => (
  <>
    <Header />
    <OtherHomeStuff />
  </>
);

const DashboardPage = () => (
  <>
    <Header />
    <OtherDashboardStuff />
  </>
);
```

如果需要将这个 Header 组件添加到更多的页面中会发生什么呢？每次创建新页面时，都需要引用 Header 组件，并修改其内部实现。这种方式使得 Header 组件与使用它的上下文紧密耦合，并且违背了开放封闭原则。

```jsx
// 可以使用组合将想要的任何内容放在Header中，而无需修改组件本身。
const Header = ({ children }) => (
  <header>
    <Logo />
    <Actions>{children}</Actions>
  </header>
);

const HomePage = () => (
  <>
    <Header>
      <Link to="/dashboard">Go to dashboard</Link>
    </Header>
    <OtherHomeStuff />
  </>
);

const DashboardPage = () => (
  <>
    <Header>
      <Link to="/events/new">Create event</Link>
    </Header>
    <OtherDashboardStuff />
  </>
);
```

## 里氏替换原则（LSP）

里氏替换原则可以理解为对象之间的一种关系，子类型对象应该可以替换为超类型对象。

使用继承编写 React 代码会使代码变得糟糕

## 接口隔离原则（ISP）

根据接口隔离原则的说法，客户端不应该依赖它不需要的接口。

```tsx
type Video = {
  title: string;
  duration: number;
  coverUrl: string;
};

type Props = {
  items: Array<Video>;
};

const VideoList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Thumbnail key={item.title} video={item} />
      ))}
    </ul>
  );
};
```

`Thumbnail` 组件的实现

```tsx
type Props = {
  video: Video;
};

const Thumbnail = ({ video }: Props) => {
  return <img src={video.coverUrl} />;
};
```

下面来定义直播的类型 `LiveStream`

```tsx
type LiveStream = {
  name: string;
  previewUrl: string;
};
```

我们可以轻松的区分视频和直播对象，但是不能将后者传递给 Thumbnail 组件，因为 Video 和 LiveStream 类型不兼容。

它们包含了不同的属性来保存缩略图：视频对象调用 coverUrl，直播对象调用 previewUrl。

```tsx
type Props = {
  items: Array<Video | LiveStream>;
};

const VideoList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        if ("coverUrl" in item) {
          return <Thumbnail video={item} />;
        } else {
          // 直播组件，该怎么写？
        }
      })}
    </ul>
  );
};
```

重构 `Thumbnail` 组件以确保它**仅依赖于它需要的 props**

```tsx
type Props = {
  coverUrl: string;
};

const Thumbnail = ({ coverUrl }: Props) => {
  return <img src={coverUrl} />;
};
```

```tsx
type Props = {
  items: Array<Video | LiveStream>;
};

const VideoList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Thumbnail
          coverUrl={"coverUrl" in item ? item.coverUrl : item.previewUrl}
        />
      ))}
    </ul>
  );
};
```

接口隔离原则主张最小化系统组件之间的依赖关系，使它们的耦合度降低，从而提高可重用性。

## 依赖倒置原则（DIP）

依赖倒置原则指出“要依赖于抽象，不要依赖于具体”。换句话说，一个组件不应该直接依赖于另一个组件，而是它们都应该依赖于一些共同的抽象。

```jsx
import api from "~/common/api";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await api.login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log in</button>
    </form>
  );
};
```

在这段代码中，LoginForm 组件直接引用了 api 模块，因此它们之间存在紧密耦合。

```tsx
type Props = {
  onSubmit: (email: string, password: string) => Promise<void>;
};

const LoginForm = ({ onSubmit }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log in</button>
    </form>
  );
};
```

通过这样修改，LoginForm 组件不再依赖于 api 模块。 向 API 提交凭证的逻辑是通过 onSubmit 回调函数抽象出来的，现在由父组件负责提供该逻辑的具体实现。

```tsx
import api from "~/common/api";

const ConnectedLoginForm = () => {
  const handleSubmit = async (email, password) => {
    await api.login(email, password);
  };

  return <LoginForm onSubmit={handleSubmit} />;
};
```

ConnectedLoginForm 组件充当 api 和 LoginForm 之间的粘合剂，而它们本身保持完全独立。

依赖倒置原则旨在最小化应用程序不同组件之间的耦合。
