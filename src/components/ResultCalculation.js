import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResultCalculation(props) {
    const{capital, interest, months, total, errorMessage} = props;
    return (
        <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN</Text>
          <DataResult title="Cantidad solicitada:" value={`${capital} €`} />
          <DataResult title="Interes %:" value={`${interest} %`} />
          <DataResult title="Plazos:" value={`${months} meses`} />
          <DataResult title="Pago mensual:" value={`${total.monthlyFee} €`} />
          <DataResult
            title="Total a pagar:"
            value={`${total.totalPayable} €`}
          />
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}



function DataResult(props) {
    const {title, value} = props;
  
    return (
      <View style={styles.value}>
        <Text>{title}</Text>
        <Text>{value}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    content: {
      marginHorizontal: 30,
    },
    boxResult: {
      padding: 5,
    },
    title: {
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    value: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    error: {
      textAlign: 'center',
      color: '#f00',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
