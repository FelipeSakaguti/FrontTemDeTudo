import api from './api';

export class SellerService {

    async create(seller){
        const res = await api.post('vendedores', seller);
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

    async update(seller){
        const res = await api.put('vendedores/'+seller.id, seller);
        return res.data;
    }

    async delete(id){
        const res = await api.delete('vendedores/'+id);
        return res.data;
    }
}