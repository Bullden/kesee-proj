import React from 'react'
import { View , Text, StyleSheet,ScrollView, TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/Feather";
import VisaIcon from '../../assets/visa.svg'
import MastercardIcon from '../../assets/mastercard.svg'
import FoodIcon from '../../assets/cutlery.svg'
import HouseIcon from '../../assets/home.svg'
import BankIcon from '../../assets/bank.svg'
import ProgressBarAnimated from 'react-native-progress-bar-animated';

export default class IncomeScreen extends React.Component {
    state = {
        progressFood: 67,
        progressHouse: 23
      }
    render () {
        return(
            <View style={{height: '100%'}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.headBlock}>
                        <View style={styles.wrapKeseeArrow}>
                            <Text style={styles.keseeText}>kesee</Text>
                            <TouchableOpacity>
                                <Icon name={'arrow-down-circle'}  style={styles.arrowDown}/>
                            </TouchableOpacity>
                        </View> 
                        <Text style ={styles.period}>february spendings</Text>  
                        <View style={styles.totalSum}>
                            <Text style={styles.shekel}>₪</Text>
                            <Text style={styles.beforComa}>4,516</Text>
                            <Text style={styles.afterComa}>.83</Text>
                        </View>
                    </View>
                    <View style={styles.wrapBanks}>
                        {/* <VisaIcon width={100} height={100}/> */}
                        <View style={styles.bank}>
                            <TouchableOpacity style={styles.wrapIconBank}>
                                <BankIcon  width={20} height={20}/>
                            </TouchableOpacity>
                            <View style={styles.wrapInfoBank}>
                                <View style={styles.wrapNameBankSum}>
                                    <Text style={styles.nameBank}>Bank Hapoalim</Text>
                                    <Text style={styles.sum}>₪ 1,290.01</Text>
                                </View>
                                <View style ={styles.accountWrap}>
                                    <Text style={styles.accountName}>Account 567403</Text>
                                    <Text style={styles.accountPoint}> • </Text>
                                    <Text style={styles.accountCard}>Branch 077</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.bank}>
                            <TouchableOpacity style={styles.wrapIconBank}>
                                <MastercardIcon  width={30} height={30}/>
                            </TouchableOpacity>
                            <View style={styles.wrapInfoBank}>
                                <View style={styles.wrapNameBankSum}>
                                    <Text style={styles.nameBank}>Mastercard Gold</Text>
                                    <Text style={styles.sum}>₪ 1,374.90</Text>
                                </View>
                                <View style ={styles.accountWrap}>
                                    <Text style={styles.accountName}>Account 403882</Text>
                                    <Text style={styles.accountPoint}> • </Text>
                                    <Text style={styles.accountCard}>Card 7095</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.bank}>
                            <TouchableOpacity style={styles.wrapIconBank}>
                                <VisaIcon  width={30} height={30}/>
                            </TouchableOpacity>
                            <View style={styles.wrapInfoBank}>
                                <View style={styles.wrapNameBankSum}>
                                    <Text style={styles.nameBank}>Visa</Text>
                                    <Text style={styles.sum}>₪ 209.66</Text>
                                </View>
                                <View style ={styles.accountWrap}>
                                    <Text style={styles.accountName}>Account 567411</Text>
                                    <Text style={styles.accountPoint}> • </Text>
                                    <Text style={styles.accountCard}>Card 9385</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.wrapCatgories}>
                        <Text style={styles.categoriesHead}>Categories</Text>
                        <Text style={styles.countCategories}>You have 8 uncategories transactions</Text>
                        <View style={styles.bank}>
                            <TouchableOpacity style={styles.wrapIconBank}>
                                <FoodIcon  width={30} height={30}/>
                            </TouchableOpacity>
                            <View style={styles.wrapInfoCategory}>
                                <View style={styles.wrapNameBankSum}>
                                    <Text style={styles.nameBank}>Food</Text>
                                    <Text style={styles.sum}>₪ 3,299.31</Text>
                                </View>
                                <View style ={styles.transactionsProgress}>
                                    <Text style={styles.transactions}>3 new transactions</Text>
                                    <Text style={styles.progress}>67%</Text>
                                </View>
                                <ProgressBarAnimated
                                    width={300}
                                    height={3}
                                    value={this.state.progressFood}
                                    // backgroundColorOnComplete="#000"
                                    backgroundColor ='blue'
                                />
                            </View>
                        </View>
                        <View style={styles.bank}>
                            <TouchableOpacity style={styles.wrapIconBank}>
                                <HouseIcon  width={30} height={30}/>
                            </TouchableOpacity>
                            <View style={styles.wrapInfoCategory}>
                                <View style={styles.wrapNameBankSum}>
                                    <Text style={styles.nameBank}>House</Text>
                                    <Text style={styles.sum}>₪ 3,299.31</Text>
                                </View>
                                <View style ={styles.transactionsProgress}>
                                    <Text style={styles.transactions}>2 transactions</Text>
                                    <Text style={styles.progress}>23%</Text>
                                </View>
                                <ProgressBarAnimated
                                    width={300}
                                    height={3}
                                    value={this.state.progressHouse}
                                    // backgroundColorOnComplete="#000"
                                    backgroundColor ='blue'
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapInfoCategory: {
        width: '80%',
    },
    categoriesHead: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    countCategories: {
        fontSize: 16,
        color: 'gray'
    },
    wrapCatgories: {
        paddingRight: 20,
        paddingLeft: 20,
        // paddingTop: 40,
        paddingBottom: 20,
        width: '100%'
    },
    transactionsProgress: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 30
    },
    progress: {
        fontSize: 16,
        color: 'gray'
    },
    transactions: {
        fontSize: 16,
        color: 'gray'
    },
    wrapBanks: {
        paddingRight: 20,
        paddingLeft: 20,
        // paddingTop: 40,
        paddingBottom: 20,
        width: '100%'
    },
    bank: {
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    wrapIconBank: {
        borderColor: '#000',
        borderRadius: 15,
        borderWidth: 1,
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:20
    },
    wrapInfoBank: {
        // paddingTop: 5,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        width: '80%',
    },
    wrapNameBankSum: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    nameBank: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    sum: {
        fontSize: 16
    },
    accountWrap: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 30
    },
    accountName: {
        fontSize: 16,
        color: 'gray'
    },
    accountPoint: {
        fontSize: 16,
        color: 'gray'
    },
    accountCard: {
        fontSize: 16,
        color: 'gray'
    },
    headBlock: {
        backgroundColor: 'blue',
        width: '100%',
        height: 200,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30
    },
    wrapKeseeArrow: {
        display : 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    keseeText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    arrowDown: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    period: {
        paddingTop: 10,
        textTransform: 'uppercase',
        fontSize: 16
    },
    totalSum: {
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    shekel: {
        color: '#fff',
        fontSize: 30
    },
    beforComa: {
        color: '#fff',
        fontSize: 50
    },
    afterComa: {
        color: '#fff',
        fontSize: 25
    }
})