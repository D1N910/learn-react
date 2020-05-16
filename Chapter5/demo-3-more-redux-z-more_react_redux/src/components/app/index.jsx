// 待办事项容器
// 输入框
import TodoInput from '../../containers/todoInput'
//过滤
import TodoFilterCondition from '../../containers/todoFilterCondition'
// 待办列表
import Todolist from '../../containers/todolist'

export default function todoContainer() {
	return <div>
		<TodoInput />
		<TodoFilterCondition />
		<Todolist />
	</div>
}
