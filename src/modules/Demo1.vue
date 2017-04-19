<template>
  <div>
    <ShowDemoHeader header_btn_title="返回上一级" header_demo_name="Demo1" header_btn_url="/ShowDemo"/>
    <div class="container">
      <div class="addPersonCard">
        <div class="addPersonCard_group">
          <label>姓名：</label>
          <input type="text" v-model="newPerson.name"/>
        </div>
        <div class="addPersonCard_group">
          <label>年龄：</label>
          <input type="text" v-model="newPerson.age"/>
        </div>
        <div class="addPersonCard_group">
          <label>性别：</label>
          <select v-model="newPerson.gender">
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>
        <div style="padding: 0 57px 0 57px;">
          <span class="addPersonCard_button" @click="addPerson">添加</span>
        </div>
      </div>
      <div style="width: 50%;min-width: 560px;">
        <table>
          <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>编辑</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="'(person,index) in persons">
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.gender }}</td>
            <td style="text-align: center;">
              <button class="td_button" @click="removePerson(index)">删除</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
  import ShowDemoHeader from 'components/ShowDemo_Header.vue'
  export default {
    data () {
      return {
        newPerson: {
          name: '',
          age: 0,
          gender: '男'
        },
        persons: [
          {name: 'Richard', age: 20, gender: '男'},
          {name: 'max', age: 16, gender: '女'}
        ]
      }
    },
    components: {
      ShowDemoHeader
    },
    methods: {
      addPerson: function () {
        if (this.newPerson.name.trim() === '' || this.newPerson.age <= 0 || this.newPerson.age >= 150) {
          alert('请输入合法参数')
          return
        }
        this.persons.push(this.newPerson)
        this.newPerson = {name: '', age: 0, gender: '男'}
      },
      removePerson: function (index) {
        this.persons.splice(index, 1)
      }
    }
  }
</script>

<style soped>
  .container {
    padding: 20px;
  }

  .addPersonCard {
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 10px 0 10px 0;
    padding: 20px;
    width: 30%;
    min-width: 400px;
  }

  .addPersonCard_group {
    margin: 5px 0 5px 0;
    padding: 5px;
  }

  .addPersonCard_group input, select {
    width: 80%;
    height: 25px;
    background-color: #fff;
    border: 1px solid #c2cad8;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    font-size: 14px;
    line-height: 25px;
    color: #555;
  }

  .addPersonCard_button {
    width: 100%;
    color: #e43a45;
    background: 0 0;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid #e43a45;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
  }

  .addPersonCard_button:hover {
    background: #e43a45;
    color: #fff;
  }

  table, td, th {
    border-collapse: collapse;
    border-spacing: 0;
  }

  table {
    width: 100%;
  }

  td, th {
    border: 1px solid #bcbcbc;
    padding: 5px 10px;
  }

  th {
    background: #42b983;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }

  tr:nth-of-type(odd) {
    background: #fff;
  }

  tr:nth-of-type(even) {
    background: #eee;
  }

  .td_button {
    width: 50%;
    color: #3598dc;
    background: 0 0;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid #3598dc;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
  }

  .td_button:hover {
    background: #3598dc;
    color: #fff;
  }

</style>
