export class Promocion {
    public id         : number;
    public title      : string;
    public price      : number;
    public address    : string;
    public latitud    : string;
    public longitud   : string;
    public created_at : string;
    public updated_at : string;

    constructor() {
        this.id         = 0;
        this.title      = "";
        this.price      = 0;
        this.address    = "";
        this.latitud    = "";
        this.longitud   = "";
        this.created_at = "";
        this.updated_at = "";
    }

    fromJson(_json: string) {
        this.id         = _json["id"]         || 0;
        this.title      = _json["title"]      || "";
        this.price      = _json["price"]      || 0;
        this.address    = _json["address"]    || "";
        this.latitud    = _json["latitud"]    || "";
        this.longitud   = _json["longitud"]   || "";
        this.created_at = _json["created_at"] || "";
        this.updated_at = _json["updated_at"] || "";
    }
}