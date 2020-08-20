import api from './api';

export class SalersService {

    async create(customer){
        const res = await api.post('clientes', customer);
        return res.data;
    }

    async readOne(id){
        const res = await api.get("clientes/"+id);
        return res.data;
    }

    async readAll(nome){
        const res = await api.get('clientes?nome='+nome);
        return res.data;
    }

    async update(customer){
        const res = await api.put('clientes/'+customer.id, customer);
        return res.data;
    }

    async delete(id){
        const res = await api.delete('clientes/'+id);
        return res.data;
    }
}