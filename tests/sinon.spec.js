import sinon from 'sinon'

describe('Testing sinon', () => {
  context('Spy', () => {
    // Example spy defined
    it('should create a spy and use it', () => {
      const spy = sinon.spy();

      spy('Hello', 'World');

      sinon.assert.calledOnce(spy)
    });
    // Example anonimous spy
    it('should do a anonimous usage and work', () => {
      const user = {
        setName: function(name) {
          this.name = name;
        }
      }

      const spySetName = sinon.spy(user, 'setName');

      user.setName('Gabriel');

      sinon.assert.callOrder(spySetName);

      spySetName.restore();
    });
  });

  context('Stub', () => {
    const $ = {
      post: function(url, body, callback) {
        callback();
      }
    }

    const saveUser = (user, callback) => {
      return $.post('/user', user, callback);
    }

    // Testing ajax post
    it('should do a ajax call without have a server', () => {
      let post = sinon.stub($, 'post');
      post.yields();

      const callback = sinon.spy();

      saveUser({ firstName: 'Gabriel', lastName: 'Giro' }, callback);

      post.restore();
      sinon.assert.calledOnce(callback);
    });

    // Testing ajax arguments call
    it('should do a ajaxa call with arguments', () => {
      const post = sinon.stub($, 'post');

      const expectedUrl = '/user';
      const expectedBody = {
        firstName: 'Gabriel',
        lastName: 'Giro',
      }

      const user = {
        firstName: expectedBody.firstName,
        lastName: expectedBody.lastName
      }

      saveUser(user, function() {});
      post.restore();

      sinon.assert.calledWith(post, expectedUrl, expectedBody);
    });
  });

  context('Mock', () => {
    it('should test a false API function', () => {
      const myAPI = { method: function() {} };

      const mock = sinon.mock(myAPI);
      mock.expects('method').once();

      myAPI.method();

      mock.verify();
      mock.restore();
    });
  });
});
