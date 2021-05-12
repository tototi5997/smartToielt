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
    render(address){
      return address === 1?'武汉市江夏区光谷':'武汉市江夏区关山大道'
    }
  },
  {
    title: '水龙头',
    dataIndex: 'water_tap',
    render(water_tap){
      let config = {
        '1':'全新',
        '2':'需要更换',
        '3':'可以继续使用'
      }
      return config[water_tap]
    }
  },
  {
    title: '洗手池',
    dataIndex: 'hand_sink',
    render(hygiene){
      let config = {
        '1':'全新',
        '2':'需要更换',
        '3':'可以继续使用'
      }
      return config[hygiene]
    }
  },
  {
    title: '储水器',
    dataIndex: 'water_reservoir',
    render(hygiene){
      let config = {
        '1':'全新',
        '2':'需要更换',
        '3':'可以继续使用'
      }
      return config[hygiene]
    }
  },
  {
    title: '干手机',
    dataIndex: 'dry_cell',
    render(hygiene){
      let config = {
        '1':'全新',
        '2':'需要更换',
        '3':'可以继续使用'
      }
      return config[hygiene]
    }
  },
  {
    title: '红外扫描仪',
    dataIndex: 'infraed_scanner',
    render(hygiene){
      let config = {
        '1':'全新',
        '2':'需要更换',
        '3':'可以继续使用'
      }
      return config[hygiene]
    }
  },
  {
    title: '空气感应器',
    dataIndex: 'air_sensor',
    render(hygiene){
      let config = {
        '1':'全新',
        '2':'需要更换',
        '3':'可以继续使用'
      }
      return config[hygiene]
    }
  },
];
export default columns;