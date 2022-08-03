const testController = (req, res) => {
    console.log(req.body, req.query, req.params, 'REQ');
    return res.send({
        respose: 'good job'
    })
}

export default {
    testController,
}