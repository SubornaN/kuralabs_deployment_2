from application import app

# def test_quick():
#   a = "jeff"
#   greeting = greet(a)
#   assert greeting == "Hi jeff"

def test_home_page():
    response = app.test_client().get('/')
    assert response.status_code == 200
    
def test_unsaved_url():
    response = app.test_client().get('youtube.com')
    assert response.status_code == 404
    
def test_saved_url():
    response = app.test_client().get('/house')
    assert response.status_code == 200
