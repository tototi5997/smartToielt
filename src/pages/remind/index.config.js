const columns = [
  {
    title: '厕所ID',
    dataIndex: 'id_toielt',
  },
  {
    title: '负责人',
    dataIndex: 'respons_person',
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
  {
    title: '卫生情况',
    dataIndex: 'hygiene',
    render(hygiene){
      let config = {
        '1':'厕所内环境优良',
        '2':'厕所环境中等',
        '3':'厕所需要进行打扫'
      }
      return config[hygiene]
    }
  }
];
export default columns;