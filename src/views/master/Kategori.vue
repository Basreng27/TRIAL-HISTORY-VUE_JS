<template>
<div>
    <div class="card bg-card">
        <div class="card-header bg-card-header">
            Master Kategori
        </div>

        <div class="card-body">
            <form>
                <div class="mb-3">
                    <label class="form-label">Kategori</label>
                    <input type="text" class="form-control">
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>
</template>

<!-- import { ref, onMounted } from 'vue';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  setup() {
    const db = firebase.firestore();

    // Lakukan pengambilan data atau operasi lain dengan Firestore
    // Misalnya, mengambil data dari koleksi
    const items = ref([]);

    const fetchItems = async () => {
      const snapshot = await db.collection('items').get();
      items.value = snapshot.docs.map((doc) => doc.data());
    };

    onMounted(() => {
      fetchItems();
    });

    return {
      items,
    };
  },
}; -->

