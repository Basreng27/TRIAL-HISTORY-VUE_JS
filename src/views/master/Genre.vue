<!-- get data -->

<template>
  <div>
    <button @click="getFirestoreData">Ambil Data Firestore</button>
    <ul>
      <li class="text-white" v-for="item in items" :key="item.id">
        Nama: {{ item.data.nama }}, Deskripsi: {{ item.data.desc }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../../config/config'; // Pastikan path-nya benar

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async getFirestoreData() {
      const koleksiRef = collection(db, 'kategori'); // Ganti 'kategori' dengan nama koleksi Firestore Anda

      try {
        const querySnapshot = await getDocs(koleksiRef);
        this.items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }));
      } catch (error) {
        console.error('Gagal mengambil data Firestore:', error);
      }
    },
  },
};
</script>
