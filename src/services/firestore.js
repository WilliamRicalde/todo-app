import firebase from './firebase'

const db = firebase.firestore()

export const getAllTasks = onChange => {
  return db.collection('tasks').orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
    const tasks = []

    querySnapshot.forEach(doc => {
      tasks.push({ ...doc.data(), id: doc.id })
    })

    onChange(tasks)
  })
}

export const createTask = task => {
  const createdAt = firebase.firestore.FieldValue.serverTimestamp()
  return db.collection('tasks').add({ ...task, createdAt })
}

export const deleteTaskById = async (id) => {
  return db.collection('tasks').doc(id).delete()
}
