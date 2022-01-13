#### If we want to conditionally render the model, based on the value of the state (true or false), all we have to do is open some curly brackets and add a condition

```javascript
{
  openModal && <Modal />;
}
```

##### The toLocaleLowerCase() method does not change the original string. The toLocaleLowerCase() returns the same result as toLowerCase() , except for locales that conflict with the regular Unicode case mappings (such as Turkish).

```javascript
        {professions.map((profession) => (
            <button
              type="button"
              key={profession}
              className="btn-card"
              onClick={() => setMyProfession(profession)}
            >
              {profession.toLocaleUpperCase()}
            </button>
          ))}
        </div>
```
