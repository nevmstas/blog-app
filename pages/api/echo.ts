export default function echo(req, res){
    res.statusCode = 200
    res.setHeaders('Content-Type', 'application/json')
    res.end(JSON.stringify({
        message: req.query.message ?? 'Base message'
    }))
}