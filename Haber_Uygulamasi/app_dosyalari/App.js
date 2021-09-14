/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NewsItem from './NewsItem.js';

const App: () => React$Node = () => {
  return (
      <SafeAreaView>
        <View><Text style={styles.bas}> ENSONHABER </Text></View>
        <ScrollView>
       
        <NewsItem type='egitim' title='Çürüyen bilgisayarlardan yedi bilişim laboratuvarı kurdu' description='Türkiyenin yapay zekada geç kalmaması için öğrencilerin bilgisayar kullanmasını çok önemseyen bilgisayar öğretmeni Fatih Arıca örnek bir projeye imza attı    '/>
        <NewsItem type='egitim' title='4 Aralık EBA TV canlı ders programı ve saatleri belli oldu!' description='Türkiye’de corona virüsü sebebiyle eğitim EBA TV üzerinden uzaktan yapılabiliyor.'/>
        <NewsItem type='egitim' title='ALES ertelendi mi? ÖSYM’den sınavlar hakkında açıklamaS!' description='ÖSYM’nin sınav takvimine göre 2020 ALES/2 sınavı bu hafta sonunda gerçekleştirilecekti. '/>
       
        <NewsItem type='otomotiv' title='2. el fiyatları 50 bin ile 150 bin TL arasına sıkıştı' description='2. el otomobil pazarındaki hareketlilik son günlerin en popüler konuları arasında. Sahibinden internet sitesi, pazarın kasım ayı verilerini açıkladı. '/>
        <NewsItem type='otomotiv' title='Ford Otosan’dan elektrikli araç yatırımı!' description='Türkiyede 60 yıldır otomotiv üretimi gerçekleştiren Ford Otosan, yaptığı yatırımlara yenisini ekledi.'/>
        <NewsItem type='otomotiv' title='İşte Türkiyede kış lastiğigerçeği!' description='1 Aralık - 1 Nisan tarihleri arasında kullanım zorunluluğu getiren Kış Lastiği yönetmeliğine çok az zaman kaldı.'/>
        
        <NewsItem type='sagkik' title='Coronaya yakalandığım için şanslı hissediyorum' description='Zonguldak Ereğli Devlet Hastanesi Anestezi ve Reanimasyon Uzmanı Dr. Hatice Fidan, corona testinin pozitif çıktığını sosyal medya hesabından duyurdu.'/>
        <NewsItem type='sagkik' title='‘8 kez corona virüsünü geçirmek abartıdır’' description='Sosyal medyada 8-9 kez corona virüsü hastalığını geçirdiğini iddia eden kişilerin.'/>
        <NewsItem type='sagkik' title='Coronaya yakalandığım için şanslı hissediyorum' description='Zonguldak Ereğli Devlet Hastanesi Anestezi ve Reanimasyon Uzmanı Dr. Hatice Fidan, corona testinin pozitif çıktığını sosyal medya hesabından duyurdu.'/>
       
        <NewsItem type='dunya' title='ABD istihbarat direktörü: En büyük tehdit Çin' description=' The standard Lorem Ipsum passage, used since the 1500s.'/>
        <NewsItem type='dunya' title='ABden Türkiye yorumu: Kedi ve fare oyunu sona ermeli' description='The standard Lorem Ipsum passage, used since the 1500s'/>
        <NewsItem type='dunya' title='Yunanistan da karantina 1 hafta daha uzuyor' description=' The standard Lorem Ipsum passage, used since the 1500s'/>

        <NewsItem type='gurme' title='Sevilerek tüketiliyor... En acı biberden reçel yaptılar' description=' The standard Lorem Ipsum passage, used since the 1500s.'/>
        <NewsItem type='gurme' title='60 yıldır kullanılmayan mağarada yapacaklar! Kilosu 130 lira' description='The standard Lorem Ipsum passage, used since the 1500s'/>
        <NewsItem type='gurme' title='Dünyanın en sevilen 7 çorbası... Biri Türkiye den!' description=' The standard Lorem Ipsum passage, used since the 1500s'/>

        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bas:{
    fontSize: 10,
    fontWeight: "normal"
  }
});

export default App;