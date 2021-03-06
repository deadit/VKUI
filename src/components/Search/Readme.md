Надстройка над `<input type="text" />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
  const thematics = [
    {id: 3201, name: "Аренда автомобилей"},
    {id: 3273, name: "Автотовары"},
    {id: 3205, name: "Автосалон"},
    {id: 3282, name: "Автосервис"},
    {id: 3283, name: "Услуги для автовладельцев"},
    {id: 3284, name: "Велосипеды"},
    {id: 3285, name: "Мотоциклы и другая мототехника"},
    {id: 3286, name: "Водный транспорт"},
    {id: 3287, name: "Автопроизводитель"},
    {id: 3288, name: "Автомойка"},
    {id: 3117, name: "Автошкола"},
    {id: 3118, name: "Детский сад"},
    {id: 3119, name: "Гимназия"},
    {id: 3120, name: "Колледж"},
    {id: 3121, name: "Лицей"},
    {id: 3122, name: "Техникум"},
    {id: 3123, name: "Университет"},
    {id: 3124, name: "Школа"},
    {id: 3125, name: "Институт"},
    {id: 3126, name: "Обучающие курсы"},
    {id: 3276, name: "Дополнительное образование"},
    {id: 3275, name: "Тренинг, семинар"},
    {id: 3127, name: "Танцевальная школа"}
  ];

  const users = [
    {id: 3201, name: "Влад Анесов"},
    {id: 3273, name: "Вадим Дорохов"},
    {id: 3205, name: "Андрей Абрамов"},
    {id: 3282, name: "Александр Колобов"},
    {id: 3283, name: "Артур Стамбульцян"},
    {id: 3284, name: "Илья Таратухин"},
    {id: 3285, name: "Роман Захаров"},
    {id: 3286, name: "Михаил Андриевский"},
    {id: 3287, name: "Тарас Иванов"},
    {id: 3288, name: "Илья Гришин"},
    {id: 3117, name: "Илья Пеняев"},
    {id: 3118, name: "Иван Барышев"},
    {id: 3119, name: "Иван Гусев"},
    {id: 3120, name: "Макс Павлов"},
    {id: 3121, name: "Антон Циварев"},
    {id: 3122, name: "Юля Брук"},
    {id: 3123, name: "Андрей Рогозов"},
    {id: 3124, name: "Андрей Новосельский"}
  ];

  class SimpleSearch extends React.Component {

    constructor (props) {
      super(props);
      this.state = {
        search: ''
      }
      this.onChange = this.onChange.bind(this);
    }

    onChange (e) { this.setState({ search: e.target.value }); }

    get thematics () {
      const search = this.state.search.toLowerCase();
      return thematics.filter(({name}) => name.toLowerCase().indexOf(search) > -1);
    }

    render() {
      return (
        <React.Fragment>
          <PanelHeader
            right={<PanelHeaderButton onClick={this.props.goHeaderSearch} key="add"><Icon24Add /></PanelHeaderButton>}
          >
            Выбор тематики
          </PanelHeader>
          <Search value={this.state.search} onChange={this.onChange} after="Отмена"/>
          {this.thematics.length > 0 &&
            <List>
              {this.thematics.map(thematic => <Cell key={thematic.id}>{thematic.name}</Cell>)}
            </List>
          }
        </React.Fragment>
      );
    }
  }

  class HeaderSearch extends React.Component {

    constructor (props) {
      super(props);
      this.state = {
        search: ''
      }

      this.onChange = this.onChange.bind(this);
    }

    onChange (e) { this.setState({ search: e.target.value }); }

    get users () {
      const search = this.state.search.toLowerCase();
      return users.filter(({name}) => name.toLowerCase().indexOf(search) > -1);
    }

    render () {
      return (
        <React.Fragment>
          <PanelHeader
            left={<PanelHeaderBack onClick={this.props.goSearch} />}
          >
            <Search
              value={this.state.search}
              onChange={this.onChange}
            />
          </PanelHeader>
          <List>
            {this.users.map((user) => (
              <Cell
                before={<Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" />}
                key={user.id}
                onClick={this.props.goSearch}
              >{user.name}</Cell>
            ))}
          </List>
        </React.Fragment>
      );
    }
  }

  class SearchExample extends React.Component {

    constructor (props) {
      super(props);

      this.state = {
        activePanel: 'search'
      }

      this.goSearch = this.goSearch.bind(this);
      this.goHeaderSearch = this.goHeaderSearch.bind(this);
    }

    goHeaderSearch () { this.setState({ activePanel: 'header-search' }); }
    goSearch () { this.setState({ activePanel: 'search' }); }

    render () {
      return (
        <View activePanel={this.state.activePanel}>
          <Panel id="search" separator={false}>
            <SimpleSearch goHeaderSearch={this.goHeaderSearch}/>
          </Panel>
          <Panel id="header-search" separator={false}>
            <HeaderSearch goSearch={this.goSearch}/>
          </Panel>
        </View>
      );
    }
  }

  <SearchExample />
```
