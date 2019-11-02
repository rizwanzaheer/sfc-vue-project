<template>
  <div class="content-page" id="calls-wrap">
    <div class="content">
      <!-- Start Content-->
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="card-box accordion" id="calls-accordion">
              <h4 class="header-title mt-0 mb-3">To Do's</h4>
              <div class="call-item" id="call-1">
                <div
                  class="call-header clearfix"
                  id="call-header-1"
                  data-toggle="collapse"
                  data-target="#call-body-1"
                  aria-expanded="true"
                  aria-controls="call-body-1"
                >
                  <ul class="list-unstyled list-inline mb-0 float-md-left float-sm-none">
                    <li class="list-inline-item caller-timestamp">
                      <span>Jun 13</span>
                      <br />
                      <span class="font-weight-bold">05:15 PM</span>
                    </li>
                  </ul>
                  <ul
                    class="list-unstyled list-inline mb-0 pt-2 pb-2 todos-list float-md-right float-sm-none"
                    id="todo-list"
                  >
                    <TodoItem v-for="todo in todos" :key="todo.id" :id="todo.id" :task="todo.text"></TodoItem>
                  </ul>
                </div>
                <!--call-header -->
                <div
                  class="call-body collapse color-grey"
                  id="call-body-1"
                  aria-labelledby="call-header-1"
                  data-parent="#calls-accordion"
                >
                  <ul class="list-unstyled list-inline mb-0">
                    <li class="list-inline-item pr-3">
                      Date:
                      <span class="call-company-name pl-1">Jun 13 05:15 PM</span>
                    </li>
                    <li class="list-inline-item pr-3">
                      Name:
                      <span class="call-duration pl-1">John Doe</span>
                    </li>
                    <li class="list-inline-item pr-3">
                      Company Name:
                      <span class="call-cost pl-1">ATC</span>
                      <a href="#" class="pl-1 font-weight-bold color-blue">View call data</a>
                    </li>
                  </ul>
                </div>
                <!-- call-body -->
              </div>
              <!-- call-item -->
            </div>
            <!--cardbox-->
          </div>
          <!-- col-lg-12 -->
        </div>
        <!-- end row -->
      </div>
      <!-- container-fluid -->
    </div>
    <!-- content -->
  </div>
</template>

<script>
import TodoItem from "../components/Todos/TodoItem";

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          text: "Finish the code"
        },
        {
          id: 2,
          text: "Clean the oceans"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/custom/pages/_todos.scss';
</style>