
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AddModal from './AddModal';


const Table = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [userData, setUserData] = useState([]);
  const [price, setPrice] = useState('');

  console.log(userData);

  // { id: 1, SL: ' 1', 'Loan': '$10',EMI:"10",plan:"to be continue" },
  // { id: 2, SL: ' 2', 'Loan': '$10',EMI:"10",plan:"car loan" },
  // { id: 3, SL: ' 3', 'Loan': '$10',EMI:"10",plan:"car loan" },
  // { id: 4, SL: ' 4', 'Loan': '$10',EMI:"10",plan:"car loan" },

  const handleSubmit = user => {
    setUserData([...userData, user]);
   
    
    setModalVisible(false);
    // setUserData("")
     setPrice(" ")
};


  const handleDelete = (index) => {
    setUserData(userData.filter((item, i) => i !== index));
  };

  const handleEdit = (item) => {
    setModalVisible(true);
  };

  return (
     <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)} >
        <Text style={{color:"#ffffff"}}>Add</Text>
      </TouchableOpacity>


      <AddModal 
        visible={modalVisible}
        onSubmit={handleSubmit}
        state={price}
        // onSubmit={data => {
        //   // Handle the submit action with the data passed from the modal
        //   console.log(data);
        //   setModalVisible(false);
        // }}
        onCancel={() => setModalVisible(false)}
      />



      <View style={styles.header}>
        <Text style={styles.headerText}>SL</Text>
        <Text style={styles.headerText}>Loan Outstanding</Text>
        <Text style={styles.headerText}>EMI Amount</Text>
        <Text style={styles.headerText}>Adustment Plan</Text>
        <Text style={styles.headerText}>Action</Text>
      </View>
      <FlatList
        data={userData}
        // keyExtractor={(item,index) => item.id.toString(index)}
        renderItem={({ item,index }) => (
          <View style={styles.header}>
            <Text style={styles.headerText}>{index+1}</Text>
            <Text style={styles.headerText}>{item.amount}</Text>
            <Text style={styles.headerText}>{item.price}</Text>
            <Text style={styles.headerText}>{item.businessType}</Text>
            <View style={styles.headerText}>
              <TouchableOpacity onPress={() => handleEdit(item)}>
                <Text style={styles.actionText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(index)}>
                <Text style={styles.actionText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: '#47b2e4',
    padding: 4,
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 10,
    marginBottom:10,
    borderRadius: 5,
    width:50,
    alignSelf:"flex-end"
  },


  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding:10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    height: 30,
    backgroundColor: '#ebebeb',
    borderBottomColor:"#ffffff",
    borderBottomWidth:1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 10,
    width:70,
    color: "gray",
    textAlign:"center",
    borderRightColor:"#ffffff",
    borderRightWidth:1,
    height: '100%',
    // alignSelf:"center"
    
   
  },

  // backgroundColor: '#47b2e4',

  // itemContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   height: 50,
  //   padding: 10,
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#ddd',
  // },
  // itemText: {
  //   fontSize: 11,
  //   padding:10,
  //   //  height: 50,
  // },
  // actionContainer: {
  //   flexDirection: 'row',
  // },
  actionText: {
    fontSize: 11,
    color: 'blue',
    marginLeft: 10,
  },
});

export default Table;


















// import React, { Component } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


// class Table extends Component {
//   state = {
//     data: [
//       { id: 1, name: '12', age: 25, loan:"car loan" },
//       { id: 2, name: '12', age: 25, loan:"car loan" },
//       { id: 3, name: '12', age: 25, loan:"car loan" },
     
//     ]
//   }

//   handleDelete = id => {
//     const { data } = this.state;
//     this.setState({ data: data.filter(item => item.id !== id) });
//   }

//   handleEdit = id => {
//     // logic for editing the item with the given id
//   }

//   render() {
//     const { data } = this.state;

//     return (
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.headerText}>SL.</Text>
//           <Text style={styles.headerText}>Loan Outstanding</Text>
//           <Text style={styles.headerText}>EMI Amount</Text>
//           <Text style={styles.headerText}>Adjustment Plan</Text>
//           <Text style={styles.headerText}>Actions</Text>
//         </View>
//         {data.map(item => (
//           <View style={styles.row} key={item.id}>
//             <Text style={styles.rowText}>{item.id}</Text>
//             <Text style={styles.rowText}>{item.name}</Text>
//             <Text style={styles.rowText}>{item.age}</Text>
//             <Text style={styles.rowText}>{item.loan}</Text>
//             <View style={styles.actionContainer}>
//               <TouchableOpacity onPress={() => this.handleEdit(item.id)}>
//                 <Text style={styles.actionText}>Edit</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => this.handleDelete(item.id)}>
//                 <Text style={styles.actionText}>Delete</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         ))}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     // padding:15
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '100%',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     height:50,
//     backgroundColor:"#47b2e4",
//   },
//   headerText: {
//     fontWeight: 'bold',
//     fontSize: 11,
//     borderRightColor:"white",
//     borderRightWidth:1,
//     padding:2,
//     // width:"100%"
//   },
//   row: {
//     // flexDirection: 'row',
//     // alignItems: 'center',
//     // justifyContent: 'space-between',
//     // width: '100%',
//     // padding: 5,
//     // borderBottomWidth: 1,
//     // borderBottomColor: '#ddd'

//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '100%',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     height:50,
//     backgroundColor:"#47b2e4",
//   },
//   rowText: {
//     // fontSize: 11,
//     // width:15,
//     // padding:11,
//     // color: 'blue',
//     // textAlign:"right",
//     // borderColor:"red",
//     // borderWidth:1,

//     fontWeight: 'bold',
//     fontSize: 11,
//     borderRightColor:"white",
//     borderRightWidth:1,
//     padding:2,
//   },
//   actionContainer: {
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   actionText: {
//     marginLeft: 5,
//     color: 'blue',
//     fontSize: 11,
//   }
// });

// export default Table;
