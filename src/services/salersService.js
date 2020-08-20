import api from './api';

export class SalersService {

    async create(product){
        const res = await api.post('vendedores', product);
        return res.data;
    }

    async readOne(id){
        const res = await api.get("vendedores/"+id);
        return res.data;
    }

    async readAll(nome){
        const res = await api.get('vendedores?nome='+nome);
        return res.data;
    }

    async update(product){
        const res = await api.put('vendedores/'+product.id, product);
        return res.data;
    }

    async delete(id){
        const res = await api.delete('vendedores/'+id);
        return res.data;
    }
}