import express from 'express'
import { people } from '../data.js'
import { getPeople, createPerson, updatePerson, deletePerson } from '../controller/people.js'

const router = express.Router()

// i have controller functions that i want to use here

// router.get('/', getPeople)

// router.post('/', createPerson)

// router.put('/:id', updatePerson)



// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson)

router.route('/:id').put(updatePerson).delete(deletePerson)





export default router
