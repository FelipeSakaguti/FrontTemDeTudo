import api from './api';

export class ProductService {

    async create(product){
        const res = await api.post('produtos', product);
        return res.data;
    }

    async readOne(id){
        const res = await api.get("produtos/"+id);
        return res.data;
    }

    async readAll(nome){
        const res = await api.get('produtos?nome='+nome);
        return res.data;
    }

    async update(product){
        const res = await api.put('produtos/'+product.id, product);
        return res.data;
    }

    async delete(id){
        const res = await api.delete('produtos/'+id);
        return res.data;
    }
}